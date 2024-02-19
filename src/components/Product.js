import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillStarFill } from 'react-icons/bs'

export default function Product(prop) {
  const [changecolor, setChangecolor] = React.useState(false)

  function handlechange(e) {
    e.target.style.backgroundColor = 'pink'
    setChangecolor(true)
  }
  function handledown(e) {
    e.target.style.backgroundColor = '#ffffff'
    setChangecolor(false)
  }
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col col-lg-3 col-sm-6 ">
            <div className="card stylel  mh-100 w-75 text-center shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={prop.img1}
                className="card-img-top w-75 float-center mx-auto d-block"
                alt="..."
              />
              <div className="card-body text-center">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <p className="card-text text-center">
                  <p>
                    Random fashion<br></br>$3,000
                  </p>
                  {/* <button className='border-danger bg-white px-2 py-1 '>VIEW SIMILAR</button> */}
                  <Link to={prop.path1}>
                    <button
                  
                      onMouseEnter={handlechange}
                      onMouseLeave={handledown}
                      className="btn border-danger  px-2 py-1 "
                    >
                      VIEW SIMILAR{' '}
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-3 col-sm-6">
            <div className="card stylel p-2 mh-100 w-75 shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={prop.img2}
                className="card-img-top w-75 h-50 float-center mx-auto d-block"
                alt="..."
              />
              <div className="card-body text-center">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <p className="card-text text-center">
                  <p>
                    Random fashion<br></br>$3,000
                  </p>
                  <Link to={prop.path1}>
                    <button
                      onMouseEnter={handlechange}
                      onMouseLeave={handledown}
                      className="border-danger  px-2 py-1 "
                    >
                      VIEW SIMILAR{' '}
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col col-lg-3 col-sm-6">
            <div className="card stylel col-lg-4 p-2 mh-100 w-75 shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={prop.img3}
                className="card-img-top w-75 h-50 float-center mx-auto d-block"
                alt="..."
              />
              <div className="card-body text-center">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <p className="card-text text-center">
                  <p>
                    Random fashion<br></br>$3,000
                  </p>
                  <Link to={prop.path1}>
                    <button
                      onMouseEnter={handlechange}
                      onMouseLeave={handledown}
                      className="border-danger  px-2 py-1 "
                    >
                      VIEW SIMILAR{' '}
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="col col-lg-3 col-sm-6">
            <div className="card stylel col-lg-4 p-2 mh-100 w-75 shadow-lg p-3 mb-5 bg-body rounded">
              <img
                src={prop.img4}
                className="card-img-top w-75 h-50 float-center mx-auto d-block"
                alt="..."
              />
              <div className="card-body text-center">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
                <p className="card-text text-center">
                  <p>
                    Random fashion<br></br>$3,000
                  </p>
                  <Link to={prop.path1}>
                    <button
                      onMouseEnter={handlechange}
                      onMouseLeave={handledown}
                      className="border-danger  px-2 py-1 "
                    >
                      VIEW SIMILAR{' '}
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
