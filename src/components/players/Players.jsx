import React, { use } from 'react';
import Player from '../player/Player';


const Players = ({playersPromise}) => {
    const promiseData = use(playersPromise)
    return (
        <div className='w-11/12 mx-auto grid grid-cols-3 gap-8'>
        {
            promiseData.map(eachPlayer => <Player key={eachPlayer.id} eachPlayer={eachPlayer} ></Player> )
        }
        </div>
    );
};

export default Players;