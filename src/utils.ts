
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import FlagPT from '../public/flag-pt.svg';
import FlagBR from '../public/flag-br.svg';
import BadgeBronze from '../public/badge-bronze.svg';
import BadgeBlue from '../public/badge-blue.svg';
import BadgeYellow from '../public/badge-yellow.svg';
import BadgeGreen from '../public/badge-green.svg';
import { Goal, Match, Nationalities, Player, TeamName } from './misc';
import { AlexandreSantos, AndreSalvado, BernardoFigueiredo, DiogoDomingues, FranciscoMachado, GustavoCarreira,
IvoOliveira, JoaoFerreira, JoaoMota, JoaoPaulino, JorgeFerreira, JosePedrosa, LucasGarcia, NunoReis,
RenatoOliveira, RodrigoAlves, RubenRodrigues, TomasSantos, WildCard } from './playersDB';

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
        id: '20240108',
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: [
            AndreSalvado, JoaoFerreira, JoaoPaulino, BernardoFigueiredo, DiogoDomingues,
        ]  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [
            RubenRodrigues, NunoReis, RenatoOliveira, LucasGarcia, WildCard, RodrigoAlves,
        ] },
        date: new Date(Date.UTC(2024, 0, 8)),
        time: '18:30',
        location: 'LeiriFoot',
        result: {
            team1: 17,
            team2: 19,
        },
        goals: [
        {Scorer:NunoReis,Assist: RubenRodrigues,Team:'Negacionistas F.C'},
        {Scorer:RubenRodrigues,Assist:null,Team:'Negacionistas F.C'},
        {Scorer:WildCard,Assist:LucasGarcia,Team:'Negacionistas F.C'},
        {Scorer:AndreSalvado,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:LucasGarcia,Assist:null,Team:'Negacionistas F.C'},
        {Scorer:LucasGarcia,Assist:WildCard,Team:'Negacionistas F.C'},
        {Scorer:NunoReis,Assist:LucasGarcia,Team:'Negacionistas F.C'},
        {Scorer:AndreSalvado,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:AndreSalvado,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:LucasGarcia,Assist:NunoReis,Team:'Negacionistas F.C'},
        {Scorer:NunoReis,Assist:null,Team:'Negacionistas F.C'},
        {Scorer:GustavoCarreira,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:RubenRodrigues,Assist:NunoReis,Team:'Negacionistas F.C'},
        {Scorer:DiogoDomingues,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:JoaoFerreira,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:WildCard,Assist:NunoReis,Team:'Negacionistas F.C'},
        {Scorer:RodrigoAlves,Assist:NunoReis,Team:'Negacionistas F.C'},
        {Scorer:AndreSalvado,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:JoaoPaulino,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:JoaoFerreira,Assist:AndreSalvado,Team:'Ressabiados F.C'},
        {Scorer:JoaoFerreira,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:BernardoFigueiredo,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:AndreSalvado,Assist:BernardoFigueiredo,Team:'Ressabiados F.C'},
        {Scorer:JoaoPaulino,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:AndreSalvado,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:RubenRodrigues,Assist:null,Team:'Negacionistas F.C'},
        {Scorer:LucasGarcia,Assist:null,Team:'Negacionistas F.C'},
        {Scorer:LucasGarcia,Assist:RodrigoAlves,Team:'Negacionistas F.C'},
        {Scorer:DiogoDomingues,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:NunoReis,Assist:LucasGarcia,Team:'Negacionistas F.C'},
        {Scorer:RenatoOliveira,Assist:null,Team:'Negacionistas F.C'},
        {Scorer:LucasGarcia,Assist:NunoReis,Team:'Negacionistas F.C'},
        {Scorer:AndreSalvado,Assist:null,Team:'Ressabiados F.C'},
        {Scorer:NunoReis,Assist:WildCard,Team:'Negacionistas F.C'},
        {Scorer:WildCard,Assist:NunoReis,Team:'Negacionistas F.C'},
        {Scorer:JoaoPaulino,Assist:null,Team:'Ressabiados F.C'}]
    },
    {
        id: '20240111',
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 11)),
        time: '18:30',
        location: 'LeiriFoot',
        result: {
            team1: 15,
            team2: 8,
        },
        goals: [],
    },
    {
        id: '20240115',
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 15)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []

    },
    {
        id: '20240118',
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 18)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []
    },
    {
        id: '20240122',
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 22)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []
    },
    {
        id: '20240125',
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 25)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
        goals: []
    },
    {
        id: '20240129',
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
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