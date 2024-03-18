'use client';
import { LiveMatchContext } from "@/components/LiveMatchWrapper";
import Image from "next/image";
import React from "react";
import { MatchEvent, MatchEventType } from "../../../../../../types/types";

const LiveSummary = () => {
    const liveMatch = React.useContext(LiveMatchContext);

    const allPlayers = liveMatch ? [...liveMatch.homeTeamPlayers, ...liveMatch.awayTeamPlayers] : [];

    const idToPlayer = (id: number) => {
        return allPlayers.find((p) => p.id === id);
    }

    const eventsOrdered = () => {
        return liveMatch ? liveMatch.matchEvents.sort((a, b) => Number(a.timeAtGame) - Number(b.timeAtGame)) : [];
    }

    const formatSecondsTime = (seconds: number) => {
        const minutes = Math.ceil(seconds / 60);
        const hours = Math.floor(minutes / 60);
      
        if (hours > 0) {
          return `${hours}h ${minutes % 60}m`;
        } else {
          return `${minutes}`;
        }
    };

    const renderEvent = (event: MatchEvent) => {
        const { action } = event;

        const assistPlayerId = liveMatch ? liveMatch.matchEvents.find((e) => e.action === MatchEventType.ASSIST && e.timeAtGame === event.timeAtGame)?.performerPlayerId : null;
        const isPerformerPlayerInHomeTeam = liveMatch && liveMatch.homeTeamPlayers.find((p) => p.id === event.performerPlayerId);
        
        switch (action) {
            case MatchEventType.GOAL:
                return (
                    <div className={`flex gap-3 ${!isPerformerPlayerInHomeTeam ? 'justify-end' : ''} py-2 w-full border-bottom-262626`} key={`event-goal-${event.id}`}>
                        <span className="font-bold color-brand-400">{`${formatSecondsTime(Number(event.timeAtGame))}'`}</span>
                        <div className='flex gap-2'>
                            <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                            {assistPlayerId && (
                                <span className='grey-949494'>{`(${idToPlayer(assistPlayerId)?.nickName})`}</span>
                            )}
                        </div>
                        <Image src='/football.svg' width={24} height={24} alt='' />
                    </div>
                );
            case MatchEventType.SUBSTITUTION:
                return (
                    <div className='flex gap-3 py-2 w-full justify-center border-bottom-262626' key={`event-sub-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                        <Image src={'/substitution-ic.svg'} width={18} height={18} alt='' />
                        <span className='grey-949494'>{`(${idToPlayer(event.targetPlayerId)?.nickName})`}</span>
                    </div>
                );
            case MatchEventType.INJURY:
                return (
                    <div className='flex gap-3 py-2 w-full justify-center items-center border-bottom-262626' key={`event-injury-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span className="bg-red-500 rounded-full p-2">
                            <Image src={'/injury-ic.svg'} width={18} height={18} alt='' />
                        </span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                    </div>
                );
            case MatchEventType.RED_CARD:
                return (
                    <div className='flex gap-3 py-2 w-full justify-center items-center border-bottom-262626' key={`event-redcard-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span>
                            <Image src={'/red-card.svg'} width={18} height={18} alt='' />
                        </span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                    </div>
                );
            case MatchEventType.YELLOW_CARD:
                return (
                    <div className='flex gap-3 py-2 w-full justify-center items-center border-bottom-262626' key={`event-yellowcard-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span>
                            <Image src={'/yellow-card.svg'} width={18} height={18} alt='' />
                        </span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                    </div>
                );
            case MatchEventType.OWN_GOAL:
                return (
                    <div className={`flex gap-3 ${isPerformerPlayerInHomeTeam ? 'justify-end' : ''} py-2 w-full border-bottom-262626`} key={`event-owngoal-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <div className='flex gap-2'>
                            <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                            {assistPlayerId && (
                                <span className='grey-949494'>{`(${idToPlayer(assistPlayerId)?.nickName})`}</span>
                            )}
                        </div>
                        <Image src='/soccer-ball-red.svg' width={24} height={24} alt='' />
                    </div>
                );
            default:
                break;
        }
    }

    const renderEvents = () => {
        return (
            <section className="flex flex-col flex-1 h-full gap-3 overflow-y-auto">
                {
                    eventsOrdered().map((event) => {
                        return (
                            renderEvent(event)
                        )
                    })
                }
            </section>
        )
    }

    const renderPlaceholder = () => {
        return (
            <section className="flex flex-col flex-1 items-center h-full justify-center">
                <Image src="/sneaker-move.svg" alt="" width={64} height={64} />
                <h1>The ball is rolling...</h1>
                <h2 className="text-neutral-400">
                    A tranquil moment on the field. <br />
                    No goals or substitutions to report. <br />
                    The game is in its early chapters.
                </h2>
            </section>
        );
    }

    return (
        liveMatch && liveMatch.matchEvents.length > 0 ? renderEvents() : renderPlaceholder()
    )
};

export default LiveSummary;
