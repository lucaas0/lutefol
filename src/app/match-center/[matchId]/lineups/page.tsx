'use client';
import { getMatchById, getMatchGoalsById } from '@/utils';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import '../../../../assets/styles/matchCenter.css';
import Image from 'next/image';
import { Match } from '@/misc';

const MatchLineup = () => {
    const params: { matchId: string } = useParams();

    const [match, setMatch] = useState<Match | undefined>(undefined);

    useEffect(() => {
        const getMatch = () => {
            const m = getMatchById(params.matchId);
            setMatch(m);
        }
        getMatch();
    }, [params.matchId]);

    return (
        <div className='flex gap-3 m-6'>
            <div className='flex flex-col gap-4 py-8 px-8 md:px-14 lineup-wrapper'>
                <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                    <Image src={match?.team1.logo || ''} alt="" width={52} height={52} />
                    <h2 className="font-bold text-base md:text-xl text-center md:text-left">{match?.team1.name}</h2>
                </div>
                {
                    match?.team1.players.map((player) => {
                        return (
                            <div key={`lineup-player-${player.firstname}-${player.lastname}`}>
                                {`${player.firstname} ${player.lastname}`}
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col gap-4 p-8 px-8 md:px-14 lineup-wrapper'>
                <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                    <Image src={match?.team2.logo || ''} alt="" width={52} height={52} />
                    <h2 className="font-bold text-base md:text-xl text-center md:text-left">{match?.team2.name}</h2>
                </div>
                {
                    match?.team2.players.map((player) => {
                        return (
                            <div key={`lineup-player-${player.firstname}-${player.lastname}`}>
                                {`${player.firstname} ${player.lastname}`}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default MatchLineup;
