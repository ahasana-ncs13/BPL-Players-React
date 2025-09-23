import React from 'react';
import SelectCard from '../select/SelectCard';

const Selected = ({promiseData}) => {
    console.log(promiseData)
    return (
        <>
        {
        promiseData.map(selectPlayer => 
                <SelectCard key={selectPlayer.id} selectPlayer={selectPlayer}></SelectCard>
                 )
        }

    <button className="btn btn-warning">Add More Player</button>

</>
    );
};

export default Selected;