import PlayerPhoto from '../public/player.png';
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import { Banner, Match, Player } from './misc';

export const PlayersArr: Player[] = [
    {
        firstname: 'Lucas',
        lastname: 'Garcia',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Ruben',
        lastname: 'Rodrigues',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Andre',
        lastname: 'Salvado',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Diogo',
        lastname: 'Domingues',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Joao',
        lastname: 'Ferreira',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Ivo',
        lastname: 'Oliveira',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Gustavo',
        lastname: 'Carreira',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Rodrigo',
        lastname: 'Alves',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Bernardo',
        lastname: 'Figueiredo',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Nuno',
        lastname: 'Reis',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Jorge',
        lastname: 'Ferreira',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Alexandre',
        lastname: 'Santos',
        photoUrl: PlayerPhoto,
    },
    {
        firstname: 'Francisco',
        lastname: 'Machado',
        photoUrl: PlayerPhoto,
    },
];

export const UpcomingMatches: Match[] = [
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen },
        date: new Date(Date.UTC(2024, 0, 8)),
        time: '18:30',
        location: 'LeiriFoot'
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen },
        date: new Date(Date.UTC(2024, 0, 11)),
        time: '18:30',
        location: 'LeiriFoot'
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen },
        date: new Date(Date.UTC(2024, 0, 15)),
        time: '18:30',
        location: 'LeiriFoot'
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen },
        date: new Date(Date.UTC(2024, 0, 18)),
        time: '18:30',
        location: 'LeiriFoot'
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen },
        date: new Date(Date.UTC(2024, 0, 22)),
        time: '18:30',
        location: 'LeiriFoot'
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen },
        date: new Date(Date.UTC(2024, 0, 25)),
        time: '18:30',
        location: 'LeiriFoot'
    },
    {
        team1: { name: 'Ressabiados F.C', logo: LogoRed  },
        team2: { name: 'Negacionistas F.C', logo: LogoGreen },
        date: new Date(Date.UTC(2024, 0, 29)),
        time: '18:30',
        location: 'LeiriFoot'
    }
];

export const Weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];