import './App.css';
import {Outlet, Link, Form} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <h1>Rawle's Songs</h1>
      <Link to="/signup"><button>Signup</button></Link>
      <Link to="/login"><button>Login</button></Link>
      <Form action='/logout' method='post'><button>Logout</button></Form>

      <Outlet/>
    </div>
  );
}

export default App;
