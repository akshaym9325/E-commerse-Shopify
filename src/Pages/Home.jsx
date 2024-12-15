import React from 'react';
import ProductsApi from '../Components/ProductsApi';
import Mobile from "../Images/phone.jpg";
import Laptop from "../Images/laptop.jpg";
import Watch from "../Images/watch.jpg";
import Airpods from "../Images/airpods.jpg";
import Tv from "../Images/tv.jpg";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={Mobile} class="d-block w-100" alt="..." height="800px" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1 className='text-decoration-underline'>Mobile</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={Laptop} class="d-block w-100" alt="..." height="800px" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1 className='text-decoration-underline'>Laptop</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={Watch} class="d-block w-100" alt="..." height="800px" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1 className='text-decoration-underline'>Watch</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={Airpods} class="d-block w-100" alt="..." height="800px" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1 className='text-decoration-underline'>Airpods</h1>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src={Tv} class="d-block w-100" alt="..." height="800px" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h1 className='text-dark text-decoration-underline'>Tv</h1>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ProductsApi />
        </>
    )
}
