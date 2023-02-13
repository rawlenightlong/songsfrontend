import url from "./url"
import { redirect } from "react-router-dom"
import headers from "./headers"

export const signupAction = async ({request}) => {
    const formData = await request.formData()
    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + '/auth/signup', {
        method: "post",
        headers,
        body: JSON.stringify(user)
    })

    if (response.status === 400){
        alert("Failed Signup")
        return redirect('/signup')
    }

    return redirect('/login')
}

export const loginAction = async ({request}) => {
    const formData = await request.formData()
    const user = {
        username: formData.get("username"),
        password: formData.get("password")
    }

    const response = await fetch(url + '/auth/login', {
        method: "post",
        headers,
        credentials: "include",
        body: JSON.stringify(user)
    })

    if (response.status === 400){
        alert("Failed login")
        return redirect('/login')
    }

    return redirect('/dashboard')
}

export const logoutAction = async () => {
    
    const response = await fetch(url + '/auth/logout', {
        method: "post"
    })

    if (response.status === 400){
        alert("Failed logout")
        return redirect('/dashboard')
    }

   return redirect('/login')
}

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const song = {
        artist: formData.get("artist"),
        title: formData.get("title")
    }

    const response = await fetch(url + '/songs', {
        method: "post",
        headers,
        credentials: "include",
        body: JSON.stringify(song)
    })

    if (response.status === 400){
        alert("Failed to create")
        return redirect('/dashboard')
    }

    return redirect('/dashboard')
}