import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "./Modal";
import { Event, MatchEventType, TeamPlayer } from "../../types/types";

type Props = {
    onShowLiveActionsModal(): void;
    onRegisterEvents(events: Event[]): void;
    homeTeamPlayers: TeamPlayer[];
    awayTeamPlayers: TeamPlayer[];
}

const LiveMatchActions = (props: Props) => {
    const { onShowLiveActionsModal, onRegisterEvents, homeTeamPlayers, awayTeamPlayers } = props;

    const [showGoalModal, setShowGoalModal] = useState<'home' | 'away' | null>(null);
    const [showAssistModal, setShowAssistModal] = useState<'home' | 'away' | null>(null);
    const [isOwnGoal, setIsOwnGoal] = useState(false);
    const [scorer, setScorer] = useState<TeamPlayer | null>(null);

    const getPlayersToShow = () => {
        if (showGoalModal && showGoalModal === 'home') {
            if (isOwnGoal) {
                return awayTeamPlayers;
            }
            return homeTeamPlayers
        };
        if (showGoalModal && showGoalModal === 'away') {
            if (isOwnGoal) {
                return homeTeamPlayers;
            }
            return awayTeamPlayers
        };
        return [];
    }

    const getAssistPlayerToShow = () => {
        if (showGoalModal && showGoalModal === 'home' && scorer) {
            
            return homeTeamPlayers.filter((p) => p.id !== scorer.id);
        };
        if (showGoalModal && showGoalModal === 'away' && scorer) {
            
            return awayTeamPlayers.filter((p) => p.id !== scorer.id);
        };
        return [];
    }

    const addGoal = (player: TeamPlayer) => {
        setScorer(player);
        setShowAssistModal(showGoalModal);
    }

    const addAssist = (player: TeamPlayer | null) => {
        const events: Event[] = [];

        if (scorer) {
            events.push({
                performerPlayerId: scorer.id,
                targetPlayerId: null,
                action: isOwnGoal ? MatchEventType.OWN_GOAL : MatchEventType.GOAL
            });
        }

        if (player) {
            events.push(
                {
                    performerPlayerId: player.id,
                    targetPlayerId: null,
                    action: MatchEventType.ASSIST
                }
            )
        }
        setShowAssistModal(null);
        setShowGoalModal(null);
        setScorer(null);
        setIsOwnGoal(false);
        
        onRegisterEvents(events);
    }

    return (
        <React.Fragment>
            { !showAssistModal && showGoalModal && (
                <Modal.Root containerClass='flex flex-col !max-w-md'>
                    <button className="mb-2" onClick={() => {
                                setShowGoalModal(null); setIsOwnGoal(false)
                    }}>
                        <Image src="/caret-left-ic.svg" width={32} height={32} alt="back" />
                    </button>
                    <div className="flex justify-between items-center">
                                <p className="text-xl">Who Scored?</p>
                                <button className="rounded-full border-2c2c2c p-4 font-bold" onClick={() => setIsOwnGoal(true)}>
                                    OG
                                </button>
                    </div>
                    <Modal.Content>
                        <div className='flex flex-col overflow-scroll gap-4 my-8'>
                    {
                                    getPlayersToShow().map((p) => {
                                        return (
                                            <button key={`player${p.nickName}`} className="flex gap-4 p-4 bg-1c1c1c rounded-full" onClick={() => addGoal(p)}>
                                                <span className={`w-4 ${showGoalModal === 'home' ? 'text-green-500' : 'text-red-600'}`}>{p.clubNumber}</span>
                                                <span>{p.nickName}</span>
                                            </button>
                                        )
                                    })
                                }
                        </div>
                    </Modal.Content>
                </Modal.Root>
            ) }
            { showAssistModal && (
                <Modal.Root containerClass='flex flex-col !max-w-md'>
                    <button className="mb-2" onClick={() => {setShowAssistModal(null)}}>
                        <Image src="/caret-left-ic.svg" width={32} height={32} alt="back" />
                    </button>
                    <div className="flex justify-between items-center">
                                <p className="text-xl">Who Assisted?</p>
                    </div>
                    <Modal.Content>
                        <div className='flex flex-col overflow-scroll gap-4 my-8'>
                            <button key={`player-null`} className="flex gap-4 p-4 bg-1c1c1c rounded-full justify-center" onClick={() => addAssist(null)}>
                                No one
                            </button>
                        {
                            getAssistPlayerToShow().map((p) => {
                                return (
                                    <button key={`player${p.nickName}`} className="flex gap-4 p-4 bg-1c1c1c rounded-full" onClick={() => addAssist(p)}>
                                        <span className={`w-4 ${showGoalModal === 'home' ? 'text-green-500' : 'text-red-600'}`}>{p.clubNumber}</span>
                                        <span>{p.nickName}</span>
                                    </button>
                                     )
                                })
                        }
                        </div>
                    </Modal.Content>
                </Modal.Root>
            ) }
            <section className="flex justify-center gap-12 p-6">
            <button className="live-action-btn bg-1c1c1c" onClick={onShowLiveActionsModal}>
                <Image src="/plus-icon.svg" width={32} height={32} alt="+" />
            </button>
            <div className="live-btn-wrapper">
                <button className="live-action-btn bg-home" onClick={() => setShowGoalModal('home')}>
                    <Image src="/ball-icon.svg" width={32} height={32} alt="" />
                </button>
                <div>
                    <span className="bg-home">1</span>
                </div>
            </div>
            <div className="live-btn-wrapper">
                <button className="live-action-btn bg-away" onClick={() => setShowGoalModal('away')}>
                    <Image src="/ball-icon.svg" width={32} height={32} alt="" />
                </button>
                <div>
                    <span className="bg-away">2</span>
                </div>
            </div>
            <button className="live-action-btn bg-1c1c1c ">
                <Image src="/microphone.svg" width={32} height={32} alt="" />
            </button>
        </section>
        </React.Fragment>
    )
};

export default LiveMatchActions;