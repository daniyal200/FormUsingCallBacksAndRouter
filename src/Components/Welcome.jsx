import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



export default function Welcome({ user }) {
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.username.length === 0) {
      navigate("/login")
    }
  })
  return (
    <div>
      <nav className='nav'>
        <div className='navx'>
          <h3 className='wel'>{user.username}</h3>
          <h2 className='greet'><Link to="/" className='regg'>Logout</Link></h2>
        </div>
      </nav>


      <div className='details'>
        <h1>
          Current User
        </h1>
        <h2>
          <label>UserName</label><br />
          {user.username}
        </h2>
        <h3>
          <label>FullName</label><br />
          {user.firstname} {user.lastname}
        </h3>
      </div>
    </div>
  )
}
