import React, { useState } from 'react';
import nameImg from '../../assets/Group.png'
import flag from '../../assets/report 1.png'

const Player = ({eachPlayer,setAvailableCoin,availableCoin}) => {
    let [select, setSelect]=useState(false)
    // console.log(eachPlayer)
    return (
        // card 
        <div className='p-5 border border-gray-200 rounded-2xl  '>
        <img src={eachPlayer.image} alt="" className='w-100 h-70 rounded-2xl' />
        <div className="flex items-center gap-4">
        <img src={nameImg} alt="" />
        <h2 className='text-xl font-bold my-4'>{eachPlayer.name}</h2>
        </div>

        <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-gray-200">
            <div className="flex items-center gap-4">
                <img src={flag} alt="" />
            <p className='text-[#131313]/70'>{eachPlayer.country}</p>
            </div>
            <button className='btn'>{eachPlayer.role}</button>
        </div>
        <div className="flex justify-between items-center">
            <span className='font-bold'>Rating</span>
            <h3 className='text-[#131313]/70'>{eachPlayer.rating}</h3>
        </div>
        <div className="flex justify-between items-center mb-3">
            <h3 className='font-bold' >{eachPlayer.battingStyle}</h3>
            <h3 className='text-[#131313]/70'>{eachPlayer.bowlingStyle}</h3>
        </div>
        <div className="flex justify-between items-center">
            <h3 className='font-bold'>Price : $ {eachPlayer.price}</h3>
            <button onClick={
                ()=>{setSelect(true)
                    availableCoin <= eachPlayer.price  ? alert('not enough balance'):
                setAvailableCoin(availableCoin - eachPlayer.price)

                }
            } disabled={select} className='btn bg-white'>{select?"Seleted":"Choose Player"}</button>
        </div>
        </div>
    );
};

export default Player;