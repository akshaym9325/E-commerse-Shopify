import React from 'react';
import phone from "../Images/phone.jpg";
import laptop from "../Images/laptop.jpg";
import watch from "../Images/watch.jpg";
import airpods from "../Images/airpods.jpg";
import tv from "../Images/tv.jpg";

export default function About() {
    return (
        <>
            <div className="container my-3 py-3">
                <h1 className="text-center display-5">About Us</h1>
                <hr />
                <p className="lead text-center">
                    "At "DigitalDelights", our mission is to connect you with the latest in technology and innovation. We offer a wide range of products, from cutting-edge smartphones and high-performance laptops to stylish watches and immersive TVs. Each item in our curated selection is chosen for its quality, functionality, and value, ensuring you receive only the best. <br />
                    Our commitment goes beyond just selling products; we aim to provide an exceptional shopping experience. Our knowledgeable team is always here to assist you, whether you need product recommendations or support with your purchase. We believe in fostering a community of tech enthusiasts and strive to offer exclusive deals and insights into the newest trends.
                     <br />
                    With a focus on customer satisfaction, we are dedicated to making your journey with us as smooth and enjoyable as possible. Explore our diverse range of tech gadgets and discover how "DigitalDelights" can enhance your digital lifestyle. Join us in embracing innovation and stay ahead of the curve with our premium selection and outstanding service."
                </p>

                <h2 className="text-center py-4">Our Products</h2>
                <div className="row justify-content-center">
                    <div className="col-md-4 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={phone} alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center" >Mobile Phones</h5>
                                <p className="card-text text-center">
                                    "Discover the latest smartphones with cutting-edge technology, sleek designs, and unbeatable prices. Shop now for exclusive deals!"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={laptop} alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Laptops</h5>
                                <p className="card-text text-center">"Find top-performing laptops with powerful processors, stunning displays, and sleek designs. Perfect for work, gaming, and entertainment. Shop now!"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={watch} alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Watches</h5>
                                <p className="card-text text-center">"Explore stylish and functional watches with advanced features. Perfect for fitness tracking and staying connected. Shop the latest collections now!"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={airpods} alt="" height={160} />
                            <div className="card-body">
                                <h5 className="card-title text-center">Airpods</h5>
                                <p className="card-text text-center">"Experience premium sound with the latest AirPods. Enjoy wireless freedom, crystal-clear audio, and seamless connectivity. Shop now!"</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-3 px-3">
                        <div className="card h-100">
                            <img className="card-img-top img-fluid" src={tv} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">TV's</h5>
                                <p className="card-text text-center">"Upgrade your home entertainment with our latest TVs. Enjoy vibrant colors, sharp details, and smart features for an immersive viewing experience. Shop today!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
