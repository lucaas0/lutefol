import FlagPT from '../public/flag-pt.svg';
import FlagBR from '../public/flag-br.svg';
import BadgeBronze from '../public/badge-bronze.svg';
import BadgeBlue from '../public/badge-blue.svg';
import BadgeYellow from '../public/badge-yellow.svg';
import BadgeGreen from '../public/badge-green.svg';
import { Goal, INCIDENTS, Match, MatchIncident, MiniGame, Nationalities, PlayerMatchStats, PlayerSeasonStats, TeamName } from './misc';
import { AlexandreLopes, AlexandreSantos, AndreSalvado, BernardoFigueiredo, DiogoDomingues, FranciscoMachado, GustavoCarreira,
IvoOliveira, JoaoFerreira, JoaoMota, JoaoPaulino, JorgeFerreira, JosePedrosa, LucasGarcia, NunoReis,
RenatoOliveira, RodrigoAlves, RubenRodrigues, TomasSantos, PedroLopes, PedroGoncalves } from './playersDB';
import { Matches } from './MatchesDB';
import { ExtendedTeamPlayer, MatchT, MatchesByMonthMap } from '../types/types';


export const PlayersArr: ExtendedTeamPlayer[] = [
    AndreSalvado,
    AlexandreSantos,
    BernardoFigueiredo,
    DiogoDomingues,
    FranciscoMachado,
    GustavoCarreira,
    IvoOliveira,
    JoaoFerreira,
    JoaoMota,
    JoaoPaulino,
    JorgeFerreira,
    JosePedrosa,
    LucasGarcia,
    NunoReis,
    RenatoOliveira,
    RubenRodrigues,
    TomasSantos,
    AlexandreLopes,
    PedroLopes,
    RodrigoAlves,
    PedroGoncalves,
];

export const getNationalityFlag = (nationality: Nationalities) => {
    switch (nationality) {
        case Nationalities.BRA:
            return FlagBR;
        case Nationalities.PT:
            return FlagPT;
        default:
            return FlagPT;
    }
}

export const getPlayerBadge = (overall: number) => {
    if (overall < 60) return BadgeBronze;
    if (overall >= 61 && overall <=75) return BadgeYellow;
    if (overall > 75 && overall <=85) return BadgeBlue;

    return BadgeGreen;
}

export const getMatchById = (matchId: string) => {
    const match = Matches.find((m) => m.id === matchId);

    if (!match) {
        console.error(`Match with ID ${matchId} not found.`);
        return undefined;
    }

    return match;
}


export const getMatchIncidentsById = (matchId: string) => {
    const match = Matches.find((m) => m.id === matchId);

    if (!match) {
        console.error(`Match with ID ${matchId} not found.`);
        return [];
    }

    return match.incidents;
}

// Function to sort players by OVR in ascending order
export const sortByOVRAsc = (players: ExtendedTeamPlayer[]) => {
  return players.slice().sort((a, b) => a.stats.OVR - b.stats.OVR);
};

// Function to sort players by OVR in descending order
export const sortByOVRDesc = (players: ExtendedTeamPlayer[]) => {
  return players.slice().sort((a, b) => b.stats.OVR - a.stats.OVR);
};

// Function to sort players by GOALS in ascending order
export const sortByGoalsAsc = (players: ExtendedTeamPlayer[]) => {
    return players.slice().sort((a, b) => a.goals - b.goals);
};

// Function to sort players by GOALS in descending order
export const sortByGoalsDesc = (players: ExtendedTeamPlayer[]) => {
    return players.slice().sort((a, b) => b.goals - a.goals);
};

// Function to sort players by ASSISTS in ascending order
export const sortByAssistsAsc = (players: ExtendedTeamPlayer[]) => {
    return players.slice().sort((a, b) => a.assists - b.assists);
};

// Function to sort players by ASSISTS in descending order
export const sortByAssistsDesc = (players: ExtendedTeamPlayer[]) => {
    return players.slice().sort((a, b) => b.assists - a.assists);
};

const getTopPlayers = (matches: Match[]): { topScorers: PlayerMatchStats[], topAssists: PlayerMatchStats[] } => {
  const playerStatsMap: Map<string, PlayerMatchStats> = new Map();

  // Loop through matches and accumulate goals and assists
  matches.forEach((match) => {
    const { incidents, miniMatches } = match;

      const matchMiniIncidents = miniMatches ? miniMatches.flatMap((miniGame) => miniGame.incidents) : [];

    const allIncidents = miniMatches ? [...incidents, ...matchMiniIncidents] : [...incidents];

    allIncidents.forEach((incident) => {
      if (incident.type === INCIDENTS.GOAL) {
          // Update scorer's stats
          const scorerKey = `${incident.Scorer.firstName}-${incident.Scorer.lastName}`;
          const scorerStats = playerStatsMap.get(scorerKey) || { player: incident.Scorer, goals: 0, assists: 0 };
          scorerStats.goals += 1;
          playerStatsMap.set(scorerKey, scorerStats);

          // Update assist's stats if available
          if (incident.Assist) {
              const assistKey = `${incident.Assist.firstName}-${incident.Assist.lastName}`;
              const assistStats = playerStatsMap.get(assistKey) || { player: incident.Assist, goals: 0, assists: 0 };
              assistStats.assists += 1;
              playerStatsMap.set(assistKey, assistStats);
          }
      }
    });
  });

  // Convert the map to an array and sort by goals and assists
  const playerStatsArray = Array.from(playerStatsMap.values());
  const topScorers = playerStatsArray.sort((a, b) => b.goals - a.goals).slice(0, 3);
  const topAssists = playerStatsArray.sort((a, b) => b.assists - a.assists).slice(0, 3);

  return { topScorers, topAssists };
};

export const { topScorers, topAssists } = getTopPlayers(Matches);

type TeamScores = {
    [team: string]: number;
};

export const getMatchResult = (players: Goal[]) => {
        const teamScores: TeamScores = {};

        players.forEach((player) => {
            const { Team } = player;
            teamScores[Team] = (teamScores[Team] || 0) + 1;
        });

        return teamScores;
}

interface AggregatedResult {
    team1: string;
    team2: string;
    goalsTeam1: number;
    goalsTeam2: number;
}

export const aggregateResults = (data: MiniGame[], team1: string, team2: string): AggregatedResult => {
    const aggregatedResult: AggregatedResult = {
        team1,
        team2,
        goalsTeam1: 0,
        goalsTeam2: 0,
    };

    data.forEach((game) => {
        const [teamA, teamB] = game.teams;

        if ((teamA === team1 && teamB === team2) || (teamA === team2 && teamB === team1)) {
            game.incidents.forEach((incident) => {
                if (incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) {
                    if (incident.Team === team1) {
                        aggregatedResult.goalsTeam1++;
                    } else if (incident.Team === team2) {
                        aggregatedResult.goalsTeam2++;
                    }
                }
            });
        }
    });

    return aggregatedResult;
}

export const createFormattedDateTime = (data: { date: Date | null, time: string}): string => {
    if (!data.date) return '';

    // Convert date string to Date object
    const dateObject: Date = data.date;
  
   // Extract time from the "time" field and convert to Date object
    const timeArray: string[] = data.time.split(':');
    dateObject.setUTCHours(parseInt(timeArray[0], 10), parseInt(timeArray[1], 10), 0, 0);
  
    // Format the date as a string with timezone offset
    const formattedDateTime: string = dateObject.toISOString();
  
  return formattedDateTime;
}

export enum OrderingType {
    ASCENDING = 'ascending',
    DESCENDING = 'descending',
}

export const groupMatchesByMonth = (
    matches: MatchT[],
    orderingType: OrderingType = OrderingType.ASCENDING
  ): MatchesByMonthMap => {
    const matchesByMonth: MatchesByMonthMap = {};
  
    const compareScheduledStart = (a: MatchT, b: MatchT): number => {
      const dateA = new Date(a.scheduledStart).getTime();
      const dateB = new Date(b.scheduledStart).getTime();
      return orderingType === OrderingType.ASCENDING ? dateA - dateB : dateB - dateA;
    };
  
    matches.forEach((match) => {
      const scheduledStart = new Date(match.scheduledStart);
      const monthKey = `${scheduledStart.getFullYear()}-${(scheduledStart.getMonth() + 1).toString().padStart(2, '0')}`;
  
      if (!matchesByMonth[monthKey]) {
        matchesByMonth[monthKey] = [];
      }
  
      matchesByMonth[monthKey].push(match);
    });
  
    // Sort matches within each month based on the ordering type
    Object.values(matchesByMonth).forEach((matchesInMonth) => {
      matchesInMonth.sort(compareScheduledStart);
    });
  
    return matchesByMonth;
  };

export const constructSearchParams = (params: Record<string, string | number | boolean | string[]>): URLSearchParams => {
    const searchParams = new URLSearchParams();

    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            searchParams.append(key, value.toString());
        }
    }

    return searchParams;
}