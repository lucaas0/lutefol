'use client';
import { getMatchIncidentsById } from '@/utils';
import { useParams } from 'next/navigation';
import '../../../../../assets/styles/matchCenter.css';
import { Goal, INCIDENTS, Match, Substitution } from '@/misc';
import GoalIncident from '@/components/GoalIncident';
import SubstitutionIncident from '@/components/SubstitutionIncident';
import React, { useContext, useEffect, useState } from 'react';
import { MatchContext } from '../../layout';
import { MatchEvent, MatchEventType } from '../../../../../../types/types';
import Image from 'next/image';

const MatchSummary = () => {
    const params: { matchId: string } = useParams();

    const {match, setMatch} = useContext(MatchContext);

    const getMatchIncidents = () => {
        return getMatchIncidentsById(params.matchId);
    }

    const GoalComponent = ({ goal }: { goal: Goal; }) => {
        const isSecondTeam = goal.Team === 'Corsairs';
        return (
            <GoalIncident goal={goal} isSecondTeam={isSecondTeam} />
        );
    };

    const formatSecondsTime = (seconds: number) => {
        const minutes = Math.ceil(seconds / 60);
        const hours = Math.floor(minutes / 60);
      
        if (hours > 0) {
          return `${hours}h ${minutes % 60}m`;
        } else {
          return `${minutes}`;
        }
    };

    const idToPlayer = (id: number) => {
        return match ? [...match.homeTeamPlayers, ...match.awayTeamPlayers].find((p) => p.id === id) : undefined;
    }

    const eventsOrdered = () => {
        return match ? match.matchEvents.sort((a, b) => Number(a.timeAtGame) - Number(b.timeAtGame)) : [];
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

    const renderEvent = (event: MatchEvent) => {
        const { action } = event;

        const assistPlayerId = match ? match.matchEvents.find((e) => e.action === MatchEventType.ASSIST && e.timeAtGame === event.timeAtGame)?.performerPlayerId : null;
        const isPerformerPlayerInHomeTeam = match && match.homeTeamPlayers.find((p) => p.id === event.performerPlayerId);
        
        switch (action) {
            case MatchEventType.GOAL:
                return (
                    <div className={`flex gap-3 ${!isPerformerPlayerInHomeTeam ? 'justify-end' : ''} pb-2 w-full border-bottom-262626`} key={`event-goal-${event.id}`}>
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
                    <div className='flex gap-3 pb-2 w-full justify-center border-bottom-262626' key={`event-sub-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                        <Image src={'/substitution-ic.svg'} width={18} height={18} alt='' />
                        <span className='grey-949494'>{`(${idToPlayer(event.targetPlayerId)?.nickName})`}</span>
                    </div>
                );
            case MatchEventType.INJURY:
                return (
                    <div className='flex gap-3 pb-2 w-full justify-center items-center border-bottom-262626' key={`event-injury-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span className="bg-red-500 rounded-full p-2">
                            <Image src={'/injury-ic.svg'} width={18} height={18} alt='' />
                        </span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                    </div>
                );
            case MatchEventType.RED_CARD:
                return (
                    <div className='flex gap-3 pb-2 w-full justify-center items-center border-bottom-262626' key={`event-redcard-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span>
                            <Image src={'/red-card.svg'} width={18} height={18} alt='' />
                        </span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                    </div>
                );
            case MatchEventType.YELLOW_CARD:
                return (
                    <div className='flex gap-3 pb-2 w-full justify-center items-center border-bottom-262626' key={`event-yellowcard-${event.id}`}>
                        <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span>
                        <span>
                            <Image src={'/yellow-card.svg'} width={18} height={18} alt='' />
                        </span>
                        <span>{idToPlayer(event.performerPlayerId)?.nickName}</span>
                    </div>
                );
            case MatchEventType.OWN_GOAL:
                return (
                    <div className={`flex gap-3 ${isPerformerPlayerInHomeTeam ? 'justify-end' : ''} pb-2 w-full border-bottom-262626`} key={`event-owngoal-${event.id}`}>
                        {/* <span className="font-bold color-brand-400">{ `${formatSecondsTime(Number(event.timeAtGame))}'` }</span> */}
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

    const renderIncidents = () => {
        return getMatchIncidents().map((incident, index) => {
                return (
                <div className='goal-line flex' key={index}>
                        {(incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) && (
                        <GoalComponent goal={incident as Goal} />
                    )}
                    {incident.type === INCIDENTS.SUBSTITUTION && <SubstitutionIncident substitution={incident as Substitution} />}
                    {/* Add other incident types as needed */}
                </div>
            );
        });
    };

    return (
        <div className='m-6 event-container'>
            { match && match.matchEvents.length > 0 ? renderEvents() : renderIncidents()}
        </div>
    )
};

export default MatchSummary;
