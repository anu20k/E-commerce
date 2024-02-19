import React, { useState , useEffect} from 'react'
import Mensdata from '../Mensdata'
import Navbar2 from './Navbar2'
import { Form } from 'react-bootstrap'
import { FiStar } from 'react-icons/fi'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Link } from 'react-router-dom'

export default function Mens2(prop) {
  
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
 
  const [img, setImg] = useState('')

  const SecondSearch = (e) => {
    const data = e.target.value
    // setImg(data);
  }

  const filterbrand = (catItem) => {
    const result = data.filter((curdata) => {
      return curdata.brand === catItem
    })
    setData(result)
  }
  const filterResult = (catItem) => {
    const result = data.filter((curdata) => {
      return curdata.category === catItem
    })

    setData(result)
    console.log(result)
  }

  
  
  useEffect(()=>{

      fetch('http://localhost:5000/data')
      .then(res =>res.json())
      .then(data1=>setData(data1))
      .catch(err=>console.log(err))
  },[])
  
  

  return (
    <div>
      <div>
        <Navbar2 count={prop.count}/>
        
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
        {/* <Container className="mt-5 py-3"> */}
          <Row className="border-1 mt-5 py-3 gap-5">
            <Col className=" text-center  mb-5" sm={3}>
              <h3 className="mb-3 ">FILTERS</h3>

              <Card>
                <Card.Header className="w-100  bg-pink fw-bold h5">CATEGORY</Card.Header>
                <Card.Body className="w-100 mb-2 p-3">
                  <Card.Text className="w-100 mb-5 ">
                    <Form className="w-100">
                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('tshirt')}
                      />
                      <label className="w-50" htmlFor="english">
                        T-SHIRTS
                      </label>
                      <br></br>

                      <input
                        type="radio"
                          id="english"
                          name="employee"
                          value="english"
                        onClick={() => filterResult('Jeans')}
                      />
                      <label className="w-50" htmlFor="english">
                        JENS
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('formal')}
                      />
                      <label className="w-50" htmlFor="english">
                        Formal
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('shoes')}
                      />
                      <label className="w-50" htmlFor="english">
                        SHOOES
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterResult('jacket')}
                      />
                      <label className="w-50" htmlFor="english">
                        JACKETS
                      </label>
                      <br></br>

                     
                      <br></br>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-5">
                <Card.Header className="w-100 fw-bold h5">BRAND</Card.Header>
                <Card.Body className="w-50 mb-2 p-3">
                  <Card.Text className="w-100 mb-5 ">
                    <Form className="w-100">
                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('Rooadster')}
                      />
                      <label className="w-75" htmlFor="english">
                        Rooadster
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('Raymond')}
                      />
                      <label className="w-75" htmlFor="english">
                        Raymond
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('sparks')}
                      />
                      <label className="w-75" htmlFor="english">
                        Sparks
                      </label>
                      <br></br>

                      <input
                        type="radio"
                          id="english"
                          name="employee"
                          value="english"
                        onClick={() => filterbrand('Adidas')}
                      />
                      <label className="w-75" htmlFor="english">
                      Adidas
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('FABdon')}
                      />
                      <label className="w-75" htmlFor="english">
                        FABdon
                      </label>
                      <br></br>

                      <input
                        type="radio"
                        id="english"
                        name="employee"
                        value="english"
                        onClick={() => filterbrand('max')}
                      />
                      <label className="w-75" htmlFor="english">
                      max
                      </label>
                      <br></br>
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

            <Col className="container" sm={8} xs={4}>
              <div className="grid grid-col-4 ">
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
                           
                          <Link to={`/singleproduct/${item.title}`}>
                            <img
                              src={item.img1}
                              alt=".."
                              className="w-100"
                            ></img></Link>
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

            
          </Row>
        {/* </Container> */}
      </div>
    </div>
  )
}
