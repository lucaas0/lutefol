import PlayerPhoto from '../public/player.png';
import LogoRed from '../public/logo-red.svg';
import LogoGreen from '../public/logo-green.svg';
import { Match, Player } from './misc';

export const PlayersArr: Player[] = [
    {
        firstname: 'Lucas',
        lastname: 'Garcia',
        photoUrl: PlayerPhoto,
        number: 9,
    },
    {
        firstname: 'Rúben',
        lastname: 'Rodrigues',
        photoUrl: PlayerPhoto,
        number: 66,
    },
    {
        firstname: 'André',
        lastname: 'Salvado',
        photoUrl: PlayerPhoto,
        number: 8,
    },
    {
        firstname: 'Diogo',
        lastname: 'Domingues',
        photoUrl: PlayerPhoto,
        number: 1,
    },
    {
        firstname: 'João',
        lastname: 'Ferreira',
        photoUrl: PlayerPhoto,
        number: 10,
    },
    {
        firstname: 'Ivo',
        lastname: 'Oliveira',
        photoUrl: PlayerPhoto,
        number: 11,
    },
    {
        firstname: 'Gustavo',
        lastname: 'Carreira',
        photoUrl: PlayerPhoto,
        number: 65,
    },
    {
        firstname: 'Rodrigo',
        lastname: 'Alves',
        photoUrl: PlayerPhoto,
        number: 24,
    },
    {
        firstname: 'Bernardo',
        lastname: 'Figueiredo',
        photoUrl: PlayerPhoto,
        number: 13,
    },
    {
        firstname: 'Nuno',
        lastname: 'Reis',
        photoUrl: PlayerPhoto,
        number: 77,
    },
    {
        firstname: 'Jorge',
        lastname: 'Ferreira',
        photoUrl: PlayerPhoto,
        number: 4
    },
    {
        firstname: 'Alexandre',
        lastname: 'Santos',
        photoUrl: PlayerPhoto,
        number: 38,
    },
    {
        firstname: 'Francisco',
        lastname: 'Machado',
        photoUrl: PlayerPhoto,
        number: 5
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