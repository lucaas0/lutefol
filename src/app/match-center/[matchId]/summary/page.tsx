'use client';
import { getMatchById, getMatchGoalsById, shuffleGoalsArray } from '@/utils';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import '../../../../assets/styles/matchCenter.css';
import Image from 'next/image';
import { Match, Player } from '@/misc';

const MatchSummary = () => {
    const params: { matchId: string } = useParams();

    const [match, setMatch] = useState<Match | undefined>(undefined);

    useEffect(() => {
        const getMatch = () => {
            const m = getMatchById(params.matchId);
            setMatch(m);
        }
        getMatch();
    }, [params.matchId]);

    const getMatchGoals = () => {
        return getMatchGoalsById(params.matchId);
    }

    const renderFirstTeamGoalLine = (scorer: Player) => {
        return (
            <div className='flex gap-3 py-2 w-2/3'>
                <span>{`${scorer.firstname} ${scorer.lastname}`}</span>
                <Image src="/football.svg" width={24} height={24} alt='' />
            </div>
        )
    }

    const renderSecondTeamGoalLine = (scorer: Player) => {
        return (
            <div className='flex gap-3 justify-end py-2 w-2/3'>
                <Image src="/football.svg" width={24} height={24} alt='' />
                <span>{`${scorer.firstname} ${scorer.lastname}`}</span>
            </div>
        )
    }

    return (
        <div className='m-6'>
            {
                getMatchGoals().map((goal, index) => {
                    return (
                        <div key={`scorer-${goal.Scorer.firstname}-${index}`} className='goal-line flex justify-around'>
                            {goal.Team === 'Ressabiados F.C' && (renderFirstTeamGoalLine(goal.Scorer))} 
                            {goal.Team === 'Negacionistas F.C' && (renderSecondTeamGoalLine(goal.Scorer))} 
                        </div>
                    )
                })
            }
        </div>
    )
};

export default MatchSummary;
