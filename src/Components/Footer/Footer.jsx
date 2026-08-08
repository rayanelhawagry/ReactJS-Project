import React from 'react'
import './Footer.modules.css'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="top overflow-auto">
                    <div className="container d-flex justify-content-around text-center text-light mt-5 mb-5">
                        <div className='section'>
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                        <div className='section'>
                            <h3>AROUND THE WEB</h3>
                            <div className="icons">
                                <i className='fa-brands fa-facebook mx-1 icon'></i>
                                <i className='fa-brands fa-twitter mx-1 icon'></i>
                                <i className='fa-brands fa-linkedin-in mx-1 icon'></i>
                                <i className='fa-solid fa-globe mx-1 icon'></i>
                            </div>
                        </div>

                        <div className='section'>
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Rayan</p>
                        </div>
                    </div>
                </div>
                <div className="bottom p-3">
                    <p className='text-light text-center'>Copyright © Rayan 2026</p>
                </div>
            </footer>
        </>
    )
}
