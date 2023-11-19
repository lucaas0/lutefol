import { StaticImageData } from 'next/image';
import PlayerPhoto from '../public/player.png';

export type Player = {
    firstname: string;
    lastname: string;
    photoUrl: StaticImageData;
};

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
