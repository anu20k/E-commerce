import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { FiStar } from "react-icons/fi";
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Navbar2 from './Navbar2'
import { Link } from 'react-router-dom'
import Footer from './Footer'

import Electronicdata from '../Electronicdata'

export default function Electronics(prop) {
  const [search, setSearch] = useState('')
  const [img, setImg] = useState('')
  const [data, setData] = useState(Electronicdata)

  const SecondSearch = (e) => {
    const data = e.target.value
    // setImg(data)
  }

  const filterbrand = (catItem) => {
    const result = Electronicdata.filter((curdata) => {
      return curdata.brand === catItem
    })
    setData(result)
  }
  const filterResult = (catItem) => {
    const result = Electronicdata.filter((curdata) => {
      return curdata.category === catItem
    })

    setData(result)
    console.log(result)
  }

  return (
    <div>
      <div>
        <Navbar2 count={prop.count}  />
        {/* <Carousal /> */}
      </div>
      <div className="mt-5 pt-5 px-5 ms-4 text-center justify-content-center">
        <Form className="me-3 d-flex flex-row ms-5 mt-5 w-25 text-center">
          <Form.Control
            type="text"
            placeholder="search for products"
            className="w-100"
            id="form1"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="border-danger w-25 px-2 py-1 bg-pink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </Form>
        <Container className="mt-5">
          <Row className="border-1 mt-5 gap-5">
            <Col className="bg-light text-center mt-5 mb-5" sm={3}>
              <h3 className="mb-3 ">FILTERS</h3>

              <Card>
                <Card.Header className="w-100 fw-bold h5">CATEGORY</Card.Header>
                <Card.Body className="w-100 mb-2 p-3">
                  <Card.Text className="w-100 mb-5 ">
                    <Form className="w-100">
                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('watch')}
                      />
                      <label className="w-50" htmlFor="english">
                        Watches
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('iphone')}
                      />
                      <label className="w-50" htmlFor="english">
                        iphone
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('mobile')}
                      />
                      <label className="w-50" htmlFor="english">
                        Mobiles
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('laptop')}
                      />
                      <label className="w-50" htmlFor="english">
                        Laptops
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('ipad')}
                      />
                      <label className="w-50" htmlFor="english">
                        ipad
                      </label>
                      <br></br>

                      {/* <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                      />
                      <label className="w-50" htmlFor="english">
                        SHIRTS
                      </label>
                      <br></br> */}
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-5">
                <Card.Header className="w-100 fw-bold h5">SIZE</Card.Header>
                <Card.Body className="w-50 mb-2 p-3">
                  <Card.Text className="w-100 mb-5 ">
                    <Form className="w-100">
                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('apple')}
                      />
                      <label className="w-50" htmlFor="english">
                        Apple
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('redmi')}
                      />
                      <label className="w-50" htmlFor="english">
                        Redmi
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('oppo')}
                      />
                      <label className="w-50" htmlFor="english">
                        Oppo
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('titan')}
                      />
                      <label className="w-50" htmlFor="english">
                        Titan
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('dell')}
                      />
                      <label className="w-50" htmlFor="english">
                        Dell
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('hp')}
                      />
                      <label className="w-50" htmlFor="english">
                        HP
                      </label>
                      <br></br>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="mt-5">
                <Card.Header className="w-100 fw-bold h5">PRICE</Card.Header>
                <Card.Body className="w-100">
                  <Card.Text>
                    <ProgressBar now={60} />
                    <div className="d-flex flex-row justify-content-between">
                      <p>$0</p>
                      <p>$1000</p>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col className="" sm={8}>
              <div className="grid grid-col-4 gap-5">
                {data.filter((item) => {
                  return Object.values(item)
                    .join('')
                    .toLowerCase()
                    .includes(search.toLowerCase())
                }).map((item) => (
                  <div className="d-flex flex-row ">
                    <div className="lh-1 ">
                      <div className="content product ">
                        <div className="position-relative" key={item.id}>
                          <Link to={`/electronicproduct/${item.title}`}>
                          <img src={item.img1} alt=".." className="w-100"></img></Link>
                          <div className="text-on-image  text-secondary align-items-center bg-white  rounded px-1 py-1">
                            <span className="mx-2 fw-bold">{item.rating}</span>
                            <span>
                              <FiStar />
                            </span>
                          </div>
                        </div>

                        <div className="content-text hidden"></div>
                      </div>
                      <div className="p-2">
                        <h6>{item.title}</h6>
                        {/* <p>{props.info}</p> */}
                        <h6>Rs.{item.price}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />
      </div>
    </div>
  )
}
