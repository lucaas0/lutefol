import { PlayerMatchStats } from "@/misc";
import Image from "next/image";

type OwnProps = {
    cardTitle: 'GOALS' | 'ASSISTS';
    cardStats: PlayerMatchStats[];
}
const StatsCard = (props: OwnProps) => {
    const { cardTitle, cardStats } = props;
    return (
        <div className="flex flex-col gap-4 py-4 pe-36 ps-4 bg-true-gray-900 stats-card">
            <div className="flex gap-4">
                <Image src={cardTitle === "GOALS" ? "/football.svg" : "/assists-ic.svg"} alt="" width={24} height={24} />
                <h4 className="text-xl font-bold uppercase">{cardTitle}</h4>
            </div>
            <div className="flex flex-col gap-2">
                {
                    cardStats.map((cardStat) => {
                        return (
                            <div className="flex gap-4 items-center" key={`card-stat-${cardStat.player.firstname}-${cardStat.player.lastname}`}>
                                <span className="font-bold text-lg w-6 color-brand-400">{cardTitle === 'GOALS' ? cardStat.goals : cardStat.assists}</span>
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
