'use client';
import { PlayersArr, createFormattedDateTime, getMatchResult } from '@/utils';
import { useParams } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import '../../../../../assets/styles/matchCenter.css';
import Image from 'next/image';
import { Goal, INCIDENTS, ToastTypes } from '@/misc';
import { Session } from 'next-auth';
import { getSession, useSession } from 'next-auth/react';
import { Modal } from '@/components/Modal';
import axios from 'axios';
import { listClubPlayers, matchLineups, matchURL } from '@/services/api';
import { APIResponse, ExtendedTeamPlayer, MatchDetails, MatchStatus, MatchT, Modality, TeamPlayer } from '../../../../../../types/types';
import showToast from '@/components/Toast';
import { MatchContext } from '../../layout';

const MatchLineup = () => {
    const params: { matchId: string } = useParams();

    // const [match, setMatch] = useState<MatchDetails| undefined>(undefined);
    const session = useSession();
    const {match, setMatch} = useContext(MatchContext);

    const [showModal, setShowModal] = useState(false);
    const [players, setPlayers] = useState<ExtendedTeamPlayer[]>([]);
    const [homeTeamPlayers, setHomeTeamPlayers] = useState<TeamPlayer[]>(match?.homeTeamPlayers || []);
    const [awayTeamPlayers, setAwayTeamPlayers] = useState<TeamPlayer[]>(match?.awayTeamPlayers || []);

    useEffect(() => {
        if (match) {
            setHomeTeamPlayers(match.homeTeamPlayers);
            setAwayTeamPlayers(match.awayTeamPlayers);
        }
    }, [match]);
    

    // useEffect(() => {
    //     const getMatch = async () => {
    //         try {
    //             const { data } = await axios.get<MatchDetails>(matchURL(Number(params.matchId)));

    //             const oldMatch = getMatchById(params.matchId);
    //             if (oldMatch) {
    //                 const result = oldMatch ? getMatchResult(oldMatch.incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]): null;
    //                 const newMatchTyped: MatchDetails = {
    //                     awayTeamPlayers: oldMatch.teams[1].players,
    //                     homeTeamPlayers: oldMatch.teams[0].players,
    //                     matchEvents: [],
    //                     realEnd: '',
    //                     realLength: '',
    //                     realStart: '',
    //                     matchDTO: {
    //                         awayTeamName: oldMatch.teams[1].name,
    //                         awayTeamScore: result ? result['Corsairs'] : 0,
    //                         homeTeamName: oldMatch.teams[0].name,
    //                         homeTeamScore: result ? result['Scallywags'] : 0,
    //                         createdDate: '',
    //                         id: Number(oldMatch.id),
    //                         lastModifiedDate: '',
    //                         status: oldMatch.incidents.length > 0 ? MatchStatus.COMPLETED : MatchStatus.SCHEDULED,
    //                         modality: Modality.FUTSAL,
    //                         scheduledLength: '',
    //                         scheduledStart: createFormattedDateTime({ date: oldMatch.date, time: oldMatch.time }),
    //                         venueId: 1,
    //                         venueName: oldMatch.location
    //                     }
    //                 }
    //                 setMatch(newMatchTyped);
    //             } else {
    //                 setMatch(data);
    //                 setHomeTeamPlayers(data.homeTeamPlayers);
    //                 setAwayTeamPlayers(data.awayTeamPlayers);
    //             }
    //         } catch (error) {
    //             const oldMatch = getMatchById(params.matchId);

    //             if (oldMatch) {
    //                 const result = oldMatch ? getMatchResult(oldMatch.incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]): null;

    //                 const newMatchTyped: MatchDetails = {
    //                     awayTeamPlayers: oldMatch.teams[1].players,
    //                     homeTeamPlayers: oldMatch.teams[0].players,
    //                     matchEvents: [],
    //                     realEnd: '',
    //                     realLength: '',
    //                     realStart: '',
    //                     matchDTO: {
    //                         awayTeamName: oldMatch.teams[1].name,
    //                         awayTeamScore: result ? result['Corsairs'] : 0,
    //                         homeTeamName: oldMatch.teams[0].name,
    //                         homeTeamScore: result ? result['Scallywags'] : 0,
    //                         createdDate: '',
    //                         id: Number(oldMatch.id),
    //                         lastModifiedDate: '',
    //                         status: oldMatch.incidents.length > 0 ? MatchStatus.COMPLETED : MatchStatus.SCHEDULED,
    //                         modality: Modality.FUTSAL,
    //                         scheduledLength: '',
    //                         scheduledStart: createFormattedDateTime({ date: oldMatch.date, time: oldMatch.time }),
    //                         venueId: 1,
    //                         venueName: oldMatch.location
    //                     }
    //                 }
    //                 setMatch(newMatchTyped);
    //             }
    //         }
    //     }

    //     const defineSession = async () => {
    //         const s = await getSession();
    //         setSession(s);
    //     }

    //     getMatch();
    //     defineSession();
    // }, [params.matchId]);

    const renderLineups = (team: 'home' | 'away') => {
        const players = (match && team === 'home' ? match?.homeTeamPlayers : match?.awayTeamPlayers) || [];
            return (
            <div className='flex flex-col gap-4 items-center py-8 lineup-wrapper' key={`lineup-${team}`}>
                <div className='flex flex-col gap-4 w-fit items-center md:items-start'>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-6">
                        <Image src={team === 'home' ? '/logo-green.svg' : '/logo-red.svg'} alt="" width={52} height={52} />
                        <h2 className="font-bold uppercase text-base md:text-xl text-center md:text-left">
                            {team === 'home' ? 'Scallywags' : 'Corsairs'}
                        </h2>
                    </div>
                    <div className='flex flex-col gap-2 justify-start'>
                        {
                            players.map((player) => {
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
    }

    const onShowModal = async () => {
        try {
            const { data } = await axios.get<APIResponse<ExtendedTeamPlayer>>(listClubPlayers(10000), {
                headers: {
                    Authorization: `Bearer ${session?.data?.accessToken}`,
                    club: 10000,
                }
            });

            setPlayers(data.results);
            setShowModal(true);
        } catch (error) {
            setPlayers([]);
            showToast(ToastTypes.ERROR, 'Error fetching players');
        }
    }

    const renderAddLineupsBtn = () => {
        return (
            <button className='px-4 py-2 md:px-8 md:py-4 bg-white rounded-full text-black text-base font-roboto w-max' onClick={onShowModal}>
                { homeTeamPlayers.length === 0 && awayTeamPlayers.length === 0 ? 'Add lineups' : 'Edit Lineups' }
            </button>
        )
    }

    const addTeamPlayer = (player: ExtendedTeamPlayer, team: 'home' | 'away') => {
        if (team === 'home') {
            const alreadyInTeam = homeTeamPlayers.findIndex((p) => p.id === player.id);

            if (alreadyInTeam === -1) {
                setHomeTeamPlayers([...homeTeamPlayers, player]);
            } else {
                const newArr = [...homeTeamPlayers];
                newArr.splice(alreadyInTeam, 1);
                setHomeTeamPlayers(newArr);
            }

            const inOtherTeam = awayTeamPlayers.findIndex((p) => p.id === player.id);

            if (inOtherTeam !== -1) {
                const newArr = [...awayTeamPlayers];
                newArr.splice(inOtherTeam, 1);
                setAwayTeamPlayers(newArr);
            }
        }

        if (team === 'away') {
            const alreadyInTeam = awayTeamPlayers.findIndex((p) => p.id === player.id);
            if (alreadyInTeam === -1) {
                setAwayTeamPlayers([...awayTeamPlayers, player]);
            } else {
                const newArr = [...awayTeamPlayers];
                newArr.splice(alreadyInTeam, 1);
                setAwayTeamPlayers(newArr);
            }

            const inOtherTeam = homeTeamPlayers.findIndex((p) => p.id === player.id);

            if (inOtherTeam !== -1) {
                const newArr = [...homeTeamPlayers];
                newArr.splice(inOtherTeam, 1);
                setHomeTeamPlayers(newArr);
            }
        }
    }

    const onAddLineups = async () => {
        try {
            await axios.put(matchLineups(Number(params.matchId)), {
                homeTeamPlayers: homeTeamPlayers.length === 0 ? [] : homeTeamPlayers.map((h) => h.id),
                awayTeamPlayers: awayTeamPlayers.length === 0 ? [] : awayTeamPlayers.map((a) => a.id),
            }, {
                headers: {
                    Authorization: `Bearer ${session?.data?.accessToken}`,
                    club: 10000,
                },
            });
            if (match) {
                setMatch({
                    ...match,
                    homeTeamPlayers,
                    awayTeamPlayers,
                });
            }
            showToast(ToastTypes.SUCCESS, 'Lineups Updated!');
            setShowModal(false);
        } catch (error) {
            setHomeTeamPlayers(match?.homeTeamPlayers || []);
            setAwayTeamPlayers(match?.awayTeamPlayers || []);
            showToast(ToastTypes.ERROR, 'Match Lineups Error');
        }
    }

    return (
        <React.Fragment>
            {
                showModal && players.length > 0 && (
                    <Modal.Root containerClass='flex flex-col !md:w-1/3'>
                        <Modal.Header title='Create lineups' handleClose={() => setShowModal(false)} />
                        <Modal.Content>
                            <div className='flex flex-col overflow-scroll gap-4 my-8'>
                                {players.map((p) => {
                                    const isSelectedHome = homeTeamPlayers.map((h) => h.id).includes(p.id);
                                    const isSelectedAway = awayTeamPlayers.map((h) => h.id).includes(p.id);
                                    return (
                                        <div className='flex items-center justify-between border-bottom-414141 pb-4' key={`player${p.nickName}`}>
                                            <div className='flex gap-2 font-roboto'>
                                                <span className='w-8 color-brand-400'>{ p.clubNumber }</span>
                                                <span>{ p.nickName }</span>
                                            </div>
                                            <div className='flex gap-2 md:gap-12'>
                                                <button className={`px-4 py-2 team-container${isSelectedHome ? ' selected' : ''}`} onClick={() => addTeamPlayer(p, 'home')}>
                                                    <Image src="/logo-green.svg" alt='' width={32} height={32} />
                                                </button>
                                                <button className={`px-4 py-2 team-container${isSelectedAway ? ' selected' : ''}`} onClick={() => addTeamPlayer(p, 'away')}>
                                                    <Image src="/logo-red.svg" alt='' width={32} height={32} />
                                                </button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="w-full flex flex-row gap-6 font-roboto">
                                <button className="flex-1 px-4 py-2 md:px-8 md:py-4 text-white bg-2D2D2D rounded-full border-393939" onClick={() => setShowModal(false)}>Cancel</button>
                                <button className="flex-1 px-4 py-2 md:px-8 md:py-4 bg-white text-black rounded-full" onClick={onAddLineups}>Publish</button>
                            </div>
                        </Modal.Content>
                    </Modal.Root>
                )
            }
            <div className='flex flex-col items-center gap-3 m-6'>
                <div className='flex gap-2'>
                {renderLineups('home')}
                {renderLineups('away')}
                </div>
                { session && session.status === 'authenticated' && match && match.matchDTO.status !== MatchStatus.COMPLETED && renderAddLineupsBtn() }
            </div>
        </React.Fragment>
    )
};

export default MatchLineup;
