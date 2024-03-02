import { Nationalities } from "@/misc";
import { StaticImageData } from "next/image";

export enum Modality {
    FUTSAL,
};

export enum MatchStatus {
    SCHEDULED, 
    LIVE,
    COMPLETED,
    CANCELED,
};

export enum MatchEventType {
    ASSIST, GOAL, OWN_GOAL, INJURY, SUBSTITUTION, FAULT, YELLOW_CARD, RED_CARD
};

export type MatchT = {
    id: number;
    createdDate: string;
    lastModifiedDate: string;
    homeTeamName: string;
    awayTeamName: string
    scheduledStart: string;
    scheduledLength: string;
    venueName: string;
    venueId: number;
    modality: Modality;
    homeTeamScore: number;
    awayTeamScore: number;
    matchStatus: MatchStatus;
    [key: string]: any;
};

export type APIResponse<T> = {
    results: Array<T>,
    cursor: string;
};

export type MatchesByMonthMap = {
    [month: string]: MatchT[];
};

export type TeamPlayer = {
    id: number,
    createdDate: string;
    lastModifiedDate: string;
    userId: number;
    firstName: string;
    lastName: string;
    nickName: string;
    clubNumber: number;
    wildcard: boolean;
}

export type MatchEvent = {
    id: number;
    createdDate: string;
    lastModifiedDate: string;
    performerPlayerId: number;
    action: MatchEventType;
    timeAtGame: string;
    targetPlayerId: number;
}

export type MatchDetails = {
    matchDTO: MatchT;
    homeTeamPlayers: TeamPlayer[];
    awayTeamPlayers: TeamPlayer[];
    matchEvents: MatchEvent[];
    realStart: string;
    realEnd: string;
    realLength: string;
}

export type Stats = ['OVR', 'ATA', 'DEF', 'TEC', 'WR', 'AGRE', 'RES', 'FIN', 'SPE', 'DRI', 'PHY', 'PAS'];

export type PlayerStats = {
    [key in Stats[number]]: number;
}

export type ExtendedTeamPlayer = TeamPlayer & { photoUrl: StaticImageData, stats: PlayerStats, nationality: Nationalities[], goals: number, assists: number };