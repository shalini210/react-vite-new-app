import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'
import i1 from "./assets/images/i1.jpg"
import i2 from "./assets/images/i2.png"
import i3 from "./assets/images/i3.jpg"
function App() {
 
  return (
 <>
 <h1 className='text-blue-500 text-5xl text-center'>This is react app by vite</h1>
 <div className='flex gap-5 text-center'>
 <User photo={i1} name="John Capner" contactno="987987997"></User>
 <User photo={i2} name="Ron " contactno="994541527"></User>
 <User photo={i3} name="Maria " contactno="798512135"></User>
 </div>
 </>
  )
}

export default App
