import React, { use } from 'react';
import SelectCard from '../select/SelectCard';

const Selected = ({playersPromise}) => {
    const SelectedpromiseData = use(playersPromise)
    console.log(SelectedpromiseData)
    return (
        <>
        {
       SelectedpromiseData.map(selectPlayer => 
                <SelectCard key={selectPlayer.id} selectPlayer={selectPlayer}></SelectCard>
                 )
        }

    {/* <button className="btn btn-warning">Add More Player</button> */}

</>
    );
};

export default Selected;