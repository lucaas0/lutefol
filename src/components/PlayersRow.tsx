import PlayerCard from './PlayerCard';
import '../assets/styles/playerCard.css';
import { PlayersArr } from '@/utils';
import { ExtendedTeamPlayer } from '../../types/types';

type PlayersRowProps = {
    selectedPlayer: ExtendedTeamPlayer;
    onPlayerClick(player: ExtendedTeamPlayer): void;
};

const PlayersRow = (props: PlayersRowProps) => {
    const { selectedPlayer, onPlayerClick } = props;
    return (
        <div className='players-container no-scrollbar'>
            {PlayersArr.map((player) => {
                return (
                    <PlayerCard
                        player={player}
                        onPlayerClick={() => onPlayerClick(player)}
                        key={`player-${player.firstName}-${player.lastName}`}
                    />
                );
            })}
        </div>
    );
};

export default PlayersRow;
