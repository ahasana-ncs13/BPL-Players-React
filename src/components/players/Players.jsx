import React, { use } from 'react';
import Player from '../player/Player';


const Players = ({playersPromise}) => {
    const promiseData = use(playersPromise)
    return (
        <div>
        {
            promiseData.map(eachPlayer => <Player key={eachPlayer.id} eachPlayer={eachPlayer} ></Player> )
        }
        </div>
    );
};

export default Players;