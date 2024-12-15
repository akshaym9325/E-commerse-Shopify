import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {

    const cartItems = useSelector(state => state.cart.cartArray);


    let navbarBottomShadow = {
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top" style={navbarBottomShadow}>
                <div className="container">
                    <Link className="navbar-brand fw-bold fs-3 px-2" to="/">DigitalDelights</Link>
                    <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/product">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fs-5" to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <div className="buttons text-center">
                            <Link to="/login" className="btn btn-success m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</Link>
                            <Link to="/register" className="btn btn-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</Link>
                            <Link to="/cart" className="btn btn-warning m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({cartItems.length})</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
