'use client';
import { getNationalityFlag, getPlayerBadge, PlayersArr, sortByAssistsAsc, sortByAssistsDesc, sortByGoalsAsc, sortByGoalsDesc, sortByOVRAsc, sortByOVRDesc } from "@/utils";
import Image from "next/image";
import '../assets/styles/statsTable.css';
import { useEffect, useState } from "react";
import { getPlayerStats } from "@/Stats";

enum Order {
    OVR_ASC = 'OVR_ASC',
    OVR_DESC = 'OVR_DEC',
    GOALS_ASC = 'GOALS_ASC',
    GOALS_DESC = 'GOALS_DESC',
    ASSISTS_ASC = 'ASSISTS_ASC',
    ASSISTS_DESC = 'ASSISTS_DESC',
}

const PlayersStatsTable = () => {
    const [order, setOrder] = useState<Order>(Order.OVR_DESC);
    const [orderedPlayersArr, setOrderedPlayersArr] = useState(PlayersArr);


    const getPlayerBadgeNumberClass = (overall: number) => {
        if (overall < 60) return 'badge--bronze';
        if (overall >= 61 && overall <= 75) return 'badge--yellow';
        if (overall > 75 && overall <= 85) return 'badge--blue';

        return 'badge--green';
    }

    useEffect(() => {
        const copy = [...PlayersArr];
        copy.forEach((p) => {
            p.goals = getPlayerStats(p.label).goals;
            p.assists = getPlayerStats(p.label).assists;
        });
        setOrderedPlayersArr(copy);
    }, []);

    useEffect(() => {
        if (order === Order.OVR_ASC) {
            setOrderedPlayersArr(sortByOVRAsc(PlayersArr));
        }

        if (order === Order.OVR_DESC) {
            setOrderedPlayersArr(sortByOVRDesc(PlayersArr));
        }

        if (order === Order.GOALS_ASC) {
            setOrderedPlayersArr(sortByGoalsAsc(PlayersArr));
        }

        if (order === Order.GOALS_DESC) {
            setOrderedPlayersArr(sortByGoalsDesc(PlayersArr));
        }

        if (order === Order.ASSISTS_ASC) {
            setOrderedPlayersArr(sortByAssistsAsc(PlayersArr));
        }

        if (order === Order.ASSISTS_DESC) {
            setOrderedPlayersArr(sortByAssistsDesc(PlayersArr));
        }
    }, [order]);

    return (
        <table className="stats-table">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex flex-col">
                                <button
                                    className="border-none caret-up"
                                    onClick={() => setOrder(Order.OVR_ASC)}
                                >
                                    <Image src={order === Order.OVR_ASC ? '/caret-selected.svg' : '/caret-down.svg'} width={14} height={14} alt="" />
                                </button>
                                <button
                                    className="border-none"
                                    onClick={() => setOrder(Order.OVR_DESC)}
                                >
                                    <Image src={order === Order.OVR_DESC ? '/caret-selected.svg' : '/caret-down.svg'} width={14} height={14} alt="" />
                                </button>
                            </div>
                            OVR
                        </div>
                    </th>
                    <th className="hidden lg:table-cell">ATA</th>
                    <th className="hidden lg:table-cell">DEF</th>
                    <th className="hidden lg:table-cell">TEC</th>
                    <th className="hidden lg:table-cell">WR</th>
                    <th className="hidden lg:table-cell">AGRE</th>
                    <th className="hidden lg:table-cell">RES</th>
                    <th className="hidden lg:table-cell">FIN</th>
                    <th className="hidden lg:table-cell">SPE</th>
                    <th className="hidden lg:table-cell">DRI</th>
                    <th className="hidden lg:table-cell">PHY</th>
                    <th className="hidden lg:table-cell">PAS</th>
                    <th className="lg:table-cell bordered-left">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex flex-col">
                                <button
                                    className="border-none caret-up"
                                    onClick={() => setOrder(Order.GOALS_ASC)}
                                >
                                    <Image src={order === Order.GOALS_ASC ? '/caret-selected.svg' : '/caret-down.svg'} width={14} height={14} alt="" />
                                </button>
                                <button
                                    className="border-none"
                                    onClick={() => setOrder(Order.GOALS_DESC)}
                                >
                                    <Image src={order === Order.GOALS_DESC ? '/caret-selected.svg' : '/caret-down.svg'} width={14} height={14} alt="" />
                                </button>
                            </div>
                            GOALS
                        </div>
                    </th>
                    <th className="lg:table-cell">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex flex-col">
                                <button
                                    className="border-none caret-up"
                                    onClick={() => setOrder(Order.ASSISTS_ASC)}
                                >
                                    <Image src={order === Order.ASSISTS_ASC ? '/caret-selected.svg' : '/caret-down.svg'} width={14} height={14} alt="" />
                                </button>
                                <button
                                    className="border-none"
                                    onClick={() => setOrder(Order.ASSISTS_DESC)}
                                >
                                    <Image src={order === Order.ASSISTS_DESC ? '/caret-selected.svg' : '/caret-down.svg'} width={14} height={14} alt="" />
                                </button>
                            </div>
                            ASSISTS
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                    {
                        orderedPlayersArr.map((player) => {
                            return (
                                <tr key={`${player.firstname}-${player.lastname}-stat`}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <Image src={player.photoUrl} alt="" width={42} height={42} />
                                            <div className="flex flex-col">
                                                <span className="stats-player-name">
                                                    {`${player.firstname} ${player.lastname}`}
                                                </span>
                                                <div className="flex gap-2">
                                                    {player.nationality.map((nat) => {
                                                        return (
                                                            <Image src={getNationalityFlag(nat)} alt="" width={20} height={20} key={`${player.firstname}-${player.lastname}-nat-${nat}`} />
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center justify-center relative">
                                            <Image src={getPlayerBadge(player.stats.OVR)} alt="" width={42} height={42} />
                                            <span className={`absolute badge ${getPlayerBadgeNumberClass(player.stats.OVR)}`}>
                                                {player.stats.OVR}
                                            </span>
                                        </div> 
                                    </td>
                                    <td className="hidden lg:table-cell"> {player.stats.ATA} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.DEF} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.TEC} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.WR} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.AGRE} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.RES} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.FIN} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.SPE} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.DRI} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.PHY} </td>
                                    <td className="hidden lg:table-cell"> {player.stats.PAS} </td>
                                    <td className="lg:table-cell bordered-left">{player.goals} </td>
                                    <td className="lg:table-cell"> {player.assists} </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    )
}

export default PlayersStatsTable;
