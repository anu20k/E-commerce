import React from 'react'
import Navbar2 from './Navbar2'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Footer from './Footer'

export default function Contact() {
  return (
    <div>
      <div>
        <Navbar2 />
      </div>
      <div className="text-center justify-content-center py-4">
        <h3 className="mb-4">QUICK CONTACT</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d484065.011498418!2d73.2738852928695!3d18.5849503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe5ddb78433%3A0x9ffc078dceb84bd1!2sInternational%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1676615030447!5m2!1sen!2sin"
          // width="600"
          height="400"
          className="w-100 mb-5"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-center d-flex flex-column justify-content-center border rounded shadow-lg p-2 bg-body mx-5">
          <h2>CONTACT US</h2>

          <Form
            className="w-100 p-3"
            action="https://formspree.io/f/mqkoqzrq"
            method="POST"
          >
            <Form.Group
              className="mb-3 d-flex flex-row gap-2"
              controlId="formBasicPassword"
            >
              <Form.Label className="w-25 text-center">Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                className="w-50"
                name="Name"
                autoComplete="off"
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-row gap-2"
              controlId="formBasicEmail"
            >
              <Form.Label className="w-25 text-center">
                Email address:
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="w-50"
                name="Email"
                autoComplete="off"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex flex-row gap-2"
              controlId="formBasicEmail"
            >
              
              <Form.Label className="w-25 text-center">Message:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter Message"
                className="w-50"
                name="Message"
                autoComplete="off"
                required
              />
            </Form.Group>

            <Button variant="success" type="submit">
              SEND
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
