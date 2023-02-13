import './App.css';
import {Outlet, Link} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <h1>Rawle's Songs</h1>
      <Link to="/signup"><button>Signup</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/logout"><button>Logout</button></Link>

      <Outlet/>
    </div>
  );
}

export default App;
