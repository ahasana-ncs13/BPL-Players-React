import React from 'react';
import SelectCard from '../select/SelectCard';

const Selected = ({purchasedPayer}) => {
    // const SelectedpromiseData = use(purchasedPayer)
    console.log(purchasedPayer)
    return (
        <>
        {
       purchasedPayer.map(selectPlayer => 
                <SelectCard key={selectPlayer.id} selectPlayer={selectPlayer}></SelectCard>
                 )
        }

    {/* <button className="btn btn-warning">Add More Player</button> */}

</>
    );
};

export default Selected;