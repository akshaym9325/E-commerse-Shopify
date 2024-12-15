import React from 'react';
import './Form.css';

export default function Contact() {
    return (
        <>
            <div className="container my-5 py-5 contact-container">
                <h1 className="text-center display-5">Contact Us</h1>
                <hr className="mb-5" />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="Name" className="form-label fw-bold">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className="form-label fw-bold">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="Enter Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Message" className="form-label fw-bold">Message</label>
                                <textarea
                                    rows={5}
                                    className="form-control"
                                    id="Message"
                                    placeholder="Enter Your Message"
                                    required
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn btn-dark px-4 py-2 btn-submit" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

