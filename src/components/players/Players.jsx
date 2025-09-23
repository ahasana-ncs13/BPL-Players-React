import React, { use } from 'react';
import Player from '../player/Player';
import Selected from '../selected/Selected';


const Players = ({playersPromise,setAvailableCoin,availableCoin}) => {
    const promiseData = use(playersPromise)
    return (
        <>
        <div className='w-11/12 mx-auto grid grid-cols-3 gap-8'>
        {
            promiseData.map(eachPlayer =>
                <Player setAvailableCoin={setAvailableCoin} availableCoin={availableCoin} key={eachPlayer.id} eachPlayer={eachPlayer} ></Player> 
                 )
        }
        </div>

        </>
    );
};

export default Players;