'use client';

import { LiveMatchContext } from "@/components/LiveMatchWrapper";
import Image from "next/image";
import React from "react";

const LiveLineups = () => {
    const liveMatch = React.useContext(LiveMatchContext);

    return (
        <div className="flex justify-between">
            <div className="flex flex-col gap-4">
                {
                    liveMatch?.homeTeamPlayers.map((player) => {
                        return (
                            <div className='flex gap-4' key={`lineup-player-${player.firstName}-${player.lastName}`}>
                                <span className='font-bold color-brand-400 w-4'>
                                    {player.clubNumber}
                                </span>
                                <span>
                                    {`${player.nickName}`}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col gap-4">
                {
                    liveMatch?.awayTeamPlayers.map((player) => {
                        return (
                            <div className='flex gap-4' key={`lineup-player-${player.firstName}-${player.lastName}`}>
                                <span className='font-bold color-brand-400 w-4'>
                                    {player.clubNumber}
                                </span>
                                <span>
                                    {`${player.nickName}`}
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default LiveLineups;
