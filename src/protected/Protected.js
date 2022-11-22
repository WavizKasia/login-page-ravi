import { Navigate, Outlet } from 'react-router-dom'
const Protected = () => {
    let getToken = localStorage.getItem("token")
    let auth = {'token':getToken}
    return(
        
        auth.token? <Outlet />:<Navigate to="/login" /> 
       
    )
}
export default Protected;