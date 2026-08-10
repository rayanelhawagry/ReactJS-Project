import React from 'react'
import './Navbar.modules.css'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container p-4">
                    <NavLink className="navbar-brand text-light text-capitalize" to="">Start Framework</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-light" aria-current="page" to="about">about</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="portfolio">portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-light" to="contact">contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
