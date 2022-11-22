import React,{useContext} from 'react'
import {  useNavigate,  } from "react-router-dom";
import {userContext} from "../App";


const LogOut = () => {
    
const{state , dispatch}=useContext(userContext)
let navigate = useNavigate()

const LogOutUser =()=>{
    localStorage.removeItem('token');
    
     navigate("/login")
     dispatch({type:"USER",payload:false})
}

  return (
    <div><li style={{listStyle:"none"}} className="py-2  px-3" onClick={LogOutUser}>LOGOUT</li></div>
  )
}

export default LogOut