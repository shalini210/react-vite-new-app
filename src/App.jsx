import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'
import Users from './components/Users'
import Stateeg1 from './components/Stateeg1'
import Stateeg2 from './components/Stateeg2'
function App() {
 
  return (
 <>
 <Stateeg2></Stateeg2>
 {/* <Stateeg1></Stateeg1> */}
 <h1 className='text-blue-500 text-5xl text-center'>This is react app by vite</h1>
 <div className='flex gap-5 text-center'>
<Users></Users>
 </div>
 </>
  )
}

export default App
