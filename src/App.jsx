import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navbar/Navbar'

import Players from './components/players/Players'
import { Suspense } from 'react'


let playersPromise = fetch("./players.json")
.then(res => res.json())

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    

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

<Suspense fallback={<span className="loading loading-dots loading-md mx-20"></span>}>
<Players playersPromise={playersPromise}></Players>
</Suspense>
    </>
  )
}

export default App
