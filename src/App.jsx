import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'
import Users from './components/Users'
import Stateeg1 from './components/Stateeg1'
import Stateeg2 from './components/Stateeg2'
import Taskcomponent from './components/Taskcomponent'
import Calc from './components/Calc'
import Refeg from './components/Refeg'
import { Link, Route,Routes } from 'react-router'
import Navbar from './components/Navbar'
import All from './components/courseseg/All'
import CyberSecurity from "./components/courseseg/CyberSecurity"
import Fullstack from "./components/courseseg/Fullstack"
import CourseDetail from './components/courseseg/CourseDetail'
import Destinations from './components/Destinations'
function App() {
   return (
 <>
 <Navbar></Navbar>
 <Routes>
  <Route path = "/destination" element ={<Destinations></Destinations>}></Route>
   <Route path='/CourseDetail' element={<CourseDetail ></CourseDetail>}></Route>
  <Route path="/CyberSecurity" element={<CyberSecurity></CyberSecurity>}></Route>
  <Route path="/Fullstack" element={<Fullstack></Fullstack>}></Route>
   <Route path='/all' element={<All></All>}></Route>
    <Route path='/calculator' element={<Calc></Calc>}></Route>
    <Route path='/Refeg' element={<Refeg></Refeg>}></Route>
    <Route path='/task' element={<Taskcomponent></Taskcomponent>}></Route>
 </Routes>

{/* <Calc></Calc> */}
 {/* <Taskcomponent></Taskcomponent> */}
 
 </>
  )
}

export default App
