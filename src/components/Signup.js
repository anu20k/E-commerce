import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import * as Yup from 'yup';

export default function Login() {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    
    
    location: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    
  })

  const onSubmit = async (values) => {
    const data = {
      name: values.name,
      email: values.email,
      password: values.password,
      location: values.address,
      phone: values.phone,
    }
    const response = await fetch('http://localhost:5000/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert('Enter valid credeintial')
    }
    formik.resetForm()
    if (json.success) {
      navigate('/login')
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      location: '',
      phone: '',
      password: '',
    },
    onSubmit,
    validationSchema,
  })

  return (
    <div>
      {/* <div className=" border-secondary text-center p-5"> */}
      <div className=" d-flex flex-row justify-content-center align-items-center my-2 bg-white ">
        <div className=" w-25 py-3 border rounded px-2 mt-5 bg-white shadow-lg ">
          <div >
            <div className="text-center">
            <img src="../login_img.jpg" className="w-50 mt-2 mb-5"></img>
            </div>
            {/* <div className='w-50 text-center'> */}
            <Form
              onSubmit={formik.handleSubmit}
              className=" w-100  d-flex flex-column  p-4"
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className=' fw-bold'>Enter you Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  placeholder="Enter name"
                ></Form.Control>
                {formik.touched.name && formik.errors.name ? (
                  <div className="error">{formik.errors.name}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
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

              <Form.Group className="mb-3" controlId="formBasiclocation">
                <Form.Label className=' fw-bold'>Enter you Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                  placeholder="Enter location"
                ></Form.Control>
                {formik.touched.location && formik.errors.location ? (
                  <div className="error">{formik.errors.location}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicphone">
                <Form.Label className=' fw-bold'>Enter you Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                  placeholder="Enter phone"
                ></Form.Control>
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="error">{formik.errors.phone}</div>
                ) : null}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicphone">
                <Form.Label className=' fw-bold'>Enter you Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Enter password"
                ></Form.Control>
                {formik.touched.password && formik.errors.password ? (
                  <div className="error">{formik.errors.password}</div>
                ) : null}
              </Form.Group>

              <Button className="mb-3 border-none text-dark" style={{background:'#FC89AC', borderBlock:'#FC89AC'}} type="submit">
                Submit
              </Button >
              <p className='text-center'>Already User ? <Link to="/login" className='text-center fw-bold' style={{textDecoration:'none', color:'black'}}> Login</Link></p>
              
            </Form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
