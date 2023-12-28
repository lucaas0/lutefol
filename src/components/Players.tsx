'use client';

import React, { useState } from 'react';
import { PlayersArr } from '@/utils';
import PlayerBanner from './PlayerBanner';
import PlayersRow from './PlayersRow';

const Players = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(PlayersArr[0]);

    return (
        <React.Fragment>
            <PlayersRow
                selectedPlayer={selectedPlayer}
                onPlayerClick={(player) => setSelectedPlayer(player)}
            />
            <hr className='fade-hr' />
            <PlayerBanner player={selectedPlayer} />
        </React.Fragment>
    );
};

export default Players;
