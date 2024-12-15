import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="container my-5 py-5 contact-container">
                <h1 className="text-center display-5">Login</h1>
                <hr className="mb-5" />
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
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
                                <label htmlFor="Password" className='form-label fw-bold'>Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Enter Password"
                                    required
                                />
                            </div>
                            <div className="my-3">
                                <p className='fw-bold'>New Here? <Link to="/register" className="text-decoration-underline text-info ms-1">Register</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
