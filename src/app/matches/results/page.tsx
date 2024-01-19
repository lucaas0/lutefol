import { Matches } from "@/MatchesDB";
import Match from "@/components/Match";

const MatchesResults = () => {
    const matchesResults = Matches.filter((match) => match.result !== null).sort((a: { date: Date }, b: { date: Date }): number => b.date.getTime() - a.date.getTime());

    return (
        <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
            <h2 className="text-4xl font-bold uppercase">
                January
            </h2>
            {
                matchesResults.map((m) => {
                    return <Match match={m} key={`match-result-${m.date}`} />
                })
            }
        </div>
    )
}

export default MatchesResults;
