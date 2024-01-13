import { PlayerMatchStats } from "@/misc";

type OwnProps = {
    cardTitle: 'GOALS' | 'ASSISTS';
    cardStats: PlayerMatchStats[];
}
const StatsCard = (props: OwnProps) => {
    const { cardTitle, cardStats } = props;
    return (
        <div className="flex flex-col gap-4 py-4 pe-36 ps-4 bg-true-gray-900">
            <h4 className="text-xl font-bold uppercase">{cardTitle}</h4>
            <div className="flex flex-col gap-2">
                {
                    cardStats.map((cardStat) => {
                        return (
                            <div className="flex gap-4" key={`card-stat-${cardStat.player.firstname}-${cardStat.player.lastname}`}>
                                <span className="font-bold text-lg w-6">{cardTitle === 'GOALS' ? cardStat.goals : cardStat.assists}</span>
                                <span className="uppercase">{cardStat.player.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StatsCard;
