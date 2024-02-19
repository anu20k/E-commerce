import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiFillDelete } from 'react-icons/ai'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

export default function Cartlist({ cart }) {
  // const [CART, setCART] = useState([])

  //   useEffect(() => {
  //       setCART(cart)
  //       console.log(CART)
  //   }, [cart])
  const [CART, setCART] = useState([])

  useEffect(() => {
    setCART(cart)
  }, [cart])

  return (
    <div>
      <div className="p-5 mt-5">
        <div>
          <Container>
            <Row className="">
              <Col sm={7} className="mb-3">
                {/* <p>TOTAL ITEMS : {cart.quantity}</p> */}
                
                <p>
                 
                  <span className=' border-end border-3 border-dark px-4'>Cart</span>{' '}
                  <span className='px-3'>
                    Items :{' '}
                    {CART.map((item) => item.quantity).reduce(
                      (total, value) => total + value,
                      0,
                    )}
                  </span>
                </p>
                {CART?.map((item, cartindex) => {
                  return (
                    <div className="d-flex flex-row border  ">
                      <section className="p-2 d-flex gap-2 flex-row align-items-center cart-img">
                        <img src={item.img1} className="p-2"></img>
                        <section>
                          <h5>{item.title}</h5>
                          <p>{item.category}</p>
                        </section>
                        <section className="d-flex flex-row">
                          <span>
                            <button
                              className="bg-pink rounded mx-2"
                              onClick={() => {
                                const _CART = CART.map((item1, index) => {
                                  return cartindex === index
                                    ? { ...item1, quantity: item1.quantity - 1 }
                                    : item1
                                })
                                setCART(_CART)
                              }}
                            >
                              -
                            </button>
                          </span>
                          <span>
                            <p>{item.quantity}</p>
                          </span>
                          <span>
                            <button
                              className="bg-pink rounded mx-2"
                              onClick={() => {
                                const _CART = CART.map((item1, index) => {
                                  return cartindex === index
                                    ? { ...item1, quantity: item1.quantity + 1 }
                                    : item1
                                })
                                setCART(_CART)
                              }}
                            >
                              +
                            </button>
                          </span>
                        </section>
                        <p className="fw-bold">{item.price * item.quantity} </p>
                      </section>
                      <AiFillDelete
                        className="float-end mt-3 ms-4"
                        onClick={() => {
                          setCART(
                            CART.filter((proitem) => proitem.id !== item.id),
                          )
                        }}
                      />
                    </div>
                  )
                })}
              </Col>

              <Col sm={4}>
                <h4>Price Details</h4>
              </Col>
            </Row>
          </Container>
        </div>

        {/* {
            CART?.map((item, cartindex)=>{
            return(
              <div>
              <img src={item.img1} />
              <h1>{item.title}</h1>
              <span><button 
              onClick={() =>{
                const _CART = CART.map((item1, index) =>{
                  return cartindex === index ? {...item1, quantity:item1.quantity-1} : item1
                })
                setCART(_CART)
              }}
                    
              >-</button></span>
              <span><h1>{item.quantity}</h1></span>
              <span><button 
                  onClick={() =>{
                    const _CART = CART.map((item1, index) =>{
                      return cartindex === index ? {...item1, quantity:item1.quantity+1} : item1
                    })
                    setCART(_CART)
                  }}
              >+</button></span>
              <h1>{item.price * item.quantity} </h1>
              <button
               onClick={() =>{
                   setCART(CART.filter(proitem => proitem.id !== item.id)
                    )
               }}
               >delete</button>
              
              </div>
            )
          })
         }

         <p>Total
          {
            CART.map(item => item.price * item.quantity).reduce((total, value)=> total +value , 0)
          }
         </p> */}
      </div>
    </div>
  )
}
