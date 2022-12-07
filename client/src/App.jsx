import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn'
import AppNav from './components/AppNav'
import LogIn from './pages/LogIn'
import SignUp2 from './pages/SignUp2'
import SimStart from './pages/SimStart'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser]= useState(null)

  // handle cookies
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
  const csrftoken = getCookie('csrftoken');
  axios.defaults.headers.common["X-CSRFToken"]=csrftoken

  const signOut=async()=>{
    let myResponse=await axios.post('signOut/')
    if (myResponse.data["signout"]==true){
      window.location.reload()
    }
  }

  const curr_user=async()=>{
    let myResponse=await axios.get('current_user')
    let user= myResponse.data && myResponse.data[0] && myResponse.data[0].fields
    setUser(user)
  }
  useEffect(()=>{
    curr_user()
  },[])


  return (
    <div className="App">
      
      {/* <AppNav />
      
      {user && <h1>{user.email}</h1>}
      <div className="card">
      {user && <button onClick={signOut}>Sign Out</button>}
       
      </div> */}
      
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signUp2" element={<SignUp2 />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/SimStart" element={<SimStart user = {user}/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
