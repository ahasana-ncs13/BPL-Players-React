import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

import Players from './components/players/Players'
import { Suspense, useState } from 'react'
import Selected from './components/selected/Selected'


let playersPromise = fetch("./players.json")
.then(res => res.json())

function App() {
  let [toggle ,setToggle]= useState(true)
  let [availableCoin, setAvailableCoin]=useState(60000)
  return (
    <>
  <Navbar availableCoin={availableCoin}></Navbar>
    <Banner></Banner>
    
{/* Available players  */}
<div className="navbar w-11/12 mx-auto mt-15">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Available Players</a>
  </div>
  <div className="flex">
    <button onClick={()=>setToggle(true)} className={`btn rounded-r-[0] border-r-0 ${toggle === true ? "bg-yellow-300":"bg-white"}`}>Available</button>
    <button onClick={()=>setToggle(false)} className={`border-l-0 btn rounded-l-[0] ${toggle === false ? "bg-yellow-300":"bg-white"}`}>Selected <span>(0)</span> </button>

  </div>
</div>
   
   
{
  toggle === true ? <Suspense fallback={<span className="loading loading-dots loading-md mx-20"></span>}>
<Players playersPromise={playersPromise} setAvailableCoin={setAvailableCoin} availableCoin={availableCoin} ></Players>
</Suspense> : 
            <Selected  playersPromise={playersPromise}></Selected>
}
    </>
  )
}

export default App
