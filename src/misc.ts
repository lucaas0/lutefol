import { StaticImageData } from "next/image";

type Stats = ['OVR', 'ATA', 'DEF', 'TEC', 'WR', 'AGRE', 'RES', 'FIN', 'SPE', 'DRI', 'PHY', 'PAS'];

export enum Nationalities {
    BRA = 'BRA',
    PT = 'PT'
}

export const Weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

export type Banner = {
    imageSrc: StaticImageData;
    title: string;
}

export type PlayerStats = {
    [key in Stats[number]]: number;
}

export type Player = {
    firstname: string;
    lastname: string;
    photoUrl: StaticImageData;
    number: number;
    stats: PlayerStats;
    nationality: Nationalities[];
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