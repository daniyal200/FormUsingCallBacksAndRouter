import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [user,setUser]=useState({firstname:'',lastname:'',username:'',password:''});
  const [userList,setUserList]=useState([]);
  

  const addUser=()=>{
    console.log('function called');
    let flag = false;
    console.log(user)
    console.log(userList.length)
    console.log(userList)
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].username === user.username) {
            alert("Username already exists");
            flag = true;
        }
    }
    console.log(flag);
    if (user.firstname === '' || user.lastname === '' || user.username === '' || user.password ==='') {
        alert("Please enter a value");
    } else {
        if (!flag) {
            console.log('add user...')
            setUserList((prevItems) => {
                return [...prevItems, user];
            });
        }
        alert('You can Login Now');
    }
  }
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='/' element={<Signup user={user} setUser={setUser} addUser={addUser} />}></Route>
          <Route exact path='/login' element={<Login userList={userList} setUser={setUser}/>}></Route>
          <Route exact path='/Welcome' element={<Welcome user={user} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
