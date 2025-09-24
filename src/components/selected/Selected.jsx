import React from 'react';
import SelectCard from '../select/SelectCard';

const Selected = ({purchasedPayer,removePlayer}) => {
    // const SelectedpromiseData = use(purchasedPayer)
    console.log(purchasedPayer)
    return (
        <>
        {
       purchasedPayer.map(selectPlayer => 
                <SelectCard key={selectPlayer.id} selectPlayer={selectPlayer} purchasedPayer={purchasedPayer} removePlayer={removePlayer}></SelectCard>
                 )
        }

    {/* <button className="btn btn-warning">Add More Player</button> */}

</>
    );
};

export default Selected;