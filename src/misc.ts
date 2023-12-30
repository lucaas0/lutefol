import { StaticImageData } from "next/image";

export type Banner = {
    imageSrc: StaticImageData;
    title: string;
}

export type Player = {
    firstname: string;
    lastname: string;
    photoUrl: StaticImageData;
    number: number;
};

export type Team = {
    name: string;
    logo: string;
}

export type Match = {
    location: string;
    team1: Team;
    team2: Team;
    date: Date;
    time: string;
}