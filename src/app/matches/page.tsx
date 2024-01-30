import { Matches } from "@/MatchesDB";
import Match from "@/components/Match";

const UpcomingMatches = () => {
    const currentDateTime = new Date();
    const startOfToday = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), 0, 0, 0, 0);

    const upComingMatches = Matches.filter((match) => match.date >= startOfToday && match.goals.length === 0);

    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h2 className="text-4xl font-bold uppercase">
                February
            </h2>
                {
                    upComingMatches.map((match) => {
                        return (
                            <Match match={match} key={`upcoming-match-${match.date}`} />
                        )
                    })
                }
        </div>
    )
}

export default UpcomingMatches;
