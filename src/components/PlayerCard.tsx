import Image from 'next/image';
import '../assets/styles/playerCard.css';
import PlayerPhoto from '../../public/player.png';

interface PlayerProps {
    firstname: string;
    lastname: string;
}

const PlayerCard = (props: PlayerProps) => {
    const { firstname, lastname } = props;
    return (
        <div className='player-card'>
            <div className='player-details'>
                <Image src={PlayerPhoto} alt='' />
                <div className='player-name'>
                    <span>{firstname}</span>
                    <span>{lastname}</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
