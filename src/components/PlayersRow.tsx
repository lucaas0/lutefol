import PlayerCard from './PlayerCard';
import '../assets/styles/playerCard.css';

const PlayersRow = () => {
    return (
        <div className='players-container no-scrollbar'>
            <PlayerCard firstname='Lucas' lastname='Garcia' />
            <PlayerCard firstname='Ruben' lastname='Rodrigues' />
            <PlayerCard firstname='Andre' lastname='Salvado' />
            <PlayerCard firstname='Diogo' lastname='Domingues' />
            <PlayerCard firstname='Joao' lastname='Ferreira' />
            <PlayerCard firstname='Ivo' lastname='Oliveira' />
            <PlayerCard firstname='Gustavo' lastname='Carreira' />
            <PlayerCard firstname='Rodrigo' lastname='Alves' />
            <PlayerCard firstname='Bernardo' lastname='Figueiredo' />
            <PlayerCard firstname='Nuno' lastname='Reis' />
            <PlayerCard firstname='Jorge' lastname='Ferreira' />
            <PlayerCard firstname='Alexandre' lastname='Santos' />
            <PlayerCard firstname='Francisco' lastname='Machado' />
        </div>
    );
};

export default PlayersRow;
