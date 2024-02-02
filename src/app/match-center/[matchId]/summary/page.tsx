'use client';
import { getMatchById, getMatchIncidentsById } from '@/utils';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import '../../../../assets/styles/matchCenter.css';
import Image from 'next/image';
import { Goal, INCIDENTS, Match, MatchIncident, Player, Substitution, TeamName } from '@/misc';

const MatchSummary = () => {
    const params: { matchId: string } = useParams();

    const getMatchIncidents = () => {
        return getMatchIncidentsById(params.matchId);
    }

    const GoalComponent = ({ goal }: { goal: Goal; }) => {
        const isSecondTeam = goal.Team === 'Corsairs';
        const isOwnGoal = goal.type === INCIDENTS.OWN_GOAL;
        return (
            <div className={`flex gap-3 ${isSecondTeam ? 'justify-end' : ''} py-2 w-full`}>
                <div className='flex gap-2'>
                    <span>{goal.Scorer.label}</span>
                    {goal.Assist && (
                        <span className='grey-949494'>{`(${goal.Assist.label})`}</span>
                    )}
                </div>
                <Image src={isOwnGoal ? '/soccer-ball-red.svg' : '/football.svg'} width={24} height={24} alt='' />
            </div>
        );
    };

    const SubstitutionComponent = ({ substitution }: { substitution: Substitution }) => (
        <div className='flex gap-3 py-2 w-full justify-center'>
            <Image src={'/substitution-ic.svg'} width={18} height={18} alt='' />
            <span>{substitution.playerIn.label}</span> <span className='grey-949494'>{`(${substitution.playerOut.label})`}</span>
        </div>
    );

    const renderIncidents = () => {
        return getMatchIncidents().map((incident, index) => (
            <div className='goal-line flex' key={index}>
                {(incident.type === INCIDENTS.GOAL || INCIDENTS.OWN_GOAL) && (
                    <GoalComponent goal={incident as Goal} />
                )}
                {incident.type === INCIDENTS.SUBSTITUTION && <SubstitutionComponent substitution={incident as Substitution} />}
                {/* Add other incident types as needed */}
            </div>
        ));
    };

    return (
        <div className='m-6'>
            {renderIncidents()}
        </div>
    )
};

export default MatchSummary;
