import React,{createContext, useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./MyComponent/Header";
import About from "./MyComponent/About";
import Footer from "./MyComponent/Footer";
import {Route , BrowserRouter, Routes} from "react-router-dom"
import Home from './MyComponent/Home';
import Login  from './pages/Login';
import Protected from './protected/Protected';
import {initialState,reducer} from './reducer/Reducer'
import Register from './pages/Register';
import Public from './protected/Public';
import CostumeTable from './MyComponent/CostumeTable';
export const userContext=createContext()


function App(){
  const [state,dispatch]=useReducer(reducer,initialState)
 
return (
    <>
    
 <BrowserRouter>
 <userContext.Provider value={{state,dispatch}}>
 <Header/>
  <Routes>
   <Route element={<Protected/>}>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
   </Route>
   <Route element={<Public />}>
   <Route exact path='/login' element={<Login/>} />
   <Route exact path='/register'  element={<Register/>}/>
   </Route>
   <Route path='*' exact={true}  element={<h2>Page Not Found</h2>} />
   <Route path='/table' element={<CostumeTable />}></Route>
  </Routes>
  <Footer/>
  </userContext.Provider>
 </BrowserRouter>



      
    </>
  );
}

export default App;
