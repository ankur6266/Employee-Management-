import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './EmployeeList.css'
import data from '../../data.json'


export default function EmployeeList() {

    // const [data, setData] = useState(null)

    // useEffect(() => {
    //     axios.get('https://647073633de51400f724471f.mockapi.io/employeelist')
    //     .then((response) => {
    //         setData(response.data);
    //     })
    // }, [])

console.log(data);

  return (
    <div className='EmployeeList'>
      <h3>List Of Employees</h3>
      <table className='employeeTable'>
        <thead>
        {/* <tr className='tableHeading'> */}
          <th>Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
        {/* </tr> */}
        </thead>
        <tbody>
        {data.map(emp => {
          return(
            <tr key={emp.id} className='tableRows'>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.address}</td>
              <td>{emp.phone}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}