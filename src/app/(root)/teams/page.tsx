'use client';
import PageHeader from "@/components/PageHeader";
import PageWrapper from "@/components/PageWrapper";
import PlayerCard from "@/components/PlayerCard";
import { PlayersArr } from "@/utils";

const Team = () => {
    return (
        <PageWrapper>
            <PageHeader title="team" />
            <div className="grid grid-cols-2 justify-items-center md:flex md:flex-row md:flex-wrap justify-between gap-10 my-10 w-full px-4 md:px-32">
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
