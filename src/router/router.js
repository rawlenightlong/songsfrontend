import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import App from "../App"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Dashboard from "../pages/Dashboard"
import Create from "../pages/create"
import { loginAction, signupAction, logoutAction, createAction } from "./actions"
import { indexLoader } from "./loaders"

const router = createBrowserRouter(createRoutesFromElements(
    <>
    
    <Route path='/' element={<App/>}>
        <Route path='/login' element={<Login/>} action={loginAction}/>
        <Route path='/signup' element={<Signup/>} action={signupAction}/>
        <Route path='/logout' action={logoutAction}/>
        <Route path='/dashboard/' element={<Dashboard/>}>
            <Route path='' element={<h1>Index</h1>} loader={indexLoader}/>
            <Route path='create' element={<Create/>} action={createAction}/>
            <Route path=':id/' element={<h1>Show</h1>}>
                <Route path='update' element={<h1>Update</h1>}/>
                <Route path='delete' element={<h1>Delete</h1>}/>
            </Route>
        </Route>    
    </Route>
    </>
))

export default router