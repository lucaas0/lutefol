'use client';
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import PlayerCard from "@/components/PlayerCard";
import { PlayersArr } from "@/utils";

const Team = () => {
    return (
        <PageWrapper>
            <PageHeader title="team" />
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 my-10 w-full px-8 md:px-32">
                {
                    PlayersArr.map((player) => {
                        return <PlayerCard player={player} onPlayerClick={() => {}} key={`${player.firstname}-${player.lastname}-key`} />
                    })
                }
            </div>
        </PageWrapper>
    )
}

export default Team;
