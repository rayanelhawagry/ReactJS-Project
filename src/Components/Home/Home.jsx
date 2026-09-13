import React, { useEffect } from 'react'
import avatar from '../../assets/avatar.svg'
import '../Home/Home.modules.css'

export default function Home({ setCurrentTitle }) {
    useEffect(() => {
        setCurrentTitle('Home')
    }, [])


    return (
        <>
            <div className='home d-flex justify-content-center align-items-center'>
                <div className="content d-flex flex-column justify-content-center align-items-center">
                    <div className="avatar">
                        <img src={avatar} alt="Avatar" />
                    </div>
                    <h1 className='text-uppercase text-light fw-bolder mt-5 mb-3'>Start Framework</h1>
                    <div className="starLine d-flex justify-content-center align-items-center gap-3 mb-3">
                        <div className="line"></div>
                        <i className='fa-solid fa-star text-light'></i>
                        <div className="line"></div>
                    </div>
                    <p className='text-light'>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
