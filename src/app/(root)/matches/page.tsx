'use client';

import { Matches } from "@/MatchesDB";
import Match from "@/components/Match";
import { matchesListURL, matchesURL } from "@/services/api";
import axios from "axios";
import { signIn, useSession, getSession } from "next-auth/react";
import { useEffect } from "react";

const UpcomingMatches = () => {
    
    useEffect(() => {
        getMatches();
    }, []);

    const getMatches = async () => {
        const session = await getSession();

        try {
            const { data } = await axios.get(matchesListURL(), {
                headers: {
                    'Authorization': `Bearer ${session?.accessToken}`,
                    'club': '10000'
                }
            });
        } catch (error) {
        }
    }

    const currentDateTime = new Date();
    const startOfToday = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), 0, 0, 0, 0);

    const upComingMatches = Matches.filter((match) => match.date >= startOfToday && match.incidents.length === 0);

    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h2 className="text-4xl font-bold uppercase">
                February
            </h2>
                {
                    upComingMatches.map((match) => {
                        return (
                            <Match isUpcoming match={match} key={`upcoming-match-${match.date}`} />
                        )
                    })
                }
        </div>
    )
}

export default UpcomingMatches;
