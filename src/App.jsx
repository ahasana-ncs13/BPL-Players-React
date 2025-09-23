import './App.css'
import logoImg from './assets/logo.png'
import heroImg from './assets/banner-main.png'
import heroBG from './assets/bg-shadow.png'

import Players from './components/players/Players'
import { Suspense } from 'react'

let playersPromise = fetch("./players.json")
.then(res => res.json())

function App() {
  return (
    <>
    {/* navbar  */}
<div className="navbar bg-base-100 w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
       <li><a>Teams</a></li>
       <li><a>Schedules</a></li>
      </ul>
    </div>
    <img src={logoImg} alt="" className='w-15 h-15' />
  </div>
  <div className=" navbar-end ">
    <ul className="hidden lg:flex menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Fixture</a></li>
      <li><a>Teams</a></li>
      <li><a>Schedules</a></li>
    </ul>

    <div className="flex justify-between">
    <a className="btn bg-white"> <span>6000000000</span> Coin</a>
  </div>

  </div>
</div>

   {/* banner  */}
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

{/* Available players  */}
<div className="navbar w-11/12 mx-auto mt-15">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Available Players</a>
  </div>
  <div className="flex">
    <button className="btn rounded-r-[0]">Available</button>
    <button className="btn rounded-l-[0]">Selected <span>(0)</span> </button>

  </div>
</div>

<Suspense fallback={<h3>players data are loading</h3>}>
<Players playersPromise={playersPromise}></Players>
</Suspense>
    </>
  )
}

export default App
