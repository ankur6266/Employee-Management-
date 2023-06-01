// This component contains login and register page
import React, { useState } from 'react'
import './Account.css'

export default function Account() {
  const [loggedIn, setLogin] = useState(false)

  return (
    <div className='Account'>
      <h2>{loggedIn ? "LOGIN" : "REGISTER"}</h2>
    <form>
    <div className="loginCard">
        
        {!loggedIn && 
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Full Name" />
            <label htmlFor="floatingPassword">Full Name</label>
        </div>}
        
        {!loggedIn && 
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Empploye ID" />
            <label htmlFor="floatingPassword">Empploye ID</label>
        </div>}

        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="Email Address" />
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
        </div>

        <button type="submit" className="btn btn-primary">{loggedIn ? "Login" : "Register"}</button><br />
        
        <button className="btn text-primary"
          onClick={(e) => {
            e.preventDefault();
            setLogin(!loggedIn)}
          }
        >
          {loggedIn ? <h6>Don't Have Account ? Register Now</h6> : <h6>Already Have An Account ? Login Now</h6>}</button>
        
        </div>
    </form>
    </div>
  )
}
