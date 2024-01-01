import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import PlayersStatsTable from "@/components/PlayersStatsTable";
import StatsCard from "@/components/StatsCard";

const Stats = () => {
    return (
        <PageWrapper>
            <PageHeader title="stats" />
            <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-32">
                <div className="flex flex-col gap-4">
                    <h2 className="text-4xl font-bold uppercase">
                        Top Stats
                    </h2>
                    <div className="flex gap-3 w-full flex-wrap">
                        <StatsCard cardTitle="Goals" cardStats={[{
                            title: 'oliveira',
                            value: 100
                        }, {
                            title: 'lukaku',
                            value: 80
                        }, {
                            title: 'aquaman',
                            value: 75
                        }]} />

                        <StatsCard cardTitle="Assists" cardStats={[{
                            title: 'oliveira',
                            value: 100
                        }, {
                            title: 'lukaku',
                            value: 80
                        }, {
                            title: 'aquaman',
                            value: 75
                        }]} />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl font-bold uppercase">
                        ratings
                    </h2>
                    <PlayersStatsTable />
                </div>
            </div>
        </PageWrapper>
    )
}

export default Stats;
