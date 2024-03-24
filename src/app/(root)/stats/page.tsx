'use client';
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import PlayersStatsTable from "@/components/PlayersStatsTable";
import CustomSelect from "@/components/Select";
import StatsCard from "@/components/StatsCard";
import { PlayerMatchStats, seasons } from "@/misc";
import { topAssists, topScorers } from "@/utils";
import { useEffect, useState } from "react";


const Stats = () => {
    const [selectedOption, setSelectedOption] = useState<seasons>(seasons.APR_MAY);
    const [topSco, setTopSco] = useState<PlayerMatchStats[]>([]);
    const [topAss, setTopAss] = useState<PlayerMatchStats[]>([]);

    useEffect(() => {
        if (selectedOption === seasons.JAN_MAR) {
            setTopSco(topScorers);
            setTopAss(topAssists);
        } else {
            setTopSco([]);
            setTopAss([])
        }
    }, [selectedOption]);

    const options = [
        { label: '2024 (APR-MAY)', value: seasons.APR_MAY },
        { label: '2024 (JAN-MAR)', value: seasons.JAN_MAR },
    ];

    const handleChange = (value: string) => {
        setSelectedOption(value as seasons);
    };

    return (
        <PageWrapper>
            <PageHeader title="stats" />
            <div className="flex flex-col gap-10 my-10 w-full px-8 md:px-16">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                        <h2 className="text-4xl font-bold uppercase">
                            Top Stats
                        </h2>
                        <div>
                            <CustomSelect
                                options={options}
                                value={selectedOption}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex gap-3 w-full flex-wrap">
                        <StatsCard cardTitle="GOALS" cardStats={topSco} />
                        <StatsCard cardTitle="ASSISTS" cardStats={topAss} />
                    </div>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl font-bold uppercase">
                        ratings
                    </h2>
                    <PlayersStatsTable season={selectedOption} />
                </div>
            </div>
        </PageWrapper>
    )
}

export default Stats;
