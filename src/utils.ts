import PlayerPhoto from '../public/player.png';
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import FlagPT from '../public/flag-pt.svg';
import FlagBR from '../public/flag-br.svg';
import BadgeBronze from '../public/badge-bronze.svg';
import BadgeBlue from '../public/badge-blue.svg';
import BadgeYellow from '../public/badge-yellow.svg';
import BadgeGreen from '../public/badge-green.svg';
import { Match, Nationalities, Player } from './misc';

export const PlayersArr: Player[] = [
    {
        firstname: 'André',
        lastname: 'Salvado',
        photoUrl: PlayerPhoto,
        number: 8,
        stats: {
            AGRE: 66,
            ATA: 79,
            DEF: 75,
            DRI: 79,
            FIN: 65,
            OVR: 73,
            PAS: 75,
            PHY: 66,
            RES: 75,
            SPE: 61,
            TEC: 70,
            WR: 80,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Alexandre',
        lastname: 'Santos',
        photoUrl: PlayerPhoto,
        number: 31,
        stats: {
            AGRE: 60,
            ATA: 83,
            DEF: 63,
            DRI: 89,
            FIN: 70,
            OVR: 72,
            PAS: 84,
            PHY: 60,
            RES: 64,
            SPE: 74,
            TEC: 88,
            WR: 63,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Bernardo',
        lastname: 'Figueiredo',
        photoUrl: PlayerPhoto,
        number: 65,
        stats: {
            AGRE: 99,
            ATA: 55,
            DEF: 68,
            DRI: 54,
            FIN: 59,
            OVR: 69,
            PAS: 55,
            PHY: 80,
            RES: 72,
            SPE: 75,
            TEC: 51,
            WR: 99,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Diogo',
        lastname: 'Domingues',
        photoUrl: PlayerPhoto,
        number: 1,
        stats: {
            AGRE: 1,
            ATA: 56,
            DEF: 66,
            DRI: 50,
            FIN: 60,
            OVR: 66,
            PAS: 55,
            PHY: 71,
            RES: 71,
            SPE: 75,
            TEC: 50,
            WR: 88,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Francisco',
        lastname: 'Machado',
        photoUrl: PlayerPhoto,
        number: 5,
        stats: {
            AGRE: 51,
            ATA: 41,
            DEF: 44,
            DRI: 40,
            FIN: 45,
            OVR: 49,
            PAS: 50,
            PHY: 85,
            RES: 55,
            SPE: 45,
            TEC: 40,
            WR: 41,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Gustavo',
        lastname: 'Carreira',
        photoUrl: PlayerPhoto,
        number: 6,
        stats: {
            AGRE: 65,
            ATA: 47,
            DEF: 46,
            DRI: 45,
            FIN: 55,
            OVR: 52,
            PAS: 50,
            PHY: 69,
            RES: 61,
            SPE: 50,
            TEC: 41,
            WR: 51,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Ivo',
        lastname: 'Oliveira',
        photoUrl: PlayerPhoto,
        number: 11,
        stats: {
            AGRE: 69,
            ATA: 89,
            DEF: 66,
            DRI: 90,
            FIN: 90,
            OVR: 78,
            PAS: 86,
            PHY: 94,
            RES: 66,
            SPE: 51,
            TEC: 90,
            WR: 63,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'João',
        lastname: 'Ferreira',
        photoUrl: PlayerPhoto,
        number: 10,
        stats: {
            AGRE: 1,
            ATA: 89,
            DEF: 76,
            DRI: 91,
            FIN: 72,
            OVR: 80,
            PAS: 86,
            PHY: 66,
            RES: 71,
            SPE: 81,
            TEC: 90,
            WR: 80,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'João',
        lastname: 'Mota',
        photoUrl: PlayerPhoto,
        number: 42,
        stats: {
            AGRE: 59,
            ATA: 40,
            DEF: 50,
            DRI: 45,
            FIN: 50,
            OVR: 48,
            PAS: 50,
            PHY: 60,
            RES: 50,
            SPE: 45,
            TEC: 40,
            WR: 45,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'João',
        lastname: 'Paulino',
        photoUrl: PlayerPhoto,
        number: 7,
        stats: {
            ATA: 79,
            DEF: 80,
            TEC: 71,
            WR: 80,
            AGRE: 65,
            RES: 75,
            FIN: 70,
            SPE: 61,
            DRI: 79,
            PHY: 65,
            PAS: 75,
            OVR: 74,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Jorge',
        lastname: 'Ferreira',
        photoUrl: PlayerPhoto,
        number: 97,
        stats: {
            AGRE: 1,
            ATA: 65,
            DEF: 75,
            DRI: 60,
            FIN: 70,
            OVR: 71,
            PAS: 66,
            PHY: 85,
            RES: 76,
            SPE: 60,
            TEC: 62,
            WR: 79,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'José',
        lastname: 'Pedrosa',
        photoUrl: PlayerPhoto,
        number: 7,
        stats: {
            ATA: 90,
            DEF: 66,
            TEC: 86,
            WR: 75,
            AGRE: 71,
            RES: 71,
            FIN: 86,
            SPE: 70,
            DRI: 86,
            PHY: 80,
            PAS: 86,
            OVR: 79,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Lucas',
        lastname: 'Garcia',
        photoUrl: PlayerPhoto,
        number: 9,
        stats: {
            AGRE: 80,
            ATA: 85,
            DEF: 56,
            DRI: 80,
            FIN: 94,
            OVR: 73,
            PAS: 80,
            PHY: 85,
            RES: 61,
            SPE: 51,
            TEC: 85,
            WR: 53,
        },
        nationality: [Nationalities.BRA, Nationalities.PT]
    },
    {
        firstname: 'Nuno',
        lastname: 'Reis',
        photoUrl: PlayerPhoto,
        number: 17,
        stats: {
            AGRE: 1,
            ATA: 94,
            DEF: 94,
            DRI: 89,
            FIN: 95,
            OVR: 93,
            PAS: 85,
            PHY: 86,
            RES: 100,
            SPE: 85,
            TEC: 89,
            WR: 99,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Renato',
        lastname: 'Oliveira',
        photoUrl: PlayerPhoto,
        number: 68,
        stats: {
            ATA: 50,
            DEF: 51,
            TEC: 50,
            WR: 60,
            AGRE: 55,
            RES: 56,
            FIN: 55,
            SPE: 50,
            DRI: 49,
            PHY: 60,
            PAS: 49,
            OVR: 53,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Rúben',
        lastname: 'Rodrigues',
        photoUrl: PlayerPhoto,
        number: 20,
        stats: {
            AGRE: 66,
            ATA: 84,
            DEF: 70,
            DRI: 84,
            FIN: 75,
            OVR: 74,
            PAS: 76,
            PHY: 66,
            RES: 74,
            SPE: 70,
            TEC: 84,
            WR: 61,
        },
        nationality: [Nationalities.PT]
    },
    {
        firstname: 'Tomás',
        lastname: 'Santos',
        photoUrl: PlayerPhoto,
        number: 27,
        stats: {
            ATA: 56,
            DEF: 51,
            TEC: 56,
            WR: 59,
            AGRE: 55,
            RES: 56,
            FIN: 50,
            SPE: 51,
            DRI: 50,
            PHY: 60,
            PAS: 55,
            OVR: 55,
        },
        nationality: [Nationalities.PT]
    },
];

export const Matches: Match[] = [
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 8)),
        time: '18:30',
        location: 'LeiriFoot',
        result: {
            team1: 17,
            team2: 19,
        },
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 11)),
        time: '18:30',
        location: 'LeiriFoot',
        result: {
            team1: 15,
            team2: 8,
        },
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 15)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,

    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 18)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 22)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 25)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed, players: []  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen, players: [] },
        date: new Date(Date.UTC(2024, 0, 29)),
        time: '18:30',
        location: 'LeiriFoot',
        result: null,
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
