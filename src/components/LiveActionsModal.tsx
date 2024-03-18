import Image from 'next/image';
import '../assets/styles/liveActionsModal.css';
import { Event, MatchEventType, TeamPlayer } from '../../types/types';
import React, { useState } from 'react';
import { Modal } from './Modal';

type Props = {
    onCloseModal(): void;
    onRegisterEvents(events: Event[]): void;
    players: TeamPlayer[];
    // playersOut: TeamPlayer[];
    onEndGame(): void;
}

const LiveActionsModal = (props: Props) => {
    const { onCloseModal, onRegisterEvents, players, onEndGame } = props;

    const [event, setEvent] = useState<Event | null>(null);
    const [showPerformerModal, setShowPerformerModal] = useState(false);
    const [showTargetModal, setShowTargetModal] = useState(false);

    const registerEvent = () => {
        if (event) onRegisterEvents([event]);
    }

    // const getPerformersPlayers = () => {
    //     if (event && event.action === MatchEventType.SUBSTITUTION) return playersOut;
    //     return players;
    // }

    const getTargetPlayers = () => {
        if (event && event.performerPlayerId) return players.filter((p) => p.id !== event.performerPlayerId);
        return [];
    }

    const handlePerformerSelected = (performer: TeamPlayer) => {
        console.log(event);
        if (event) {
            setEvent({ ...event, performerPlayerId: performer.id });
            setShowPerformerModal(false);

            if (event.action === MatchEventType.SUBSTITUTION) {
                setShowTargetModal(true);
            } else {
                onRegisterEvents([{ ...event, performerPlayerId: performer.id }]);
            }
        }
    }

    const handleTargetSelected = (targetPlayer: TeamPlayer) => {
        console.log(event);
        if (event) {
            const eventToSend: Event = {
                ...event,
                targetPlayerId: targetPlayer.id,
            };
            onRegisterEvents([eventToSend]);

            setShowTargetModal(false);
            setShowPerformerModal(false);
            setEvent(null);
        }
    }

    return (
        <React.Fragment>
            {
                showPerformerModal && event && (
                    <Modal.Root containerClass='flex flex-col !max-w-md'>
                    <button className="mb-2" onClick={() => {setShowPerformerModal(false); setEvent(null);}}>
                        <Image src="/caret-left-ic.svg" width={32} height={32} alt="back" />
                    </button>
                    <div className="flex justify-between items-center">
                        <p className="text-xl">{event.action !== MatchEventType.SUBSTITUTION ? 'Select the player' : 'Player In'}</p>
                    </div>
                    <Modal.Content>
                        <div className='flex flex-col overflow-scroll gap-4 my-8'>
                        {
                            players.map((p) => {
                                return (
                                    <button key={`player${p.nickName}`} className="flex gap-4 p-4 bg-1c1c1c rounded-full" onClick={() => handlePerformerSelected(p)}>
                                        <span className="w-4">{p.clubNumber}</span>
                                        <span>{p.nickName}</span>
                                    </button>
                                )
                            })
                        }
                        </div>
                    </Modal.Content>
                </Modal.Root>
                )
            }

            {
                showTargetModal && event && (
                    <Modal.Root containerClass='flex flex-col !max-w-md'>
                    <button className="mb-2" onClick={() => {setShowTargetModal(false);}}>
                        <Image src="/caret-left-ic.svg" width={32} height={32} alt="back" />
                    </button>
                    <div className="flex justify-between items-center">
                        <p className="text-xl">{event.action !== MatchEventType.SUBSTITUTION ? 'Player' : 'Player Out'}</p>
                    </div>
                    <Modal.Content>
                        <div className='flex flex-col overflow-scroll gap-4 my-8'>
                        {
                            getTargetPlayers().map((p) => {
                                return (
                                    <button key={`player${p.nickName}`} className="flex gap-4 p-4 bg-1c1c1c rounded-full" onClick={() => handleTargetSelected(p)}>
                                        <span className="w-4">{p.clubNumber}</span>
                                        <span>{p.nickName}</span>
                                    </button>
                                )
                            })
                        }
                        </div>
                    </Modal.Content>
                </Modal.Root>
                )
            }
            {
                !showPerformerModal && !showTargetModal && (
                    <div className='live-modal-background'>
                <div className='live-modal'>
                    <div className='flex flex-col gap-6'>
                        {/* <div className='flex gap-4 items-center'>
                            <button className="live-action-btn bg-home">
                                <Image src="/ball-icon.svg" width={32} height={32} alt="" />
                            </button>
                            <h2 className='font-bold text-lg'>Goal for Scallywags</h2>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <button className="live-action-btn bg-away">
                                <Image src="/ball-icon.svg" width={32} height={32} alt="" />
                            </button>
                            <h2 className='font-bold text-lg'>Goal for Corsairs</h2>
                        </div> */}

                        <div className='flex gap-4 items-center'>
                            <button className="live-action-btn bg-teal-300" onClick={() => {
                               setEvent({
                                action: MatchEventType.FAULT,
                                performerPlayerId: null,
                                targetPlayerId: null,
                            });
                            setShowPerformerModal(true); 
                            }}>
                                <Image src="/sneaker-move.svg" width={32} height={32} alt="" />
                            </button>
                            <h2 className='font-bold text-lg'>Fault</h2>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <button className="live-action-btn bg-blue-500"
                            onClick={() => {
                                setEvent({
                                 action: MatchEventType.SUBSTITUTION,
                                 performerPlayerId: null,
                                 targetPlayerId: null,
                             });
                             setShowPerformerModal(true); 
                             }}>
                                <Image src="/substitution-ic.svg" width={32} height={32} alt="" />
                            </button>
                            <h2 className='font-bold text-lg'>Substitution</h2>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <button className="live-action-btn bg-rose-500" onClick={() => {
                                setEvent({
                                    action: MatchEventType.INJURY,
                                    performerPlayerId: null,
                                    targetPlayerId: null,
                                });
                                setShowPerformerModal(true);
                            }}>
                                <Image src="/injury-ic.svg" width={32} height={32} alt="" />
                            </button>
                            <h2 className='font-bold text-lg'>Injury</h2>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <button className="live-action-btn" onClick={() => {
                                setEvent({
                                    action: MatchEventType.YELLOW_CARD,
                                    performerPlayerId: null,
                                    targetPlayerId: null,
                                });
                                setShowPerformerModal(true);
                            }}>
                                <Image src="/yellow-card.svg" width={32} height={32} alt="" />
                            </button>
                            <h2 className='font-bold text-lg'>Yellow Card</h2>
                        </div>

                        <div className='flex gap-4 items-center'>
                            <button className="live-action-btn" onClick={() => {
                                setEvent({
                                    action: MatchEventType.RED_CARD,
                                    performerPlayerId: null,
                                    targetPlayerId: null,
                                });
                                setShowPerformerModal(true);
                            }}>
                                <Image src="/red-card.svg" width={32} height={32} alt="" />
                            </button>
                            <h2 className='font-bold text-lg'>Red Card</h2>
                        </div>

                        <div className='flex gap-2'>
                            <button className='live-action-btn bg-1c1c1c w-max p-8' onClick={onCloseModal}>
                                <Image src="/close-ic.svg" width={32} height={32} alt="" />
                            </button>
                            <button className='bg-red-500 flex-1 rounded-full' onClick={onEndGame}>
                                End Game
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                )
            }
        </React.Fragment>
    )
}

export default LiveActionsModal;
