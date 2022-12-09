import React from 'react'
import axios from 'axios'

function SimStart({user}) {
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
      window.location.href="/"
    }
  }

  return (
    <>
    <div>{user.email} logged in</div>
    <div className="card">
      {user && <button onClick={signOut}>Sign Out</button>}
       
    </div>
    </>
  )
}

export default SimStart