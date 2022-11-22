import React from 'react'
import {registerSchema} from '../schemas'
import { useFormik } from "formik";
const Register = () => {

const onSubmit=(values)=>{
    console.log(values)
    }
  
const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues:{
        name:"",
        email: "",
        password: "",
      
    },
    onSubmit,
    validationSchema:registerSchema
   
    });
    
    
  
  



  return (
    <>

<div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="text-center mt-3 py-4 bg-primary"> User Register </h2>
            <div className="login mt-5">
              <form onSubmit={handleSubmit} autoComplete="of">
              <div className="mb-3">
                  <label className="form-group">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="enter your name"
                    className="form-control"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
                </div>
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
  )
}

export default Register