import Match from "@/components/Match";
import { Matches } from "@/utils";

const UpcomingMatches = () => {
    const currentDateTime = new Date();
    const startOfToday = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate(), 0, 0, 0, 0);

    const upComingMatches = Matches.filter((match) => match.date >= startOfToday);

    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h2 className="text-4xl font-bold uppercase">
                January
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
