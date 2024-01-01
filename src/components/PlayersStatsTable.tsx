import { getNationalityFlag, getPlayerBadge, PlayersArr } from "@/utils";
import Image from "next/image";
import '../assets/styles/statsTable.css';

const PlayersStatsTable = () => {
    const getPlayerBadgeNumberClass = (overall: number) => {
        if (overall < 60) return 'badge--bronze';
        if (overall >= 61 && overall <= 75) return 'badge--yellow';
        if (overall > 75 && overall <= 85) return 'badge--blue';

        return 'badge--green';
    }

    return (
        <table className="stats-table">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>OVR</th>
                    <th className="hidden md:table-cell">ATA</th>
                    <th className="hidden md:table-cell">DEF</th>
                    <th className="hidden md:table-cell">TEC</th>
                    <th className="hidden md:table-cell">WR</th>
                    <th className="hidden md:table-cell">AGRE</th>
                    <th className="hidden md:table-cell">RES</th>
                    <th className="hidden md:table-cell">FIN</th>
                    <th className="hidden md:table-cell">SPE</th>
                    <th className="hidden md:table-cell">DRI</th>
                    <th className="hidden md:table-cell">PHY</th>
                    <th className="hidden md:table-cell">PAS</th>
                </tr>
            </thead>
            <tbody>
                    {
                        PlayersArr.map((player) => {
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
                                                            <Image src={getNationalityFlag(nat)} alt="" width={20} height={20} key={`${player.firstname}-${player.lastname}-nat`} />
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
                                    <td className="hidden md:table-cell"> {player.stats.ATA} </td>
                                    <td className="hidden md:table-cell"> {player.stats.DEF} </td>
                                    <td className="hidden md:table-cell"> {player.stats.TEC} </td>
                                    <td className="hidden md:table-cell"> {player.stats.WR} </td>
                                    <td className="hidden md:table-cell"> {player.stats.AGRE} </td>
                                    <td className="hidden md:table-cell"> {player.stats.RES} </td>
                                    <td className="hidden md:table-cell"> {player.stats.FIN} </td>
                                    <td className="hidden md:table-cell"> {player.stats.SPE} </td>
                                    <td className="hidden md:table-cell"> {player.stats.DRI} </td>
                                    <td className="hidden md:table-cell"> {player.stats.PHY} </td>
                                    <td className="hidden md:table-cell"> {player.stats.PAS} </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
        </table>
    )
}

export default PlayersStatsTable;
