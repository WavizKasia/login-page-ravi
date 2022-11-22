import React, { useContext } from "react";
import axios from 'axios';
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { useNavigate } from "react-router-dom";
import {userContext} from "../App";

const Login = () => {
  
  let navigate=useNavigate()
  const {state , dispatch}=useContext(userContext)
  
 const onSubmit=(values,action)=>{
    axios.post("https://reqres.in/api/login",values).then((Response)=>{
      if(Response && Response.status === 200){
      let token = Response.data.token;
      if(token){
        localStorage.setItem("token",token);
         dispatch({type:"USER", payload:true})
        navigate("/")
      }
      }
    }).catch((Error)=>{
      console.log("error ",Error)
    })

  }

  
 


  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues:{
      email: "",
      password: "",
    
  },
  onSubmit,
 validationSchema:signUpSchema,
  });
  
  




  return (
    <>
  
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center mt-3 py-4 bg-primary"> Login </h2>
            <div className="login mt-5 pt-3">
              <form onSubmit={handleSubmit} autoComplete="of">
                <div className="mb-3">
                  <label className="form-group">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="enter your email"
                    className="form-control"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                </div>
                <div className="mb-3">
                  <label className="form-group">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="enter your password"
                    className="form-control"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                  {errors.password && touched.password ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                   className="form-control bg-success"
                  >Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
