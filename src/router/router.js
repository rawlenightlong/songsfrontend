import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path='/' element={<App/>}>
        <Route path='/login' element={<h1>Login</h1>}/>
        <Route path='/signup' element={<h1>Signup</h1>}/>
        <Route path='/logout' element={<h1>Logout</h1>}/>
        <Route path='/dashboard/' element={<h1>Dashboard</h1>}>
            <Route path='' element={<h1>Index</h1>}/>
            <Route path='create' element={<h1>Create</h1>}/>
            <Route path=':id/' element={<h1>Show</h1>}>
                <Route path='update' element={<h1>Update</h1>}/>
                <Route path='delete' element={<h1>Delete</h1>}/>
            </Route>
        </Route>    
    </Route>
    </>
))

export default router