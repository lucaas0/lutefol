'use client';
import { getMatchById, getMatchGoalsById } from '@/utils';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import '../../../../assets/styles/matchCenter.css';
import Image from 'next/image';
import { Goal, Match, Player } from '@/misc';

const MatchSummary = () => {
    const params: { matchId: string } = useParams();

    const getMatchGoals = () => {
        return getMatchGoalsById(params.matchId);
    }

    const match = useMemo(() => getMatchById(params.matchId), [params.matchId])

    const renderFirstTeamGoalLine = (goal: Goal) => {
        let isOwnGoal = false;
        if (match) {
            const { team1 } = match;

            if (team1.name === goal.Team && !team1.players.includes(goal.Scorer)) {
                isOwnGoal = true;
            }
        }
        
        
        return (
            <div className='flex gap-3 py-2 w-full'>
                <Image src={isOwnGoal ? '/soccer-ball-red.svg' : '/football.svg'} width={24} height={24} alt='' />
                <div className='flex gap-2'>
                    <span>{goal.Scorer.label}</span>
                    { goal.Assist && (
                        <span className='grey-949494'>{`(${goal.Assist.label})`}</span>
                    ) }
                </div>
            </div>
        )
    }

    const renderSecondTeamGoalLine = (goal: Goal) => {
        let isOwnGoal = false;
        if (match) {
            const { team2 } = match;

            if (team2.name === goal.Team && !team2.players.includes(goal.Scorer)) {
                isOwnGoal = true;
            }
        }

        return (
            <div className='flex gap-3 justify-end py-2 w-full'>
                <div className='flex gap-2'>
                    <span>{goal.Scorer.label}</span>
                    {goal.Assist && (
                        <span className='grey-949494'>{`(${goal.Assist.label})`}</span>
                    )}
                </div>
                <Image src={isOwnGoal ? '/soccer-ball-red.svg' : '/football.svg'} width={24} height={24} alt='' />
            </div>
        )
    }

    return (
        <div className='m-6'>
            {
                getMatchGoals().map((goal, index) => {
                    return (
                        <div key={`scorer-${goal.Scorer.firstname}-${index}`} className='goal-line flex justify-around'>
                            {goal.Team === 'Scallywags' && (renderFirstTeamGoalLine(goal))} 
                            {goal.Team === 'Corsairs' && (renderSecondTeamGoalLine(goal))} 
                        </div>
                    )
                })
            }
        </div>
    )
};

export default MatchSummary;
