import { StaticImageData } from "next/image";

type Stats = ['OVR', 'ATA', 'DEF', 'TEC', 'WR', 'AGRE', 'RES', 'FIN', 'SPE', 'DRI', 'PHY', 'PAS'];

export enum Nationalities {
    BRA = 'BRA',
    PT = 'PT'
}

export type TeamName = 'Scallywags' | 'Corsairs';

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
    label: string;
    photoUrl: StaticImageData;
    number: number;
    stats: PlayerStats;
    nationality: Nationalities[];
    goals: number;
    assists: number;
};

export type Team = {
    name: TeamName;
    logo: string;
    players: Player[];
}

export type Goal = {
    Scorer: Player;
    Assist: Player | null;
    Team: TeamName;
}

export type Match = {
    id: string;
    location: string;
    team1: Team;
    team2: Team;
    date: Date;
    time: string;
    result: {
        team1: number;
        team2: number;
    } | null;
    goals: Goal[];
}

export type PlayerMatchStats = {
  player: Player;
  goals: number;
  assists: number;
};

export type PlayerSeasonStats = {
    goals: number;
    assists: number;
};