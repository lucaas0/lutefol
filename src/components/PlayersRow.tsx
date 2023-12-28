import PlayerCard from './PlayerCard';
import '../assets/styles/playerCard.css';
import { PlayersArr } from '@/utils';
import { Player } from '@/misc';

type PlayersRowProps = {
    selectedPlayer: Player;
    onPlayerClick(player: Player): void;
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
                        isSelected={
                            player.firstname === selectedPlayer.firstname &&
                            player.lastname === selectedPlayer.lastname
                        }
                        key={`player-${player.firstname}-${player.lastname}`}
                    />
                );
            })}
        </div>
    );
};

export default PlayersRow;
