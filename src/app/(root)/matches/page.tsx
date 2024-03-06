'use client';

import Match from "@/components/Match";
import { listClubMatchesURL } from "@/services/api";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { APIResponse, MatchT, MatchesByMonthMap } from "../../../../types/types";
import { constructSearchParams, groupMatchesByMonth } from "@/utils";
import CreateMatchModal from "@/components/CreateMatchModal";

const UpcomingMatches = () => {
    const [upcomingMatchesCursor, setUpcomingMatchesCursor] = useState<string>('');
    const [sortedMonths, setSortedMonths] = useState<string[]>([]);
    const [upcomingMatchesByMonth, setUpcomingMatchesByMonth] = useState<MatchesByMonthMap | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [showCreateModal, setShowModal] = useState(false);

    const session = useSession();
    
    useEffect(() => {
        const prepareData = async () => {
            const { results, cursor } = await getMatches();
            setUpcomingMatchesCursor(cursor);
            
            const matchesByMonth = groupMatchesByMonth(results);
            setUpcomingMatchesByMonth(matchesByMonth);

            const sortedMonths = Object.keys(matchesByMonth).sort((a, b) => {
                return new Date(a).getTime() - new Date(b).getTime();
            });

            setSortedMonths(sortedMonths);
        };

        prepareData();
    }, []);

    const getMatches = async (): Promise<APIResponse<MatchT>> => {
        setIsLoading(true);
        try {
            const params = constructSearchParams({upcoming: true, ascending: true});
            const { data } = await axios.get<APIResponse<MatchT>>(listClubMatchesURL(10000, params));
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

    const handleMatchCreatedDeleted = async () => {
        setIsLoading(true);
        const { results, cursor }  = await getMatches();

        setUpcomingMatchesCursor(cursor);
            
        const matchesByMonth = groupMatchesByMonth(results);
        setUpcomingMatchesByMonth(matchesByMonth);

        const sortedMonths = Object.keys(matchesByMonth).sort((a, b) => {
            return new Date(a).getTime() - new Date(b).getTime();
        });

        setSortedMonths(sortedMonths);
        setIsLoading(false);
    }

    return (
        <div className="w-full relative">
            {
                showCreateModal && <CreateMatchModal handleMatchCreated={handleMatchCreatedDeleted} handleCloseModal={() => setShowModal(false)} />
            }
            {
                session && session.status === 'authenticated' && (
                    <button className="page-header-btn" onClick={() => setShowModal(true)}>
                        Create match
                    </button>
                )
            }
            {
                sortedMonths.map((month) => (
                    <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32" key={month}>
                        <h2 className="text-4xl font-bold uppercase">{new Date(month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                        {upcomingMatchesByMonth && upcomingMatchesByMonth[month].map((match) => (
                            <div key={match.id}>
                                <Match match={match} key={`match-result-${match.date}`} onMatchDeleted={handleMatchCreatedDeleted} isUpcoming />
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default UpcomingMatches;
