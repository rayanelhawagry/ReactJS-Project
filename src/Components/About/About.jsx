import React, { useEffect } from 'react'
import '../About/About.modules.css'

export default function About({ setCurrentTitle }) {
    useEffect(() => {
        setCurrentTitle('About')
    }, [])


    return (
        <>
            <div className="about d-flex justify-content-center align-items-center">
                <div className="content d-flex flex-column justify-content-center align-items-center">
                    <div className="title">
                        <h1 className='text-uppercase text-light fw-bolder mt-5 mb-3'>about component</h1>
                        <div className="starLine d-flex justify-content-center align-items-center gap-3 mb-3">
                            <div className="line"></div>
                            <i className='fa-solid fa-star text-light'></i>
                            <div className="line"></div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="container d-md-flex justify-content-between gap-4">
                            <p className='text-light'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            <p className='text-light'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
