'use client';
import { PlayersArr, getMatchById } from '@/utils';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import '../../../../../assets/styles/matchCenter.css';
import Image from 'next/image';
import { Match } from '@/misc';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { Modal } from '@/components/Modal';
import Players from '@/components/Players';

const MatchLineup = () => {
    const params: { matchId: string } = useParams();

    const [match, setMatch] = useState<Match | undefined>(undefined);
    const [session, setSession] = useState<Session | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getMatch = () => {
            const m = getMatchById(params.matchId);
            setMatch(m);
        }

        const defineSession = async () => {
            const s = await getSession();
            setSession(s);
        }
        getMatch();
        defineSession();
    }, [params.matchId]);

    const renderLineups = () => {
        return match?.teams.map((team) => {
            return (
                <div className='flex flex-col gap-4 items-center py-8 lineup-wrapper' key={`lineup-${team.name}`}>
                    <div className='flex flex-col gap-4 w-fit items-center md:items-start'>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6">
                            <Image src={team.logo || ''} alt="" width={52} height={52} />
                            <h2 className="font-bold uppercase text-base md:text-xl text-center md:text-left">{team.name}</h2>
                        </div>
                        <div className='flex flex-col gap-2 justify-start'>
                            {
                                team.players.map((player) => {
                                    return (
                                        <div className='flex gap-2' key={`lineup-player-${player.firstName}-${player.lastName}`}>
                                            <span className='font-bold color-brand-400 w-4'>
                                                {player.clubNumber}
                                            </span>
                                            <span>
                                                {`${player.nickName}`}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            )
        })
    }

    const renderAddLineupsBtn = () => {
        return (
            <button className='px-4 py-2 md:px-8 md:py-4 bg-white rounded-full text-black text-base font-roboto' onClick={() => setShowModal(true)}>
                Add lineups
            </button>
        )
    }

    return (
        <React.Fragment>
            {
                showModal && (
                    <Modal.Root containerClass='flex flex-col'>
                        <Modal.Header title='Create lineups' handleClose={() => setShowModal(false)} />
                        <Modal.Content>
                            <div className='flex flex-col overflow-scroll gap-4 my-8'>
                                {PlayersArr.map((p) => {
                                    return (
                                        <div className='flex gap-2 font-roboto' key={`player${p.nickName}`}>
                                            <span className='w-8 color-brand-400'>{ p.clubNumber }</span>
                                            <span>{ p.nickName }</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </Modal.Content>
                    </Modal.Root>
                )
            }
            <div className='flex gap-3 m-6'>
                {renderLineups()}
                { session && session.user && renderAddLineupsBtn() }
            </div>
        </React.Fragment>
    )
};

export default MatchLineup;
