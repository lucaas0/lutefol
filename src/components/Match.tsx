'use client';
import React, { useEffect, useState } from 'react';
import { ToastTypes, Weekday } from "@/misc";
import Image from "next/image";
import Link from 'next/link';
import { MatchStatus, MatchT } from '../../types/types';
import LogoHomeTeam from '../../public/logo-green.svg';
import LogoAwayTeam from '../../public/logo-red.svg';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import axios from 'axios';
import { matchURL } from '@/services/api';
import showToast from './Toast';
import { Modal } from './Modal';

type OwnProps = {
    match: MatchT;
    isUpcoming?: boolean;
    onMatchDeleted?(): void;
}

const Match = (props: OwnProps) => {
    const { match, isUpcoming, onMatchDeleted } = props;

    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    useEffect(() => {
        
    const hasSession = async () => {
        const session = await getSession();
        setSession(session);
    }

    hasSession();
    }, []);

    const deleteMatch = async () => {
        try {
            setIsLoading(true);
            await axios.delete(matchURL(match.id), {
                headers: {
                    'Authorization': `Bearer ${session?.accessToken}`,
                    'club': 10000,
                }
            });
            setIsLoading(false);
            showToast(ToastTypes.SUCCESS, 'Match Deleted Successfully');
            setShowDeleteModal(false);
            if (onMatchDeleted) onMatchDeleted();
        } catch (error) {  
            setIsLoading(false);
            showToast(ToastTypes.ERROR, 'An error occured');
        }
    }

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
                match.matchStatus === MatchStatus.COMPLETED ? (
                    <React.Fragment>
                        <h2 className="font-bold text-xl">{match.homeTeamScore}</h2>
                        <h2 className="font-bold text-xl">-</h2>
                        <h2 className="font-bold text-xl">{match.awayTeamScore}</h2>
                    </React.Fragment>
                ) : (
                <h2 className="font-bold text-xl">VS</h2>
            )
        )
    }

    const matchStartDate = new Date(match.scheduledStart);

    return (
        <React.Fragment>
            {
                showDeleteModal && (
                <Modal.Root containerClass='w-9'>
                    <Modal.Header title='Delete Match' handleClose={() => setShowDeleteModal(false)} />
                    <Modal.Content>
                        <p className='my-14'> Are you sure you want to delete this match? </p>
                        <div className="w-full flex flex-row gap-6 font-roboto">
                            <button className="flex-1 px-4 py-2 text-white bg-2D2D2D rounded-full border-393939" onClick={() => setShowDeleteModal(false)}>Cancel</button>
                            <button className="flex-1 px-4 py-2 bg-white text-black rounded-full" onClick={deleteMatch}>Delete</button>
                        </div>
                    </Modal.Content>   
                </Modal.Root>
                )
            }
            <section className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between bg-true-gray-900 p-6 items-center uppercase" key={`match-${match.date}`}>
                    <div className="flex flex-col text-sm md:text-sm text-center md:text-left">
                        <div className='flex items-center justify-center gap-4'>
                            <span className='text-6xl font-bold color-brand-400 leading-none'>
                                {matchStartDate.getDate()}
                            </span>
                            <div className='flex flex-col items-start justify-center'>
                                <span className='text-base font-bold'>{ Weekday[matchStartDate.getDay()]}</span>
                                {`${matchStartDate.getHours()}:${matchStartDate.getMinutes()} - ${match.venueName}`}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        {
                            renderTeam(match.homeTeamName, true)
                        }
                        {
                            renderResultOrVS()
                        }
                        {
                            renderTeam(match.awayTeamName, false)
                        }
                    </div>
                    <div className='flex gap-2'>
                        <Link href={isUpcoming ? `/match-center/${match.id}/lineups` : `/match-center/${match.id}/summary`}>
                            <button
                                type="button"
                                className="border border-gray-800 border-solid py-2 px-4 text-base font-bold"
                            >
                                MATCH CENTER
                            </button>
                        </Link>
                        {
                            session && session.user && isUpcoming && (
                                <button onClick={() => setShowDeleteModal(true)}>
                                    <Image src="/trash-ic.svg" width={18} height={18} alt='Delete' className='fill-red-400' />
                                </button>
                            )
                        }
                    </div>
                </section>
        </React.Fragment>        
    )
}

export default Match;
