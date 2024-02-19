import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function Caro() {
  return (
    <div>
      <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-25 p-5 pt-5"
          src="../h4.jpg"
          // src="../images/mens_offer_2.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='text-dark'>
          <h3>Beauty Products</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="../h5.jpg"
          // src="../images/mens_offer_3.jpeg"
          alt="Second slide"
        />

        <Carousel.Caption className='text-dark text-center'>
          <h3>Mens Formal Pants</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25"
          src="../h3.png"
          // src="../images/mens_offer_5.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='text-dark'>
          <h3>Branded footware</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}
