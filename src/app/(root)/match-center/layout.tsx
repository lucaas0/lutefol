'use client';
import PageWrapper from "@/components/PageWrapper";
import Tab from "@/components/Tab";
import CustomTabs from "@/components/Tabs";
import { Goal, INCIDENTS, Match, Months, ToastTypes, Weekday } from "@/misc";
import { createFormattedDateTime, getMatchById, getMatchResult } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import '../../../assets/styles/matchCenter.css';
import axios from "axios";
import { matchStatusURL, matchURL } from "@/services/api";
import { MatchDetails, MatchStatus, MatchT, Modality } from "../../../../types/types";
import LogoHomeTeam from '../../../../public/logo-green.svg';
import LogoAwayTeam from '../../../../public/logo-red.svg';
import { useSession } from "next-auth/react";
import { Modal } from "@/components/Modal";
import showToast from "@/components/Toast";

type MatchContextT = {
    match: MatchDetails | null;
    setMatch: (newMatch: MatchDetails) => void;
}

const initialMatch: MatchContextT = {
    match: null,
    setMatch: (newMatch: MatchDetails) => {},
}

export const MatchContext = React.createContext(initialMatch);

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const route = usePathname();
    const params: { matchId: string } = useParams();

    const router = useRouter();

    const [match, setMatch] = useState<MatchDetails | null>(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const session = useSession();

    useEffect(() => {
        const getMatchDetails = async (id: number) => {
            try {
                const { data } = await axios.get<MatchDetails>(matchURL(id));
                if (data && data.matchDTO.status === MatchStatus.COMPLETED) {
                    setMatch(data);
                    return;
                } else {
                    let updatedData = { ...data };
                    const matchWithResults = getMatchById(String(id));
                    if (matchWithResults) {
                        const result = matchWithResults ? getMatchResult(matchWithResults.incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]): null;
                        updatedData.matchDTO.homeTeamScore = data.matchDTO.homeTeamScore > 0 ? data.matchDTO.homeTeamScore : result ? result['Scallywags'] : 0;
                        updatedData.matchDTO.awayTeamScore = data.matchDTO.awayTeamScore > 0 ? data.matchDTO.awayTeamScore : result ? result['Corsairs'] : 0;
                        updatedData.matchDTO.status = MatchStatus.COMPLETED;
                        updatedData.homeTeamPlayers = matchWithResults.teams[0].players;
                        updatedData.awayTeamPlayers = matchWithResults.teams[1].players;
                    }
                    setMatch(updatedData);
                }
            } catch (error) {
                const oldMatch = getMatchById(params.matchId);
                if (oldMatch) {
                    const result = oldMatch ? getMatchResult(oldMatch.incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]): null;

                    const newMatchTyped: MatchDetails = {
                        awayTeamPlayers: oldMatch ? oldMatch.teams[1].players : [],
                        homeTeamPlayers: oldMatch ? oldMatch.teams[0].players : [],
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
                            status: oldMatch.incidents.length > 0 ? MatchStatus.COMPLETED : MatchStatus.SCHEDULED,
                            modality: Modality.FUTSAL,
                            scheduledLength: '',
                            scheduledStart: createFormattedDateTime({ date: oldMatch.date, time: oldMatch.time }),
                            venueId: 1,
                            venueName: oldMatch.location
                        }
                    }
                    setMatch(newMatchTyped);
                }
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
                match?.matchDTO.status === MatchStatus.COMPLETED ? (
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

    const onStartMatch = () => {
        setShowConfirmationModal(true);
    }

    const handleStartMatch = async () => {
        // update match status to live and push
        if (match) {
            try {
                await axios.put(matchStatusURL(match.matchDTO.id), {matchStatus: MatchStatus.LIVE}, {
                    headers: {
                        Authorization: `Bearer ${session?.data?.accessToken}`,
                        club: 10000,
                    },
                });

                router.push(`/live/${match.matchDTO.id}/summary`);
            } catch (error) {
                showToast(ToastTypes.ERROR, 'Error starting match');
            }
        }
    }

    return (
        <PageWrapper>
            {
                showConfirmationModal && (
                    <Modal.Root containerClass="md:!w-2/4">
                        <Modal.Header title="Start Match" handleClose={() => setShowConfirmationModal(false)} />
                        <Modal.Content>
                            <p className="m-8">Are you sure you want to start this match?</p>
                            <div className="w-full flex flex-row gap-6 font-roboto">
                                <button className="flex-1 px-4 py-2 md:px-8 md:py-4 text-white bg-2D2D2D rounded-full border-393939" onClick={() => setShowConfirmationModal(false)}>Cancel</button>
                                <button className="flex-1 px-4 py-2 md:px-8 md:py-4 bg-white text-black rounded-full" onClick={handleStartMatch}>
                                    Start
                                </button>
                            </div>
                        </Modal.Content>
                    </Modal.Root>
                )
            }
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
                                <h4>{`${matchStartDate.getHours()}:${matchStartDate.getMinutes() < 10 ? `0${matchStartDate.getMinutes()}`: matchStartDate.getMinutes()} - ${match.matchDTO.venueName}`}</h4>
                            </div>
                            <div className="center-absolute bottom-8 md:top-2/3 flex items-center gap-6">
                            {
                                renderTeam(match.matchDTO.homeTeamName, true)
                            }
                            {
                                session && session.status === 'authenticated' && match.homeTeamPlayers.length > 0 && match.awayTeamPlayers.length > 0 && match.matchDTO.status === MatchStatus.SCHEDULED &&
                                 (
                                    
                                    <button className='px-4 py-2 md:px-8 md:py-4 bg-white rounded-full text-black text-base font-roboto w-max' onClick={onStartMatch}>
                                        { 'Start Match' }
                                    </button>
                                )
                            }
                            { match && match.matchDTO.status !== MatchStatus.SCHEDULED && renderResultOrVS() }
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
            <MatchContext.Provider value={{ match, setMatch }}>
                {children}
            </MatchContext.Provider>
        </PageWrapper>
    );
}