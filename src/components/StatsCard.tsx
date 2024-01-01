
type OwnProps = {
    cardTitle: string;
    cardStats: {
        title: string,
        value: string | number,
    }[];
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
                            <div className="flex gap-4" key={`card-stat-${cardStat.title}-${cardStat.value}`}>
                                <span className="font-bold text-lg w-6">{cardStat.value}</span>
                                <span className="uppercase">{cardStat.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StatsCard;
