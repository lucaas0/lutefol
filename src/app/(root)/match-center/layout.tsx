'use client';
import PageWrapper from "@/components/PageWrapper";
import Tab from "@/components/Tab";
import CustomTabs from "@/components/Tabs";
import { Goal, INCIDENTS, Match, Months, Weekday } from "@/misc";
import { getMatchById, getMatchResult } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import '../../../assets/styles/matchCenter.css';

export default function MatchesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const route = usePathname();
    const params: { matchId: string } = useParams();

    const [match, setMatch] = useState<Match | undefined>(undefined);

    useEffect(() => {
        const m = getMatchById(params.matchId);

        setMatch(m);
    }, [params.matchId]);

    const result = match ? getMatchResult(match.incidents.filter((incident) => incident.type === INCIDENTS.GOAL || incident.type === INCIDENTS.OWN_GOAL) as Goal[]): null;

    const renderTeam = () => {
        return (
            match?.teams.map((team, index) => {
                return (
                    <React.Fragment key={`team-${team.name}`}>
                        <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                            <h2 className="font-bold uppercase text-sm md:text-xl text-center md:text-left">{team.name}</h2>
                            <Image src={team.logo} alt="" width={52} height={52} />
                        </div>
                        {index < match.teams.length - 1 && renderResultOrVS()}
                    </React.Fragment>
                )
            })
        )
    }

    const renderResultOrVS = () => {
        if (match) {
            return (
                match.incidents.length > 0 && result ? (
                    <React.Fragment>
                        <h2 className="font-bold text-xl">{result['Scallywags']}</h2>
                        <h2 className="font-bold text-xl">-</h2>
                        <h2 className="font-bold text-xl">{result['Corsairs']}</h2>
                    </React.Fragment>
                ) : (
                    <h2 className="font-bold text-xl">-</h2>
                )
            )
        }
    }

    return (
        <PageWrapper>
            <section className="w-full relative match-center-header">
                <Image src="/match-center-bg.svg" alt="" width={8000} height={500} className="w-full" />
                <div className="absolute top-10 md:top-20 left-16 flex gap-3">
                    <Link href="/matches/results" className="flex gap-2">
                        <Image src="/caret-left-ic.svg" width={24} height={24} alt={`<`} />
                        <span className="uppercase">back to season</span>
                    </Link>
                </div>
                {
                    match && (
                        <React.Fragment>
                            <div className="center-absolute top-28 md:top-20 flex flex-col text-center">
                                <h3 className="color-brand-400 font-bold">{`${Weekday[match.date.getDay()]} ${match.date.getDate()} ${Months[match.date.getMonth()]} ${match.date.getFullYear()}`}</h3>
                                <h4>{`${match.time} - ${match.location}`}</h4>
                            </div>
                            <div className="center-absolute bottom-8 md:top-2/3 flex items-center gap-6">
                                {renderTeam()}
                            </div>
                        </React.Fragment>
                    )
                }
            </section>
            
            <CustomTabs tabPosition="items-center justify-center">
                    <Tab title="summary" route={`/match-center/${params.matchId}/summary`} selected={route === `/match-center/${params.matchId}/summary`} />
                    <Tab title="lineups" route={`/match-center/${params.matchId}/lineups`} selected={route === `/match-center/${params.matchId}/lineups`} />
                </CustomTabs>
            {children}
        </PageWrapper>
    );
}