import { StaticImageData } from "next/image";

type Stats = ['OVR', 'ATA', 'DEF', 'TEC', 'WR', 'AGRE', 'RES', 'FIN', 'SPE', 'DRI', 'PHY', 'PAS'];

export enum Nationalities {
    BRA = 'BRA',
    PT = 'PT'
}

export type TeamName = 'Scallywags' | 'Corsairs' | 'Buccaneers';

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

export enum INCIDENTS {
    GOAL = 'GOAL',
    SUBSTITUTION = 'SUBSTITUTION',
    OWN_GOAL = 'OWN_GOAL'
}

export type Goal = {
    type: INCIDENTS.GOAL | INCIDENTS.OWN_GOAL;
    Scorer: Player;
    Assist: Player | null;
    Team: TeamName;
}

export type Substitution = {
    type: INCIDENTS.SUBSTITUTION;
    playerIn: Player;
    playerOut: Player;
};
export type MatchIncident = Goal | Substitution;

export type Match = {
    id: string;
    location: string;
    teams: Team[];
    date: Date;
    time: string;
    incidents: MatchIncident[];
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