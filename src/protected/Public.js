import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
const Public = () => {
    let getToken = localStorage.getItem("token")
    let auth = {'token':getToken}
    return(
        
        auth.token?<Navigate to="/" />:<Outlet />
       
    )
}

export default Public