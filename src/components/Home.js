import React from 'react'
import Navbar2 from './Navbar2'
import Caro from './Caro'
import Body from './Body'
import Product from './Product'
import Product1 from './Product1'
import Footer from './Footer'

export default function Home(prop) {
  return (
    <div>
       <Navbar2 count={prop.count} handleShow={prop.handleShow}/>
        <Caro />
        <Body />
        <Product
              img1="../handbag.jpeg"    path1="beauty"
              img2="../watch1.webp"     path2="electronics"
              img3="../beuty.webp"      path3="beauty"
              img4="../h_decor1.webp"   path4="beauty"
            />
            <Product
              img1="../kids1.jpeg"  path1="kids"
              img2="../women.jpeg"  path2="womens"
              img3="../speaker1.jpg" path3="electronics"
              img4="../mens1.jpg"   path4="mens"
            />

            <Product1 />

        
         <Footer />
    </div>
  )
}
