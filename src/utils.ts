import FlagPT from '../public/flag-pt.svg';
import FlagBR from '../public/flag-br.svg';
import BadgeBronze from '../public/badge-bronze.svg';
import BadgeBlue from '../public/badge-blue.svg';
import BadgeYellow from '../public/badge-yellow.svg';
import BadgeGreen from '../public/badge-green.svg';
import { Goal, Match, Nationalities, Player, PlayerMatchStats, PlayerSeasonStats } from './misc';
import { AlexandreLopes, AlexandreSantos, AndreSalvado, BernardoFigueiredo, DiogoDomingues, FranciscoMachado, GustavoCarreira,
IvoOliveira, JoaoFerreira, JoaoMota, JoaoPaulino, JorgeFerreira, JosePedrosa, LucasGarcia, NunoReis,
RenatoOliveira, RodrigoAlves, RubenRodrigues, TomasSantos, PedroLopes } from './playersDB';
import { Matches } from './MatchesDB';


export const PlayersArr: Player[] = [
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


export const getMatchGoalsById = (matchId: string) => {
    const match = Matches.find((m) => m.id === matchId);

    if (!match) {
        console.error(`Match with ID ${matchId} not found.`);
        return [];
    }

    return match.goals;
}

// Function to sort players by OVR in ascending order
export const sortByOVRAsc = (players: Player[]) => {
  return players.slice().sort((a, b) => a.stats.OVR - b.stats.OVR);
};

// Function to sort players by OVR in descending order
export const sortByOVRDesc = (players: Player[]) => {
  return players.slice().sort((a, b) => b.stats.OVR - a.stats.OVR);
};

// Function to sort players by GOALS in ascending order
export const sortByGoalsAsc = (players: Player[]) => {
    return players.slice().sort((a, b) => a.goals - b.goals);
};

// Function to sort players by GOALS in descending order
export const sortByGoalsDesc = (players: Player[]) => {
    return players.slice().sort((a, b) => b.goals - a.goals);
};

// Function to sort players by ASSISTS in ascending order
export const sortByAssistsAsc = (players: Player[]) => {
    return players.slice().sort((a, b) => a.assists - b.assists);
};

// Function to sort players by ASSISTS in descending order
export const sortByAssistsDesc = (players: Player[]) => {
    return players.slice().sort((a, b) => b.assists - a.assists);
};

const getTopPlayers = (matches: Match[]): { topScorers: PlayerMatchStats[], topAssists: PlayerMatchStats[] } => {
  const playerStatsMap: Map<string, PlayerMatchStats> = new Map();

  // Loop through matches and accumulate goals and assists
  matches.forEach((match) => {
    match.goals.forEach((goal) => {
      // Update scorer's stats
      const scorerKey = `${goal.Scorer.firstname}-${goal.Scorer.lastname}`;
      const scorerStats = playerStatsMap.get(scorerKey) || { player: goal.Scorer, goals: 0, assists: 0 };
      scorerStats.goals += 1;
      playerStatsMap.set(scorerKey, scorerStats);

      // Update assist's stats if available
      if (goal.Assist) {
        const assistKey = `${goal.Assist.firstname}-${goal.Assist.lastname}`;
        const assistStats = playerStatsMap.get(assistKey) || { player: goal.Assist, goals: 0, assists: 0 };
        assistStats.assists += 1;
        playerStatsMap.set(assistKey, assistStats);
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
