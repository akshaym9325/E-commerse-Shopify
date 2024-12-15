import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <footer className="mb-0 text-center">
                <div className="d-flex align-items-center justify-content-center pb-5">
                    <div className="col-md-6">
                        <p className="mb-3 mb-md-0">Made with 🧡❤️🧡 by {" "}
                            <Link className="text-decoration-none text-dark fs-5" to="/" rel="noreferrer">Akshay Mandhare</Link>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}
