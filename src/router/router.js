import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import { loginAction, signupAction, logoutAction } from "./actions"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path='/' element={<App/>}>
        <Route path='/login' element={<Login/>} action={loginAction}/>
        <Route path='/signup' element={<Signup/>} action={signupAction}/>
        <Route path='/logout' action={logoutAction}/>
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