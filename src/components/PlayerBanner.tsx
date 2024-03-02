import Image, { StaticImageData } from 'next/image';
import '../assets/styles/playerBanner.css';
import { ExtendedTeamPlayer } from '../../types/types';

interface PlayerBannerProps {
    player: ExtendedTeamPlayer;
}

const PlayerBanner = (props: PlayerBannerProps) => {
    const { player } = props;

    return (
        <div className='background-div'>
            <div className='blurry-background'></div>
            <div className='content'>
                <Image src={player.photoUrl} alt='' />
                <div className='player-banner__details__name'>
                    <span>{player.firstName}</span>
                    <span>{player.lastName}</span>
                </div>
            </div>
        </div>
    );
};

export default PlayerBanner;
