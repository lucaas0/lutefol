'use client';
import React, { useEffect } from 'react';
import { Goal, INCIDENTS, Match, Months, Weekday } from "@/misc";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getMatchResult } from '@/utils';

type OwnProps = {
    match: Match;
}

const Match = (props: OwnProps) => {
    const { match } = props;

    const result = getMatchResult(match.incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]);

    const renderTeam = () => {
        return (
            match.teams.map((team, index) => {
                return (
                    <React.Fragment key={`team-${team.name}`}>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">{team.name}</h2>
                            <Image src={team.logo} alt="" width={52} height={52} />
                        </div>
                        {index < match.teams.length -1 && renderResultOrVS() }
                    </React.Fragment>
                )
            })
        )
    }

    const renderResultOrVS = () => {
        return (
                match.incidents.length > 0 ? (
                    <React.Fragment>
                        <h2 className="font-bold text-xl">{result['Scallywags']}</h2>
                        <h2 className="font-bold text-xl">-</h2>
                        <h2 className="font-bold text-xl">{result['Corsairs']}</h2>
                    </React.Fragment>
                ) : (
                <h2 className="font-bold text-xl">VS</h2>
            )
        )
    }

    return (
                <section className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between bg-true-gray-900 p-6 items-center uppercase" key={`match-${match.date}`}>
                    <div className="flex flex-col text-sm md:text-sm text-center md:text-left">
                        <div className='flex items-center justify-center gap-4'>
                            <span className='text-6xl font-bold color-brand-400 leading-none'>
                                {match.date.getDate()}
                            </span>
                            <div className='flex flex-col items-start justify-center'>
                                <span className='text-base font-bold'>{Weekday[match.date.getDay()]}</span>
                                {`${match.time} - ${match.location}`}
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        {
                            renderTeam()
                        }
                    </div>
                    <Link href={`/match-center/${match.id}/summary`}>
                <button
                    type="button"
                    className="border
                            border-gray-800 border-solid py-2 px-4 text-base font-bold"
                >
                    MATCH CENTER
                </button>
                    </Link>
                </section>
    )
}

export default Match;
