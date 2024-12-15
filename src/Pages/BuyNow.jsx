import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/slice';
import { useDispatch, useSelector } from 'react-redux';

export default function BuyNow() {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getapi = async () => {
        const response = await fetch('https://shivraj-chavan.github.io/api/electronics.json');
        const apidata = await response.json();
        setData(apidata);
    };

    useEffect(() => {
        getapi();
    }, []);

    return (
        <>
            {
                data.map((product, index) => {
                    return (
                        <div className="container my-5 py-2 buynow">
                            <div className="row">
                                <div className="col-md-6 col-sm-12 py-3 justify-content-center align-items-center d-flex" key={product.id}>
                                    <img className="img-fluid buynow-img" src={product.images[3]} alt={product.title} width="400px" height="400px" />
                                </div>
                                <div className="col-md-6  py-5">
                                    <h4 className="text-uppercase">{product.category}</h4>
                                    <h1 className="display-5">{product.title}</h1>
                                    <h3 className="display-6  my-4">Rs.{product.price}</h3>
                                    <p className="lead">{product.description}</p>
                                    <button onClick={() => dispatch(addToCart(product))} className="btn btn-warning">
                                        Add to Cart
                                    </button>
                                    <Link to="/cart" className="btn btn-dark mx-3">
                                        Go to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </>
    )
}
