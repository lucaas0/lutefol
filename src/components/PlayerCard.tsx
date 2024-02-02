'use client';
import Image from 'next/image';
import '../assets/styles/playerCard.css';
import { Player } from '@/misc';

interface PlayerProps {
    player: Player;
    onPlayerClick(player: Player): void;
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
                <div className="player-number text-6xl font-bold color-brand-400">{player.number}</div>
            </div>
            <div className="player-name">
                <span className="player-firstname">{player.firstname}</span><br />
                <span className="player-lastname">{player.lastname}</span>
            </div>
        </div>
    );
};

export default PlayerCard;
