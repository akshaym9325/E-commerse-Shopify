import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/slice';
import "./ProductsApi.css";

export default function ProductsApi() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const dispatch = useDispatch();
    // const cart = useSelector((state) => state.cart.cartArray);

    const getapi = async () => {
        // const response = await fetch('https://fakestoreapi.com/products/');
        const response = await fetch('https://shivraj-chavan.github.io/api/electronics.json');
        const apidata = await response.json();
        setData(apidata);
        setFilter(apidata);
    };

    useEffect(() => {
        getapi();
    }, []);

    const descriptionLength = 100;

    const formatDescription = (description) => {
        const desc = String(description);
        if (desc.length > descriptionLength) {
            return desc.substring(0, descriptionLength) + '...';
        } else {
            return desc.padEnd(descriptionLength, ' ');
        }
    }

    const filterProduct = (category) => {
        const updatedList = data.filter((item) => item.category === category);
        setFilter(updatedList);
    };

    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-5 text-center">Latest Products</h2>
                        <hr />
                    </div>
                </div>
                <div className="buttons text-center py-5">
                    <button onClick={() => setFilter(data)} className="btn btn-outline-dark btn-sm m-2" >All</button>
                    <button onClick={() => filterProduct("mobile")} className="btn btn-outline-dark btn-sm m-2" >Mobiles</button>
                    <button onClick={() => filterProduct("laptop")} className="btn btn-outline-dark btn-sm m-2" >Laptops</button>
                    <button onClick={() => filterProduct("watch")} className="btn btn-outline-dark btn-sm m-2" >Watches</button>
                    <button onClick={() => filterProduct("airdopes")} className="btn btn-outline-dark btn-sm m-2" >Airpods</button>
                    <button onClick={() => filterProduct("tv")} className="btn btn-outline-dark btn-sm m-2" >TV's</button>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {
                        filter.map((product, index) => {
                            return (
                                <div id={product.id} key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4 d-flex align-items-stretch">
                                    <div className="card text-center h-100 product-card" style={{ height: "500px", width: "500px" }}>
                                        <img className="card-img-top p-3 product-img" src={product.thumbnail} alt={product.title} height={300} width={300} />
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title text-primary">{product.title}</h5>
                                            <p className="card-text">{formatDescription(product.description)}</p>
                                            <div className="mt-auto">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item lead ">Rs. {product.price}</li>
                                                </ul>
                                                <div className="card-body">
                                                    <Link to={"/product/" + product.id} className="btn btnApi btn-successApi m-1">Buy Now</Link>

                                                    <button className="btn btnApi btn-warningApi m-1" onClick={() => {
                                                        dispatch(addToCart(product));
                                                    }}>
                                                        Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
}

