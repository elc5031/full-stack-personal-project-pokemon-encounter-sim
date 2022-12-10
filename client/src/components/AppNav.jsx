import axios from 'axios'

const AppNav = ({user}) => {
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
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" >
          PokeSim!
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#/MyPokemon">
                My Pokemon
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/CatchPokemon">
                Catch Pokemon
              </a>
            </li>
            
            
          </ul>
            {/* <div>
                <span style={{color: '#db7b14'}}>{user.email}</span> 
            </div> */}
          
            <button class="btn btn-outline-success my-2 my-sm-0" onClick={signOut}>
              Sign Out
            </button>
          
        </div>
      </nav>
    </div>
  );
};
export default AppNav;
