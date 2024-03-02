'use client';
import Match from "@/components/Match";
import { MatchT } from "../../../../../types/types";
import React, { useEffect, useState } from "react";
import { OrderingType, groupMatchesByMonth } from "@/utils";
import { PastMatchesResults } from "@/MatchesDB";

interface MatchesByMonthMap {
    [month: string]: MatchT[];
}

const MatchesResults = () => {
    const [sortedMonths, setSortedMonths] = useState<string[]>([]);
    const [resultMatchesByMonth, setResultMatchesByMonth] = useState<MatchesByMonthMap | null>(null);
    
    useEffect(() => {
        const prepareData = async () => {
            const matchesByMonth = groupMatchesByMonth(PastMatchesResults, OrderingType.DESCENDING);
            setResultMatchesByMonth(matchesByMonth);

            const sortedMonths = Object.keys(matchesByMonth).sort((a, b) => {
                return new Date(b).getTime() - new Date(a).getTime();
            });

            setSortedMonths(sortedMonths);
        };

        prepareData();
    }, []);

    return (
        <React.Fragment>
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
