import React from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
    return (
        <>
            <div className="container my-5 py-5 contact-container">
                <h1 className="text-center display-5">Register</h1>
                <hr className="mb-5" />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="form-group mb-4">
                                <label htmlFor="Name" className='form-label fw-bold'>Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name" 
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Email" className='form-label fw-bold'>Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="Enter Your Email" 
                                    required
                                />
                            </div>
                            <div className="form-group mb-4">
                                <label htmlFor="Password" className='form-label fw-bold'>Create Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password" 
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <p className='fw-bold'>Already has an account? <Link to="/login" className="text-decoration-underline text-info ms-1">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
