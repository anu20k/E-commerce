import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
// import Navbar1 from './components/Navbar1'
import Men from './components/Men'
// import Mens2 from './components/Mens2'
import Womens from './components/Womens'
import Kids from './components/Kids'
import Electronics from './components/Electronics'
import Beauty from './components/Beauty'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Singleproduct from './components/Singleproduct';
import Womensprodetails from './components/Womensprodetails';
import Kidprodetails from './components/Kidprodetails';
import Beautyprodetails from './components/Beautyprodetails';
import Electronicprodetails from './components/Electronicprodetails';
import Profile from './components/Profile'
import Cartlist from './components/Cartlist';
import Navbar2 from './components/Navbar2';


function App() {

  const [cart, setCart] = useState([])
  
  console.log(cart)

  const addToCart = ( data) => {
    
    setCart([...cart, { ...data, quantity : 1}])
    
  }

  
  
  return (
    <div>
      
    <Router>
      <Routes>
      
        <Route path="/" element={<Home count={cart.length}   />} />
        <Route path="/mens" element={<Men count={cart.length} />} />
        {/* <Route path="/mens" element={<Mens2 count={cart.length} />} /> */}
        <Route path="/womens" element={<Womens count={cart.length}/>} />
        <Route path="/kids" element={<Kids count={cart.length}/>} />
        <Route path="/beauty" element={<Beauty count={cart.length}/>} />
        <Route path="/electronics" element={<Electronics count={cart.length}/>} />
        <Route path="/contact" element={<Contact count={cart.length} />} />
        <Route path="/login" element={<Login count={cart.length}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<Profile count={cart.length}/>} />
        <Route path="/singleproduct/:title" element={<Singleproduct addToCart={addToCart} count={cart.length}/>} />
        <Route path="/womenproduct/:title" element={<Womensprodetails addToCart={addToCart} count={cart.length}/>} />
        <Route path="/kidsproduct/:title" element={<Kidprodetails addToCart={addToCart} count={cart.length}/>} />
        <Route path="/beautyproduct/:title" element={<Beautyprodetails addToCart={addToCart} count={cart.length}/>} />
        <Route path="/electronicproduct/:title" element={<Electronicprodetails addToCart={addToCart} count={cart.length} />} />
        {/* <Route path="/cartlist" element={<Cartlist />} /> */}
        <Route path="/cartlist" element={<Cartlist cart={cart} />} />
        

        
      
      </Routes>
    </Router>
    </div>
  );
}

export default App;
