import React from 'react'
import './Navbar.modules.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container pt-3 pb-3 d-flex justify-content-between">
                    <div>
                        <NavLink className="navbar-brand text-light fs-2 fw-bolder text-uppercase" to={''}>Start Framework</NavLink>
                    </div>
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ms-2">
                                    <NavLink className="nav-link fs-6 fw-bolder text-uppercase" aria-current="page" to={'about'}>about</NavLink>
                                </li>
                                <li className="nav-item ms-2">
                                    <NavLink className="nav-link fs-6 fw-bolder text-uppercase" to={'portfolio'}>portfolio</NavLink>
                                </li>
                                <li className="nav-item ms-2">
                                    <NavLink className="nav-link fs-6 fw-bolder text-uppercase" to={'contact'}>contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
