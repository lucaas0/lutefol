'use client';
import Match from "@/components/Match";
import { APIResponse, MatchStatus, MatchT } from "../../../../../types/types";
import React, { useEffect, useState } from "react";
import { OrderingType, constructSearchParams, groupMatchesByMonth } from "@/utils";
import { PastMatchesResults } from "@/MatchesDB";
import Loader from "@/components/Loader";
import { listClubMatchesURL } from "@/services/api";
import axios from "axios";
import { useSession } from "next-auth/react";

interface MatchesByMonthMap {
    [month: string]: MatchT[];
}

const MatchesResults = () => {
    const [sortedMonths, setSortedMonths] = useState<string[]>([]);
    const [resultMatchesByMonth, setResultMatchesByMonth] = useState<MatchesByMonthMap | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [apiResultsByMonth, setApiResults] = useState<MatchesByMonthMap | null>(null);
    const [apiResultsSortedMonth, setApiResultsSortedMonths] = useState<string[]>([]);

    const session = useSession();
    
    useEffect(() => {
        prepareData();
        getMatches();
    }, []);

    const prepareData = async () => {
        const matchesByMonth = groupMatchesByMonth(PastMatchesResults, OrderingType.DESCENDING);
        setResultMatchesByMonth(matchesByMonth);

        const sortedMonths = Object.keys(matchesByMonth).sort((a, b) => {
            return new Date(b).getTime() - new Date(a).getTime();
        });

        setSortedMonths(sortedMonths);
    };

    const getMatches = async (): Promise<APIResponse<MatchT>> => {
        setIsLoading(true);
        try {
            const params = constructSearchParams({matchStatuses: [MatchStatus.COMPLETED]});
            const { data } = await axios.get<APIResponse<MatchT>>(listClubMatchesURL(10000, params));
            const matchesByMonth = groupMatchesByMonth(data.results, OrderingType.DESCENDING);
            setApiResults(matchesByMonth);

            const sortedMonths = Object.keys(matchesByMonth).sort((a, b) => {
                return new Date(b).getTime() - new Date(a).getTime();
            });

            setApiResultsSortedMonths(sortedMonths);
            setIsLoading(false);
            return data;
        } catch (error) {
            setIsLoading(false);
            return {
                results: [],
                cursor: ''
            };
        }
    };

    const handleMatchDeleted = async () => {
        await prepareData();
        await getMatches();

    }

    return (
        <React.Fragment>
            {
                isLoading && <Loader />
            }
            {
                session && session.status === 'authenticated' && (
                    apiResultsSortedMonth.map((m) => {
                            return (
                                <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32" key={`api-${m}`}>
                                    <h2 className="text-4xl font-bold uppercase">
                                        {new Date(m).toLocaleString('default', { month: 'long', year: 'numeric' })}
                                        &nbsp; (ADMIN ONLY)
                                    </h2>
                                        {apiResultsByMonth && apiResultsByMonth[m].map((match) => (
                                            <div key={match.id}>
                                                <Match match={match} key={`match-result-${match.date}`} canBeDeleted onMatchDeleted={handleMatchDeleted} />
                                            </div>
                                        ))}
                                </div>
                            )
                    })
                )
            }
            {
                sortedMonths.map((month) => (
                    <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32" key={month}>
                        <h2 className="text-4xl font-bold uppercase">{new Date(month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                        {resultMatchesByMonth && resultMatchesByMonth[month].map((match) => (
                            <div key={match.id}>
                                <Match match={match} key={`match-result-${match.date}`} />
                            </div>
                        ))}
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default MatchesResults;
