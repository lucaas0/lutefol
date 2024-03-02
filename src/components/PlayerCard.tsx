'use client';
import Image from 'next/image';
import '../assets/styles/playerCard.css';
import { ExtendedTeamPlayer } from '../../types/types';

interface PlayerProps {
    player: ExtendedTeamPlayer;
    onPlayerClick(player: ExtendedTeamPlayer): void;
}

const PlayerCard = (props: PlayerProps) => {
    const { player, onPlayerClick } = props;

    return (
        <div className='player-wrapper'>
            <div className="player-container">
                <div className="player-background-image"></div>
                <div className="player-overlay">
                    <Image src={player.photoUrl} width={500} height={500} alt='' />
                </div>
                <div className="player-number text-6xl font-bold color-brand-400">{player.clubNumber}</div>
            </div>
            <div className="player-name">
                <span className="player-firstname">{player.firstName}</span><br />
                <span className="player-lastname">{player.lastName}</span>
            </div>
        </div>
    );
};

export default PlayerCard;
