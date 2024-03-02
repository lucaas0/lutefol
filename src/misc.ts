import { StaticImageData } from "next/image";
import { ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { ExtendedTeamPlayer } from "../types/types";

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

export type Team = {
    name: TeamName;
    logo: string;
    players: ExtendedTeamPlayer[];
}

export enum INCIDENTS {
    GOAL = 'GOAL',
    SUBSTITUTION = 'SUBSTITUTION',
    OWN_GOAL = 'OWN_GOAL'
}

export type Goal = {
    type: INCIDENTS.GOAL | INCIDENTS.OWN_GOAL;
    Scorer: ExtendedTeamPlayer;
    Assist: ExtendedTeamPlayer | null;
    Team: TeamName;
}

export type Substitution = {
    type: INCIDENTS.SUBSTITUTION;
    playerIn: ExtendedTeamPlayer;
    playerOut: ExtendedTeamPlayer;
};
export type MatchIncident = Goal | Substitution;

export type Match = {
    id: string;
    location: string;
    teams: Team[];
    date: Date;
    time: string;
    incidents: MatchIncident[];
    miniMatches?: MiniGame[];
}

export type PlayerMatchStats = {
  player: ExtendedTeamPlayer;
  goals: number;
  assists: number;
};

export type PlayerSeasonStats = {
    goals: number;
    assists: number;
};

export type MiniGame = {
    teams: TeamName[];
    incidents: MatchIncident[];
};

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    value: string;
    type: HTMLInputTypeAttribute;
    hasError: boolean;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    text: string;
}

export enum ToastTypes {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR'
};