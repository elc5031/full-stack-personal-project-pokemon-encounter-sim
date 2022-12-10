import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import LogIn from './pages/LogIn'
import SignUp2 from './pages/SignUp2'
import MyPokemon from './pages/MyPokemon'
import 'bootstrap/dist/css/bootstrap.min.css';
import CatchPokemon from './pages/CatchPokemon';

function App() {
  const [user, setUser]= useState(null)
  const [myPokemon, setMyPokemon] = useState([])

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

  // handle curr user login
  const curr_user = async() => {
    let myResponse = await axios.get('current_user')
    let user = myResponse.data && myResponse.data[0] && myResponse.data[0].fields
    setUser(user)
  }

  // starter pokemon as pikachu
  const firstPoke = async() => {
    let currentPokes = myPokemon
    const pikachuInfo = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
    console.log(myPokemon)
    currentPokes.push(pikachuInfo)
    setMyPokemon(currentPokes)
    console.log(myPokemon)

    let myResponse = await axios.post('addPoke/', {
      'name': pikachuInfo.data.name,
      'poke_id': pikachuInfo.data.id,
      'img_link': pikachuInfo.data.sprites.other['official-artwork'].front_default,
    })
    if(myResponse.data['addpoke']==true){
      console.log('poke added to db')
    }
    else if(myResponse.data['addpoke']=='poke already added'){
      console.log('poke already exists')
    }
    else{
      alert('failed to add poke')
    }
  }

  useEffect(()=>{
    curr_user()
    // firstPoke()
  },[])

  


  return (
    <div className="App">
      
           
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp2" element={<SignUp2 />} />
          <Route path="/MyPokemon" element={<MyPokemon user = {user} myPokemon = {myPokemon}/>} />
          <Route path="/CatchPokemon" element={<CatchPokemon user = {user}/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
