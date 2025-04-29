import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Component/navbarfiles/Navbar'
import Footer from './Component/footerfiles/Footer'
import Home from './Component/pages/Home'
import About from './Component/pages/About'
import Service from './Component/pages/Service'
import Contact from './Component/pages/Contact'
import Signup from './Component/pages/Signup'
import Login from './Component/pages/Login'
import Cart from './Component/pages/Cart'
import Notfound from './Component/pages/Notfound'
import Search from './Component/pages/Search'
import ProductDetails from './Component/pages/Productdetails'
import { CartProvider } from './Component/context/Cartcontext'
import Shipping from './Component/pages/Shipping'
import Success from './Component/pages/Success'
function App() {


  return (
    <>
    <CartProvider>
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Service/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/product/:id' element={<ProductDetails/>} />
          <Route path='/shipping' element={<Shipping/>} />
          <Route path='/success' element={<Success/>} />
          <Route path='*' element={<Notfound/>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>


    </>
  )
}

export default App
