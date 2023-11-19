import { Player } from '@/utils';
import Image, { StaticImageData } from 'next/image';
import '../assets/styles/playerCard.css';

interface PlayerProps {
    player: Player;
    onPlayerClick(player: Player): void;
    isSelected: boolean;
}

const PlayerCard = (props: PlayerProps) => {
    const { player, onPlayerClick, isSelected } = props;

    return (
        <div
            className={`player-card ${
                isSelected ? 'player-card--selected' : ''
            }`}
            onClick={() => onPlayerClick(player)}
        >
            <div className='player-details'>
                <Image src={player.photoUrl} alt='' width={150} height={150} />
                <div className='player-name'>
                    <span>{player.firstname}</span>
                    <span>{player.lastname}</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
