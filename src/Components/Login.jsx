import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../App.css'


export default function Login({userList,setUser}) {
    const [userName,setUserName]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();


    const handleLogin=()=>{
        console.log('login')
        console.log(userList)
        console.log(userName, typeof password)
        let flag=false;
        for(let i=0; i<userList.length ;i++)
        {
            if(userList[i].username===userName && userList[i].password===password)
            { 
                setUser(userList[i]);
                console.log("ok....");
                navigate("/Welcome");
                flag=true;
            }   
            }
            if(!flag)
            {   
                alert("User Not Found")
            }
        }

            

    

    return (
        <div className='Login'>
            <nav className='nav'>
                <h2 className='greet'><Link to="/" className='regg'>Register</Link></h2></nav>
            <section className='form'>
                <div className='reg'>
                    <h1>Login</h1>
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder='UserName' value={userName} onChange={e => setUserName(e.target.value)} />
                    <br />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                    <br />
                    <button onClick={handleLogin}>Login</button>
                    <Link to="/">Register</Link>
                </div>
            </section>
        </div>
    )
}
