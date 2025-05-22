import React from 'react'
import { Link } from 'react-router'
export default function Navbar() {
  return (
    <ul className='flex gap-4'>
  <li><Link to="/calculator">Calc</Link> </li>
  <li><Link to="/Refeg">Reference eg</Link> </li>
  <li><Link to="/task">Task eg</Link></li>
 </ul>
  )
}
