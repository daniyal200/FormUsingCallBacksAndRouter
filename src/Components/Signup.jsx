import React from 'react'
import { Link } from "react-router-dom";
import '../App.css'



export default function Signup({user,setUser,addUser}) {

    return (
        <div>
            <nav className='nav'> 
            <h2 className='greet'><Link to="/login" className='regg'>Login</Link></h2></nav>
            <div className="reg">
                <h1>Register</h1>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='First Name' value={user.firstname} onChange={e => setUser({ firstname: e.target.value, lastname: user.lastname, username: user.username, password: user.password })} />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Last Name' value={user.lastname} onChange={e => setUser({ firstname: user.firstname, lastname: e.target.value, username: user.username, password: user.password })} />
                <label htmlFor="">UserName</label>
                <input type="text" placeholder='UserName' value={user.username} onChange={e => setUser({ firstname: user.firstname, lastname: user.lastname, username: e.target.value, password: user.password })} />
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password' value={user.password} onChange={e => setUser({ firstname: user.firstname, lastname: user.lastname, username: user.username, password: e.target.value })} />
                <br />
                <button onClick={addUser}>Register</button>
                <Link to="/login">Login</Link>
            </div>
        </div>
    )
}
