'use client';
import PageWrapper from "@/components/PageWrapper";
import Tab from "@/components/Tab";
import CustomTabs from "@/components/Tabs";
import { Goal, INCIDENTS, Match, Months, Weekday } from "@/misc";
import { createFormattedDateTime, getMatchById, getMatchResult } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import '../../../assets/styles/matchCenter.css';
import axios from "axios";
import { matchURL } from "@/services/api";
import { MatchDetails, MatchStatus, Modality } from "../../../../types/types";
import LogoHomeTeam from '../../../../public/logo-green.svg';
import LogoAwayTeam from '../../../../public/logo-red.svg';

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const route = usePathname();
    const params: { matchId: string } = useParams();

    const [match, setMatch] = useState<MatchDetails | undefined>(undefined);

    useEffect(() => {
        console.log('starting fetch')
        
        const getMatchDetails = async (id: number) => {
            try {
                const { data } = await axios.get<MatchDetails>(matchURL(id));
                setMatch(data);
                return data;
            } catch (error) {
                console.log(error);
                const oldMatch = getMatchById(params.matchId);

                if (oldMatch) {
                    const result = oldMatch ? getMatchResult(oldMatch.incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]): null;
                    
                    const newMatchTyped: MatchDetails = {
                        awayTeamPlayers: [],
                        homeTeamPlayers: [],
                        matchEvents: [],
                        realEnd: '',
                        realLength: '',
                        realStart: '',
                        matchDTO: {
                            awayTeamName: oldMatch.teams[1].name,
                            awayTeamScore: result ? result['Corsairs'] : 0,
                            homeTeamName: oldMatch.teams[0].name,
                            homeTeamScore: result ? result['Scallywags'] : 0,
                            createdDate: '',
                            id: Number(oldMatch.id),
                            lastModifiedDate: '',
                            matchStatus: oldMatch.incidents.length > 0 ? MatchStatus.COMPLETED : MatchStatus.SCHEDULED,
                            modality: Modality.FUTSAL,
                            scheduledLength: '',
                            scheduledStart: createFormattedDateTime({ date: oldMatch.date, time: oldMatch.time }),
                            venueId: 1,
                            venueName: oldMatch.location
                        }
                    }
                    setMatch(newMatchTyped);
                }
                return undefined;
            }
        }
        if (params.matchId) {
            getMatchDetails(Number(params.matchId));

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.matchId]);

    const renderTeam = (teamName: string, homeTeam: boolean) => {
        return (
            <React.Fragment key={`team-${teamName}`}>
                <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                    {
                        homeTeam ? (
                            <>
                                <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">{teamName}</h2>
                                <Image src={homeTeam ? LogoHomeTeam : LogoAwayTeam} alt="" width={52} height={52} />
                            </>
                        ) : (
                            <>
                                <Image src={homeTeam ? LogoHomeTeam : LogoAwayTeam} alt="" width={52} height={52} />
                                <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">{teamName}</h2>
                            </>
                        )
                    }
                </div>
            </React.Fragment>
        )
    }

    const renderResultOrVS = () => {
        return (
                match?.matchDTO.matchStatus === MatchStatus.COMPLETED ? (
                    <React.Fragment>
                        <h2 className="font-bold text-xl">{match.matchDTO.homeTeamScore}</h2>
                        <h2 className="font-bold text-xl">-</h2>
                        <h2 className="font-bold text-xl">{match.matchDTO.awayTeamScore}</h2>
                    </React.Fragment>
                ) : (
                <h2 className="font-bold text-xl">VS</h2>
            )
        )
    }

    const matchStartDate = match ? new Date(match.matchDTO.scheduledStart) : new Date();

    return (
        <PageWrapper>
            <section className="w-full relative match-center-header">
                <Image src="/match-center-bg.svg" alt="" width={8000} height={500} className="w-full" />
                <div className="absolute top-10 md:top-20 left-16 flex gap-3">
                    <Link href="/matches/results" className="flex gap-2">
                        <Image src="/caret-left-ic.svg" width={24} height={24} alt={`<`} />
                        <span className="uppercase">back to season</span>
                    </Link>
                </div>
                {
                    match && (
                        <React.Fragment>
                            <div className="center-absolute top-28 md:top-20 flex flex-col text-center">
                            <h3 className="color-brand-400 font-bold">{`${Weekday[matchStartDate.getDay()]} ${matchStartDate.getDate()} ${Months[matchStartDate.getMonth()]} ${matchStartDate.getFullYear()}`}</h3>
                                <h4>{`${matchStartDate.getHours()}:${matchStartDate.getMinutes()} - ${match.matchDTO.venueName}`}</h4>
                            </div>
                            <div className="center-absolute bottom-8 md:top-2/3 flex items-center gap-6">
                            {
                                renderTeam(match.matchDTO.homeTeamName, true)
                            }
                            {
                                renderResultOrVS()
                            }
                            {
                                renderTeam(match.matchDTO.awayTeamName, false)
                            }
                            </div>
                        </React.Fragment>
                    )
                }
            </section>
            
            <CustomTabs tabPosition="items-center justify-center">
                    <Tab title="summary" route={`/match-center/${params.matchId}/summary`} selected={route === `/match-center/${params.matchId}/summary`} />
                    <Tab title="lineups" route={`/match-center/${params.matchId}/lineups`} selected={route === `/match-center/${params.matchId}/lineups`} />
                </CustomTabs>
            {children}
        </PageWrapper>
    );
}