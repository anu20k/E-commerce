import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';

export default function Login() {

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  })
  const navigate = useNavigate()
  const onSubmit =async (values) => {
    const data= {email:values.email,password:values.password}
    const response=await fetch("http://localhost:5000/loginuser",{
       method:'POST',
       headers:{
        'Content-Type':'application/json'
       },body:JSON.stringify(data) 
    })
    
    const json=await response.json()
    console.log(json)
    
    // console.log(json.success)
    if(!json.success){
       
        alert("Enter valid credeintial")
    }
    if(json.success){
      localStorage.setItem("userEmail",values.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      navigate('/') 
    
  }
    
   }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
    validationSchema,
  })
 
  return (
    <div>

      <div className=" d-flex flex-row justify-content-center align-items-center my-2 bg-white  ">
        <div className=" w-25 py-3 border rounded px-2 mt-2 bg-white shadow-lg">
          <div>
          <div className="text-center ">
            <img src="../login_img.jpg" className="w-50 mt-5 mb-5"></img>
            </div>
            
            <Form onSubmit={formik.handleSubmit} className=" w-100  d-flex flex-column p-4">
              <Form.Group className='mb-3' controlId="formBasicEmail">
                <Form.Label className=' fw-bold'>Enter you Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Enter email"
              ></Form.Control>
               {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className='mb-3'>
                <Form.Label className=' fw-bold'>Enter Password</Form.Label>
                <Form.Control
                  type="text"
                  name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Password"
                 
                ></Form.Control>
                {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              </Form.Group>
              <Button className='mb-3 text-dark' type='submit' style={{background:'#FC89AC', borderBlock:'#FC89AC'}} >Login</Button>
              <p className='text-center'>Don't have an account ? <Link to="/signup" className='text-center fw-bold' style={{textDecoration:'none', color:'black'}}> Register</Link></p>
            </Form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
