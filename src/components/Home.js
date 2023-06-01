import React, { useState } from 'react'
import './home.css'
import Sidebar from './Sidebar/Sidebar'
import AddEmployee from './AddEmploye/AddEmployee'


export default function Home() {

    return (              
    <div className='homepage'>
      <Sidebar />
      <AddEmployee />
    </div>
  )
}

