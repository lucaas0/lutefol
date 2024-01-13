import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import PlayersStatsTable from "@/components/PlayersStatsTable";
import StatsCard from "@/components/StatsCard";
import { topAssists, topScorers } from "@/utils";

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
                        <StatsCard cardTitle="GOALS" cardStats={topScorers} />
                        <StatsCard cardTitle="ASSISTS" cardStats={topAssists} />
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
