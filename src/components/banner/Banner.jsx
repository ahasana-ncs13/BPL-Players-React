import React from 'react';
import heroImg from '../../assets/banner-main.png'
import heroBG from '../../assets/bg-shadow.png'

const Banner = () => {
    return (
         <div className=" w-11/12 mx-auto ">
  <div className=" text-center">
    <div className=" bg-[#131313] rounded-3xl py-10" style={{backgroundImage:`url(${heroBG})`,backgroundSize:'cover'}} >
      <img src={heroImg} alt="" className='w-50 mx-auto' />
      <h1 className="text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="py-6 text-white">Beyond Boundaries Beyond Limits</p>
      <button className="btn btn-primary">Claim Free Credit</button>
    </div>
  </div>
        </div>
    );
};

export default Banner;