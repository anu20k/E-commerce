import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'

export default function Body() {
  const [changecolor, setChangecolor] = React.useState(false)
  const [isHover, setIsHover] = useState(false)

  function handleMouseEnter(e) {
    // e.target.style.backgroundColor="red";

    setIsHover(true)
  }

  function handleMouseLeave(e) {
    // e.target.style.backgroundColor="none";

    setIsHover(false)
  }
  // const boxStyle = {
  //    //...
  //    opacity:isHover ? '0.75' : '1',

  // };

  function handlechange() {
    setChangecolor(!changecolor)
  }

  return (
    <div>
      <div className="container d-flex mt-5  flex-row">
        <img src="../images/sty_women.jpg" className="w-50"></img>
        <Card className="w-100 d-block float-start mt-lg-5">
          <Card.Body className=''>
            <h5 className=" display-6 fs-2 ">
              STYLISH <b> WOMENS</b>
            </h5>
            <h6 className="mb-2 display-6 fs-2 ">
              <b>PRODUCT</b> COLLECTION
            </h6>
          </Card.Body>
        </Card>
      </div>
      <div className="container d-flex mt-5  flex-row">
        
          <Card className="w-100 d-block float-end mt-lg-5">
            <Card.Body >
              <h5 className=" display-6 fs-2">
                STYLISH <b> MENS</b>
              </h5>
              <h6 className=" mb-2 display-6 fs-2">
                <b>PRODUCT</b> COLLECTION
              </h6>
            </Card.Body>
          </Card>
        
        <img src="../images/sty_men.jpg" className="w-50"></img>
      </div>
      {/* <div className=" container  d-flex flex-row mt-5 mb-5">
        <img src="../images/sty_women.jpg" className="w-50 mt-3 " alt=".." />

        <div className="mt-5 w-50 mt-5 h-lg-auto h-sm-auto  d-block  float-start">
          <div className="card mt-5">
            <div className="card-body ms-4 ">
              <h5 className="card-title display-6 fs-2 ">
                TYLISH <b> WOMENS</b>
              </h5>
              <h6 className="card-title mb-2 display-6 fs-2 ">
                <b>PRODUCT</b> COLLECTION
              </h6>

              <button
                onMouseMove={handlechange}
                className={`border-danger mt-3 px-2 py-1 ${
                  changecolor === true ? 'bg-pink' : 'bg-white'
                }`}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex flex-row">
        <div className="mt-5 w-50 mt-5 h-auto  d-block">
          <div className="card mt-5">
            <div className="card-body ms-4 float-end">
              <h5 className="card-title display-6 fs-2 ">
                TYLISH <b> MENS</b>
              </h5>
              <h6 className="card-title mb-2 display-6 fs-2">
                <b>PRODUCT</b> COLLECTION
              </h6>
              <button
                onMouseMove={handlechange}
                className={`border-danger mt-3 px-2 py-1 ${
                  changecolor === true ? 'bg-pink' : 'bg-white'
                }`}
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="w-50">
          <img src="../images/sty_men.jpg" className=" mt-5 w-100" alt=".." />
        </div>
      </div> */}
      {/* new collection */}
      <div>
        <div className="container ">
          <h1 className="text-center display-6 fs-3 p-5">
            <b>NEW COLLECTION</b>
          </h1>
        </div>
        <div className="container-fluid  bg-light">
          <div className="row">
            <div className="col d-flex flex-row  border-secondary rounded shadow-lg p-3 mb-5 bg-body rounded">
              <img src="../headphone1.jpg" className="w-50 p-3 " alt="..." />
              <div className="container mt-3">
                {/* <button className='border-danger bg-white px-2 py-1 '>NEW</button> */}
                <h3 className="mt-3">
                  <b>NEW</b> BRAND
                </h3>
                <ol>
                  <li>50% OFF</li>
                  <li>BLACKCOLOR</li>
                  <li>100% GAREENTY</li>
                </ol>
                <button
                  onMouseMove={handlechange}
                  className={`border-dangerpx-2 py-1 ${
                    changecolor === true ? 'bg-pink' : 'bg-white'
                  }`}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className=" col d-flex flex-row  border-secondary rounded shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src="../new_c1.jpg"
                className="w-50 p-3 back_remove"
                alt="..."
              />
              <div className="container mt-3">
                {/* <button className='border-danger bg-white px-2 py-1 '>NEW</button> */}
                <h3 className="mt-3">
                  <b>NEW</b> FASHION
                </h3>
                <ol>
                  <li>100% COTTON</li>
                  <li>FRESS PRODUCT</li>
                  <li>BLACK COLOR</li>
                </ol>
                <button
                  onMouseMove={handlechange}
                  className={`border-dangerpx-2 py-1 ${
                    changecolor === true ? 'bg-pink' : 'bg-white'
                  }`}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
            <div className="col d-flex flex-row  border-secondary rounded shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src="../watch1.webp"
                className="w-50 p-3 back_remove"
                alt="..."
              />
              <div className="container mt-3 ">
                {/* <button className='border-danger bg-white px-2 py-1 '>NEW</button> */}
                <h3 className="mt-3">
                  <b>NEW</b> MODEL
                </h3>
                <ol>
                  <li>50% OFF</li>
                  <li>WATERPROOPF</li>
                  <li>100% GAREENTY</li>
                </ol>
                <button
                  onMouseMove={handlechange}
                  className={`border-dangerpx-2 py-1 ${
                    changecolor === true ? 'bg-pink' : 'bg-white'
                  }`}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* all products */}
      <div className="container ">
        <h1 className="text-center display-6 fs-3 mt-5">
          <b>ALL PRODUCTS</b>
        </h1>
      </div>
    </div>
  )
}
