import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Register from './Pages/Register'
import { Provider } from 'react-redux'
import store from './Redux/store'
import Cart from './Pages/Cart'
import BuyNow from './Pages/BuyNow'

export default function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/product/:id" element={<BuyNow />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </Provider>
        </>
    )
}
