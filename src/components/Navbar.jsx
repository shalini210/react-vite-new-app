import React from 'react'
import { Link } from 'react-router'
export default function Navbar() {
  return (
    <ul className='flex gap-4'>
      <li><Link to="destination">Destinations</Link></li>
  <li><Link to="/all">ALL courses</Link> </li>    
  <li><Link to="/CyberSecurity">CyberSecurity</Link></li>
  <li><Link to="/Fullstack">Fullstack</Link></li>
  <li><Link to="/DataScience">DataScience</Link></li>
  <li><Link to="/Career">Career</Link></li>
  <li><Link to="/calculator">Calc</Link> </li>
  <li><Link to="/Refeg">Reference eg</Link> </li>
  <li><Link to="/task">Task eg</Link></li>
 </ul>
  )
}
