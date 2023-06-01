import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
import logo from '../../Images/logo.jpeg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={logo} alt='logo'/>
      </div>

      <ul className='sidebarMenu'>
        <Link to='addEmployee' className='link'>
        <li className='menuItem'>Dashboard</li>
        </Link>
        <Link className='link'>
        <li className='menuItem'>Dashboard</li>
        </Link>
        <Link className='link'>
        <li className='menuItem'>Dashboard</li>
        </Link>
        <Link className='link'>
        <li className='menuItem'>Dashboard</li>
        </Link>
      </ul>
    </div>
  )
}
