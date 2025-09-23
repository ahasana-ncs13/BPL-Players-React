import React from 'react';
import delImg from '../../assets/Frame.png'

const SelectCard = ({selectPlayer}) => {
    return (
        <div>
<div className=" border border-gray-200 card card-side bg-base-100 shadow-sm w-11/12 mx-auto my-5 p-3">
  <figure>
    <img src={selectPlayer.image} alt="" className='w-30 h-30 rounded-2xl' />
  </figure>
  <div className="card-body ">
    <h2 className="card-title text-lg font-bold">{selectPlayer.name}</h2>
    <p>{selectPlayer.role}</p>
    <div className="card-actions  justify-end">
      <img src={delImg} alt="" />
    </div>
  </div>
</div>
        </div>
    );
};

export default SelectCard;