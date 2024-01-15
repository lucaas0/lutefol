
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import FlagPT from '../public/flag-pt.svg';
import FlagBR from '../public/flag-br.svg';
import BadgeBronze from '../public/badge-bronze.svg';
import BadgeBlue from '../public/badge-blue.svg';
import BadgeYellow from '../public/badge-yellow.svg';
import BadgeGreen from '../public/badge-green.svg';
import { Goal, Match, Nationalities, Player, PlayerMatchStats, TeamName } from './misc';
import { AlexandreLopes, AlexandreSantos, AndreSalvado, BernardoFigueiredo, DiogoDomingues, FranciscoMachado, GustavoCarreira,
IvoOliveira, JoaoFerreira, JoaoMota, JoaoPaulino, JorgeFerreira, JosePedrosa, LucasGarcia, NunoReis,
RenatoOliveira, RodrigoAlves, RubenRodrigues, TomasSantos } from './playersDB';

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
];

export const shuffleGoalsArray = (array: Goal[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

export const Matches: Match[] = [
    {
        id: '20240104',
        team1: { name: 'Scallywags', logo: LogoRed, players: [
            AndreSalvado, JoaoFerreira, BernardoFigueiredo, DiogoDomingues, RodrigoAlves, AlexandreSantos,
        ]  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [
            RubenRodrigues, NunoReis, RenatoOliveira, LucasGarcia, JosePedrosa, GustavoCarreira,
        ] },
        date: new Date(Date.UTC(2024, 0, 4)),
        time: '18:30',
        location: 'LeiriFoot',
        result: {
            team1: 12,
            team2: 21,
        },
        goals: [
            {Scorer:DiogoDomingues,Assist:AndreSalvado,Team:'Scallywags'},
            {Scorer:NunoReis,Assist:null,Team:'Corsairs'},
            {Scorer:RubenRodrigues,Assist:JosePedrosa,Team:'Corsairs'},
            {Scorer:JosePedrosa,Assist:null,Team:'Corsairs'},
            {Scorer:LucasGarcia,Assist:null,Team:'Corsairs'},
            {Scorer:NunoReis,Assist:LucasGarcia,Team:'Corsairs'},
            {Scorer:RenatoOliveira,Assist:JosePedrosa,Team:'Corsairs'},
            {Scorer:LucasGarcia,Assist:RubenRodrigues,Team:'Corsairs'},
            {Scorer:JoaoFerreira,Assist:AndreSalvado,Team:'Scallywags'},
            {Scorer:JosePedrosa,Assist:LucasGarcia,Team:'Corsairs'},
            {Scorer:RubenRodrigues,Assist:null,Team:'Corsairs'},
            {Scorer:JoaoFerreira,Assist:null,Team:'Scallywags'},
            {Scorer:DiogoDomingues,Assist:null,Team:'Scallywags'},
            {Scorer:JosePedrosa,Assist:null,Team:'Corsairs'},
            {Scorer:NunoReis,Assist:null,Team:'Corsairs'},
            {Scorer:JosePedrosa,Assist:null,Team:'Corsairs'},
            {Scorer:JosePedrosa,Assist:RubenRodrigues,Team:'Corsairs'},
            {Scorer:RubenRodrigues,Assist:null,Team:'Corsairs'},
            {Scorer:JoaoFerreira,Assist:RodrigoAlves,Team:'Scallywags'},
            {Scorer:RubenRodrigues,Assist:JosePedrosa,Team:'Corsairs'},
            {Scorer:DiogoDomingues,Assist:null,Team:'Scallywags'},
            {Scorer:AlexandreSantos,Assist:RodrigoAlves,Team:'Scallywags'},
            {Scorer:JosePedrosa,Assist:null,Team:'Corsairs'},
            {Scorer:NunoReis,Assist:null,Team:'Corsairs'},
            {Scorer:JosePedrosa,Assist:null,Team:'Corsairs'},
            {Scorer:BernardoFigueiredo,Assist:DiogoDomingues,Team:'Scallywags'},
            {Scorer:DiogoDomingues,Assist:null,Team:'Scallywags'},
            {Scorer:RodrigoAlves,Assist:DiogoDomingues,Team:'Scallywags'},
            {Scorer:GustavoCarreira,Assist:JosePedrosa,Team:'Corsairs'},
            {Scorer:NunoReis,Assist:null,Team:'Corsairs'},
            {Scorer:JosePedrosa,Assist:null,Team:'Corsairs'},
            {Scorer:BernardoFigueiredo,Assist:AndreSalvado,Team:'Scallywags'},
            {Scorer:AndreSalvado,Assist:null,Team:'Scallywags'}]
    },
    {
        id: '20240108',
        team1: { name: 'Scallywags', logo: LogoRed, players: [
            AndreSalvado, JoaoFerreira, JoaoPaulino, BernardoFigueiredo, DiogoDomingues, GustavoCarreira,
        ]  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [
            RubenRodrigues, NunoReis, RenatoOliveira, LucasGarcia, AlexandreLopes, RodrigoAlves,
        ] },
        date: new Date(Date.UTC(2024, 0, 8)),
        time: '18:30',
        location: 'LeiriFoot',
        result: {
            team1: 17,
            team2: 19,
        },
        goals: [
        {Scorer:NunoReis,Assist: RubenRodrigues,Team:'Corsairs'},
        {Scorer:RubenRodrigues,Assist:null,Team:'Corsairs'},
        {Scorer:AlexandreLopes,Assist:LucasGarcia,Team:'Corsairs'},
        {Scorer:AndreSalvado,Assist:null,Team:'Scallywags'},
        {Scorer:LucasGarcia,Assist:null,Team:'Corsairs'},
        {Scorer:LucasGarcia,Assist:AlexandreLopes,Team:'Corsairs'},
        {Scorer:NunoReis,Assist:LucasGarcia,Team:'Corsairs'},
        {Scorer:AndreSalvado,Assist:null,Team:'Scallywags'},
        {Scorer:AndreSalvado,Assist:null,Team:'Scallywags'},
        {Scorer:LucasGarcia,Assist:NunoReis,Team:'Corsairs'},
        {Scorer:NunoReis,Assist:null,Team:'Corsairs'},
        {Scorer:GustavoCarreira,Assist:null,Team:'Scallywags'},
        {Scorer:RubenRodrigues,Assist:NunoReis,Team:'Corsairs'},
        {Scorer:DiogoDomingues,Assist:null,Team:'Scallywags'},
        {Scorer:JoaoFerreira,Assist:null,Team:'Scallywags'},
        {Scorer:AlexandreLopes,Assist:NunoReis,Team:'Corsairs'},
        {Scorer:RodrigoAlves,Assist:NunoReis,Team:'Corsairs'},
        {Scorer:AndreSalvado,Assist:null,Team:'Scallywags'},
        {Scorer:JoaoPaulino,Assist:null,Team:'Scallywags'},
        {Scorer:JoaoFerreira,Assist:AndreSalvado,Team:'Scallywags'},
        {Scorer:JoaoFerreira,Assist:null,Team:'Scallywags'},
        {Scorer:BernardoFigueiredo,Assist:null,Team:'Scallywags'},
        {Scorer:AndreSalvado,Assist:BernardoFigueiredo,Team:'Scallywags'},
        {Scorer:JoaoPaulino,Assist:null,Team:'Scallywags'},
        {Scorer:AndreSalvado,Assist:null,Team:'Scallywags'},
        {Scorer:RubenRodrigues,Assist:null,Team:'Corsairs'},
        {Scorer:LucasGarcia,Assist:null,Team:'Corsairs'},
        {Scorer:LucasGarcia,Assist:RodrigoAlves,Team:'Corsairs'},
        {Scorer:DiogoDomingues,Assist:null,Team:'Scallywags'},
        {Scorer:NunoReis,Assist:LucasGarcia,Team:'Corsairs'},
        {Scorer:RenatoOliveira,Assist:null,Team:'Corsairs'},
        {Scorer:LucasGarcia,Assist:NunoReis,Team:'Corsairs'},
        {Scorer:AndreSalvado,Assist:null,Team:'Scallywags'},
        {Scorer:NunoReis,Assist:AlexandreLopes,Team:'Corsairs'},
        {Scorer:AlexandreLopes,Assist:NunoReis,Team:'Corsairs'},
        {Scorer:JoaoPaulino,Assist:null,Team:'Scallywags'},
    ]
    },
    {
        id: '20240111',
        team1: { name: 'Scallywags', logo: LogoRed, players: [TomasSantos, JoaoFerreira, RodrigoAlves, DiogoDomingues, LucasGarcia]  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [RubenRodrigues, AlexandreSantos, JorgeFerreira, GustavoCarreira, NunoReis, JoaoMota] },
        date: new Date(Date.UTC(2024, 0, 11)),
        time: '18:30',
        location: 'LeiriFoot',
        result: {
            team1: 15,
            team2: 8,
        },
        goals: [
            {Scorer:GustavoCarreira,Assist:null,Team:'Corsairs'},
            {Scorer:DiogoDomingues,Assist:LucasGarcia,Team:'Scallywags'},
            {Scorer:RubenRodrigues,Assist:AlexandreSantos,Team:'Corsairs'},
            {Scorer:AlexandreSantos,Assist:NunoReis,Team:'Corsairs'},
            {Scorer:JoaoFerreira,Assist:LucasGarcia,Team:'Scallywags'},
            {Scorer:JoaoFerreira,Assist:DiogoDomingues,Team:'Scallywags'},
            {Scorer:JoaoFerreira,Assist:null,Team:'Scallywags'},
            {Scorer:JoaoFerreira,Assist:null,Team:'Scallywags'},
            {Scorer:JoaoMota,Assist:null,Team:'Scallywags'},
            {Scorer:DiogoDomingues,Assist:JoaoFerreira,Team:'Scallywags'},
            {Scorer:RodrigoAlves,Assist:null,Team:'Scallywags'},
            {Scorer:GustavoCarreira,Assist:JoaoMota,Team:'Corsairs'},
            {Scorer:RubenRodrigues,Assist:null,Team:'Corsairs'},
            {Scorer:JoaoFerreira,Assist:null,Team:'Scallywags'},
            {Scorer:JorgeFerreira,Assist:NunoReis,Team:'Corsairs'},
            {Scorer:DiogoDomingues,Assist:TomasSantos,Team:'Scallywags'},
            {Scorer:JoaoMota,Assist:NunoReis,Team:'Corsairs'},
            {Scorer:TomasSantos,Assist:null,Team:'Scallywags'},
            {Scorer:LucasGarcia,Assist:null,Team:'Scallywags'},
            {Scorer:RodrigoAlves,Assist:JoaoFerreira,Team:'Scallywags'},
            {Scorer:TomasSantos,Assist:null,Team:'Scallywags'},
            {Scorer:RodrigoAlves,Assist:LucasGarcia,Team:'Scallywags'},
            {Scorer:RubenRodrigues,Assist:null,Team:'Corsairs'}
        ]
    },
    {
        id: '20240115',
        team1: { name: 'Scallywags', logo: LogoRed, players: [
            NunoReis, LucasGarcia, AlexandreLopes, BernardoFigueiredo, RubenRodrigues,
        ]  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [
            JosePedrosa, JoaoFerreira, AndreSalvado, JoaoPaulino, TomasSantos, RenatoOliveira
        ] },
        date: new Date(Date.UTC(2024, 0, 15)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: [],
    },
    {
        id: '20240118',
        team1: { name: 'Scallywags', logo: LogoRed, players: []  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 18)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []
    },
    {
        id: '20240122',
        team1: { name: 'Scallywags', logo: LogoRed, players: []  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 22)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []
    },
    {
        id: '20240125',
        team1: { name: 'Scallywags', logo: LogoRed, players: []  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 25)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []
    },
    {
        id: '20240129',
        team1: { name: 'Scallywags', logo: LogoRed, players: []  },
        team2: { name: 'Corsairs', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 29)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []
    }
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
