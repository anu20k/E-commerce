import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Navbar2 from './Navbar2'
import Footer from './Footer'
import Kidsdata from '../Kidsdata'
import { FiStar } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Kids(prop) {
  const [search, setSearch] = useState('')
  const [img, setImg] = useState('')
  const [data, setData] = useState(Kidsdata)

  const SecondSearch = (e) => {
    const data = e.target.value
    // setImg(data)
  }

  const filterbrand = (catItem) => {
    const result = Kidsdata.filter((curdata) => {
      return curdata.brand === catItem
    })
    setData(result)
  }
  const filterResult = (catItem) => {
    const result = Kidsdata.filter((curdata) => {
      return curdata.category === catItem
    })

    setData(result)
    console.log(result)
  }

  return (
    <div>
      <div>
        <Navbar2 count={prop.count} />
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
                        onClick={() => filterResult('bdress')}
                      />
                      <label className="w-50" htmlFor="english">
                        Boys Dress
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('gdress')}
                      />
                      <label className="w-50" htmlFor="english">
                        Girls Dress
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('foot')}
                      />
                      <label className="w-50" htmlFor="english">
                        Footwere
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('shervani')}
                      />
                      <label className="w-50" htmlFor="english">
                        Shervani
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('western')}
                      />
                      <label className="w-50" htmlFor="english">
                        Western
                      </label>
                      <br></br>

                      {/* <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('tshirt')}
                      />
                      <label className="w-50" htmlFor="english">
                        SHIRTS
                      </label> */}
                      <br></br>
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
                        onClick={() => filterbrand('H&M')}
                      />
                      <label className="w-75" htmlFor="english">
                        H&M
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('maxkids')}
                      />
                      <label className="w-75" htmlFor="english">
                        Max Kids
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('Pantaloons')}
                      />
                      <label className="w-75" htmlFor="english">
                        Pantaloons
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('YK')}
                      />
                      <label className="w-75" htmlFor="english">
                        YK
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('Mothercare')}
                      />
                      <label className="w-75" htmlFor="english">
                        Mothercare
                      </label>
                      <br></br>

                      {/* <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('Rooadster')}
                      />
                      <label className="w-50" htmlFor="english">
                        XXL
                      </label>
                      <br></br> */}
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

            <Col className="mt-5" sm={8}>
              <div className="grid grid-col-4 gap-5">
                {data
                  .filter((item) => {
                    return Object.values(item)
                      .join('')
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  })
                  .map((item) => (
                    <div className="d-flex flex-row ">
                      <div className="lh-1 ">
                        <div className="content product ">
                          <div className="position-relative" key={item.id}>
                            <Link to={`/kidsproduct/${item.title}`}>
                              <img
                                src={item.img1}
                                alt=".."
                                className="w-100"
                              ></img>
                            </Link>
                            <div className="text-on-image  text-secondary align-items-center bg-white  rounded px-1 py-1">
                              <span className="mx-2 fw-bold">
                                {item.rating}
                              </span>
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

            {/* <Col className='mt-5 ' sm={12} lg={8}>
            <div className='d-flex flex-row'>
            <Mensit img1="../images/kid_boy1.jpeg" title="English Navy" />
            <Mensit img1="../images/kid_girl1.jpeg" title="gnn" />
            <Mensit img1="../images/kid_boy2.jpeg" title="fgg" />
            <Mensit img1="../../images/kid_girl2.jpeg" title="gnn" />
            
            </div>
              
               
                <div className='d-flex flex-row mt-5'>
                <Mensit img1="../images/kid_girl6.jpeg" title="English Navy" />
            <Mensit img1="../images/kid_girl4.jpeg" title="gnn" />
            <Mensit img1="../images/kid_boy3.jpeg" title="fgg" />
            <Mensit img1="../images/kid_girl4.jpeg" title="gnn" />
            </div>
                
            <div className='d-flex flex-row'>
            <Mensit img1="../images/kid_girl8.jpeg" title="English Navy" />
            <Mensit img1="../images/kid_sandel5.jpeg" title="gnn" />
            <Mensit img1="../images/kid_boy7.jpeg" title="fgg" />
            <Mensit img1="../images/kid_shooe4.jpeg" title="gnn" />
            
            </div>
              
               
                <div className='d-flex flex-row mt-5'>
                <Mensit img1="../images/kid_sandel1.jpeg" title="fgg"/>
            <Mensit img1="../images/kid_shooe1.jpeg" title="gnn" />
            <Mensit img1="../images/kid_sandel2.jpeg" title="fgg" />
            <Mensit img1="../images/kid_shooe2.jpeg" title="gnn" />
            </div>

            <div className='d-flex flex-row mt-5'>
                <Mensit img1="../images/kid_sandel3.jpeg" title="fgg"/>
            <Mensit img1="../images/kid_girl7.jpeg" title="gnn" />
            <Mensit img1="../images/kid_boy6.jpeg" title="fgg" />
            <Mensit img1="../images/kid_shooe2.jpeg" title="gnn" />
            </div>
                
         
                </Col> */}
          </Row>
        </Container>

        <Footer />
      </div>
    </div>
  )
}
