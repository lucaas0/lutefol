import { Matches } from "@/MatchesDB";
import Match from "@/components/Match";

interface MatchesByMonthMap {
    [month: string]: Match[];
}

const MatchesResults = () => {
    const matchesResults = Matches.filter((match) => match.incidents.length > 0).sort((a: { date: Date }, b: { date: Date }): number => b.date.getTime() - a.date.getTime());
    
    // Group matches by month
    const matchesByMonth: MatchesByMonthMap = matchesResults.reduce((acc, match) => {
        const monthKey = match.date.toISOString().slice(0, 7); // yyyy-mm
        acc[monthKey] = acc[monthKey] || [];
        acc[monthKey].push(match);
        return acc;
    }, {} as MatchesByMonthMap);

    // Sort the months in descending order
    const sortedMonths = Object.keys(matchesByMonth).sort((a, b) => {
        return new Date(b).getTime() - new Date(a).getTime();
    });

    return (
            sortedMonths.map((month) => (
                <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32" key={month}>
                    <h2 className="text-4xl font-bold uppercase">{new Date(month).toLocaleString('default', { month: 'long', year: 'numeric' })}</h2>
                    {matchesByMonth[month].map((match) => (
                        <div key={match.id}>
                            <Match match={match} key={`match-result-${match.date}`} />
                        </div>
                    ))}
                </div>
            ))
    )
}

export default MatchesResults;
