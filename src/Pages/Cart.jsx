
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../Redux/slice';

export default function Cart() {

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartArray);
    const total = useSelector((state) => state.cart.total);

    const deleteFromCart=(title)=>{
        dispatch(removeFromCart(title))
    }

    return (
        <>
            <div className="container">
                <div className="row mb-5 mt-3">
                    <div className="col-12">
                        <h2 className="text-center display-5 mt-4">Shopping Cart</h2>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center m-3">
                    {cartItems.length > 0 ? (
                        cartItems.map((product, index) => (
                            <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4 d-flex align-items-stretch">
                                <div className="card h-100 text-center" style={{ height: "500px", width: "400px" }}>
                                    <img src={product.images[3]} className="card-img-top p-3" alt={product.title} height={300} width={300} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">Price: Rs. {product.price}</p>
                                        <p className="card-text">Quantity: {product.qty}</p>
                                        <button
                                            type="button"
                                            className="btn btnApi btn-danger"
                                            onClick={() => {deleteFromCart(product.title)}}
                                        >
                                            Remove From Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12">
                            <div className="alert alert-info text-center" role="alert">
                                Your cart is empty. <Link to="/product" className="alert-link">Continue shopping</Link>.
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="container">
                {cartItems.length > 0 && (
                    <div className="row justify-content-center">
                        <div className="col col-12 d-flex align-items-stretch">
                            <div className="card h-100 text-center" style={{width:"100%"}}>
                                
                                <div className="card-body">
                                    <h5 className="card-title">Cart Summary</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Total Items
                                            <span>{cartItems.length}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Total Price
                                            <span>
                                                Rs.{total}
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="d-grid gap-2 mt-3">
                                        <button type="button" className="btn btn-primary">
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                )}
            </div >
        </>
    );
}

