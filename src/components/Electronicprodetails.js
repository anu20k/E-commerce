import React from 'react'
import { useParams } from 'react-router-dom'
import Mensdata from '../Mensdata'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar2 from './Navbar2'
import { FiStar } from 'react-icons/fi'
import { BsFillCartFill } from 'react-icons/bs'
import { BsFillHeartFill } from 'react-icons/bs'
import Kidsdata from '../Kidsdata'
import Electronicdata from '../Electronicdata'

export default function Electronicprodetails({addToCart}) {
  let param = useParams()
  let { title } = param

  const data = Electronicdata.find((item) => item.title === title)

  return (
    <div>
      <div className="mb-5 pb-5">
        <Navbar2 />
      </div>

      <Container>
        <Row className="py-5 ">
          <Col className="text-center py-5">
            <img src={data.img1} className="border border-1  rounded-3 shadow-lg mt-5"/>
          </Col>
          <Col className="py-5 ">
            <h1>{data.title}</h1>
            <p>{data.info}</p>

            <span className="mx-2 fw-bold">{data.rating}</span>
            <span>
              <FiStar />
            </span>
            <hr></hr>
            <span className="fw-bold fs-5 me-3 algin-items-center">
              Rs.{data.price}
            </span>
            <span className="fs-6 algin-items-center">MRP Rs.</span>
            <span className='text-decoration-line-through fs-6 me-3'>{data.mrp}</span> 
             <span className='fw-bold fs-5 textpink'>({data.offer} OFF)</span>
            <h6 className="text-success">inclusive of all taxes</h6>

            <br></br>
            <br></br>
            <button className="border-danger my-3 px-4 bg-pink py-1 lh-lg me-3 gap-1" onClick={()=> addToCart( data)}>
              <BsFillCartFill className="mx-2" />
              ADD TO CART
            </button>
            <button className="border-danger my-3 px-4 bg-pink py-1 lh-lg ">
              <BsFillHeartFill className="mx-2" />
              WACTHLIST
            </button>
            <hr></hr>
            <h5 className="fw-bold">PRODUCT DETAILS</h5>
            <p className="lh-base">
              <b>Name : </b>
              {data.title}
              <br></br>
              <b>Color :</b> Brown<br></br>
              <b>Compatible Models :</b> Modern<br></br>
              <b>Net Quantity (N) :</b> 1<br></br>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
