import { Outlet, Link } from "react-router-dom"

export default function Dashboard(props){
    return (
    
    <div>

        <h1> Your Dashboard</h1>
        <Link to="/dashboard/create"><button>Add Song</button></Link>
        <Outlet/>

    </div>

    )
}