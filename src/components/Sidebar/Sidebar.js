import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"
// import logo from '../../Images/logo.jpeg'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        {/* <img src={logo} alt='logo'/> */}
      </div>

      <ul className='sidebarMenu'>
        <Link to='/' className='link'>
        <li className='menuItem'>Dashboard</li>
        </Link>
        <Link to='employeeList' className='link'>
        <li className='menuItem'>Employees</li>
        </Link>
        <Link to='addEmployee' className='link'>
        <li className='menuItem'>Add Employee</li>
        </Link>
        <Link className='link'>
        <li className='menuItem'>Settings</li>
        </Link>
      </ul>
    </div>
  )
}
