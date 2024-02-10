'use client';
import { aggregateResults, getMatchById, getMatchIncidentsById } from '@/utils';
import { useParams } from 'next/navigation';
import '../../../../../assets/styles/matchCenter.css';
import { Goal, INCIDENTS, Match, Substitution } from '@/misc';
import GoalIncident from '@/components/GoalIncident';
import SubstitutionIncident from '@/components/SubstitutionIncident';
import React, { useEffect, useState } from 'react';
import MiniMatch from '@/components/MiniMatch';
import Image from 'next/image';
import Logo1 from '../../../../../../public/logo-red.svg';
import Logo2 from '../../../../../../public/logo-green.svg';
import Logo3 from '../../../../../../public/pirates-logo.svg';

const MatchSummary = () => {
    const params: { matchId: string } = useParams();

    const [match, setMatch] = useState<Match | undefined>(undefined);

    useEffect(() => {
        const m = getMatchById(params.matchId);

        setMatch(m);
    }, [params.matchId]);

    const getMatchIncidents = () => {
        return getMatchIncidentsById(params.matchId);
    }

    const GoalComponent = ({ goal }: { goal: Goal; }) => {
        const isSecondTeam = goal.Team === 'Corsairs';
        return (
            <GoalIncident goal={goal} isSecondTeam={isSecondTeam} />
        );
    };

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

    const renderMiniMatches = () => {
        if (match && match.miniMatches) {
            const miniMatches = match.miniMatches;

            const game1Result = aggregateResults(miniMatches, 'Scallywags', 'Corsairs');
            const game2Result = aggregateResults(miniMatches, 'Scallywags', 'Buccaneers');
            const game3Result = aggregateResults(miniMatches, 'Buccaneers', 'Corsairs');

            return (
                <div className='flex flex-col gap-8'>
                    {
                        miniMatches.map((miniMatch, idx) => {
                            return <MiniMatch match={miniMatch} key={`mini-match-${idx}`} gameNumber={idx + 1} />
                        })
                    }
                    <div className="flex items-center gap-6 bg-true-gray-900 p-6" key="game-1-sca-cor">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">Scallywags</h2>
                            <Image src={Logo1} alt="" width={52} height={52} />
                        </div>
                        <React.Fragment>
                            <h2 className="font-bold text-xl">{game1Result.goalsTeam1}</h2>
                            <h2 className="font-bold text-xl">-</h2>
                            <h2 className="font-bold text-xl">{game1Result.goalsTeam2}</h2>
                        </React.Fragment>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">Corsairs</h2>
                            <Image src={Logo2} alt="" width={52} height={52} />
                        </div>
                    </div>
                    <div className="flex items-center gap-6 bg-true-gray-900 p-6" key="game-2-sca-bur">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">Scallywags</h2>
                            <Image src={Logo1} alt="" width={52} height={52} />
                        </div>
                        <React.Fragment>
                            <h2 className="font-bold text-xl">{game2Result.goalsTeam1}</h2>
                            <h2 className="font-bold text-xl">-</h2>
                            <h2 className="font-bold text-xl">{game2Result.goalsTeam2}</h2>
                        </React.Fragment>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">Buccaneers</h2>
                            <Image src={Logo3} alt="" width={52} height={52} />
                        </div>
                    </div>
                    <div className="flex items-center gap-6 bg-true-gray-900 p-6" key="game-3-cor-bur">
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">Buccaneers</h2>
                            <Image src={Logo3} alt="" width={52} height={52} />
                        </div>
                        <React.Fragment>
                            <h2 className="font-bold text-xl">{game3Result.goalsTeam1}</h2>
                            <h2 className="font-bold text-xl">-</h2>
                            <h2 className="font-bold text-xl">{game3Result.goalsTeam2}</h2>
                        </React.Fragment>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">Corsairs</h2>
                            <Image src={Logo2} alt="" width={52} height={52} />
                        </div>
                        
                    </div>
                </div>
            );
        }
    }

    return (
        <div className='m-6'>
            { match && !match.miniMatches && renderIncidents()}
            {match && match.miniMatches && match.miniMatches.length > 0 && renderMiniMatches()}
        </div>
    )
};

export default MatchSummary;
