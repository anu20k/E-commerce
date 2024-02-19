import React , {useState} from 'react'

export default function Product1() {

    const [changecolor, setChangecolor]= React.useState(false)

  function handlechange(){
    setChangecolor(!changecolor)
  }
  return (
    <div>
      <div className="container-fluid row">
        <div className="col col-lg-6 col-sm-12 ">
          <div
            style={{
              backgroundImage: `url("../sale1.jpg")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="w-100 p-5 text-white"
          >
            <div className="p-5 d-flex flex-column align-item-center text-center">
              <h1 className="display-4 fw-bold float-end">SALE</h1>
              <p className="float-end display-6">UP TO 30% OFF</p>
              <p className="float-end display-6">MENS BEST PRODUCTS</p>
            </div>
          </div>
        </div>

        <div className="col col-lg-6 col-sm-12">
          <div
            style={{
              backgroundImage: `url("../SALE2.jpg")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="w-100 p-5  d-flex flex-column text-white align-items-center "
          >
            <div className="p-5 d-flex flex-column align-item-center text-center">
              <h1 className="display-4 fw-bold float-end">SALE</h1>
              <p className="float-end display-6">UP TO 30% OFF</p>
              <p className="float-end display-6">WOMENS BEST PRODUCTS</p>
            </div>
          </div>
        </div>
      </div>

      {/* TO VIEW ALL PRODUCTS */}

      <div className="container bg-color mt-5 p-4 mb-4">
        <h2>TO VIEW ALL PRODUCTS TOGETHER !!</h2>
        <div className='d-flex flex-row'>
        <p className='w-75 mt-1'>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form. There are many
          variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form
        </p>
        <button  onMouseMove={handlechange} className={`border-danger btn px-2 py-1 ${(changecolor === true)? 'bg-pink' : 'bg-white'}`} >VIEW ALL</button>
        </div>
        
      </div>
    </div>
  )
}
