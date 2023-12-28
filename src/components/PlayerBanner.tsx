import Image, { StaticImageData } from 'next/image';
import '../assets/styles/playerBanner.css';
import { Player } from '@/misc';

interface PlayerBannerProps {
    player: Player;
}

const PlayerBanner = (props: PlayerBannerProps) => {
    const { player } = props;

    return (
        <div className='background-div'>
            <div className='blurry-background'></div>
            <div className='content'>
                <Image src={player.photoUrl} alt='' />
                <div className='player-banner__details__name'>
                    <span>{player.firstname}</span>
                    <span>{player.lastname}</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerBanner;
