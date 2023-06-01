 // This component contains login and register page
import axios from 'axios';
import React, { useState } from 'react'
import './AddEmployee.css'

export default function AddEmployee() {
  const [loggedIn, setLogin] = useState(false)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")

  const [emplployee, setEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setEmployee(prev => {
      return {
        ...prev, 
        [name]: value
      }
    })
  }


  const addEmployee = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/add', emplployee,
      { headers: {
        'content-type': 'text/json'
    }}
    )
    .then(response => console.log(response))
    .catch(err => console.log(err))
    
  }

  return (
    <div className='AddEmployee'>
      <h2>Add Employee</h2>
    <form>
    <div className="loginCard">

        <div className="form-floating">
            <input type="text" name='name' className="form-control" id="floatingPassword" placeholder="Full Name" 
            value={emplployee.name}
            onChange={handleChange}/>
            <label htmlFor="floatingPassword">Full Name</label>
        </div>
        
        <div className="form-floating mb-3">
            <input type="email" name='email' className="form-control" id="floatingInput" placeholder="Email Address" 
            value={emplployee.email}
            onChange={handleChange}/>
            <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
            <input type="text" name='address' className="form-control" id="floatingPassword" placeholder="Address" 
            value={emplployee.address}
            onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Address</label>
        </div>

        <div className="form-floating">
            <input type="text" name='phone' className="form-control" id="floatingPassword" placeholder="Phone No" 
            value={emplployee.phone}
            onChange={handleChange}
            />
            <label htmlFor="floatingPassword">Phone No</label>
        </div>


        <button onClick={addEmployee} type="submit" className="btn btn-primary">Add Employee</button>
        
        </div>
    </form>
    </div>
  )
}
