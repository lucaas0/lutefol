'use client';
import PageWrapper from "@/components/PageWrapper";
import Tab from "@/components/Tab";
import CustomTabs from "@/components/Tabs";
import { Match, Months, Weekday } from "@/misc";
import { getMatchById } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import '../../assets/styles/matchCenter.css';

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
                                <h3 className="color-green font-bold">{`${Weekday[match.date.getDay()]} ${match.date.getDate()} ${Months[match.date.getMonth()]} ${match.date.getFullYear()}`}</h3>
                                <h4>{`${match.time} - ${match.location}`}</h4>
                            </div>
                            <div className="center-absolute bottom-8 md:bottom-24 flex items-center gap-6">
                                <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8">
                                    <h2 className="font-bold uppercase text-xl md:text-2xl text-center md:text-left">{match.team1.name}</h2>
                                    <Image src={match.team1.logo} alt="" width={52} height={52} />
                                </div>
                                {
                                    match.result && (
                                        <React.Fragment>
                                            <h2 className="font-bold text-2xl md:text-5xl">{match.result.team1}</h2>
                                            <h2 className="font-bold text-xl">-</h2>
                                            <h2 className="font-bold text-2xl md:text-5xl">{match.result.team2}</h2>
                                        </React.Fragment>
                                    )
                                }
                                {
                                    !match.result && (
                                        <h2 className="font-bold text-xl">VS</h2>
                                    )
                                }
                                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                                    <Image src={match.team2.logo} alt="" width={52} height={52} />
                                    <h2 className="font-bold uppercase text-xl md:text-2xl text-center md:text-left">{match.team2.name}</h2>
                                </div>
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