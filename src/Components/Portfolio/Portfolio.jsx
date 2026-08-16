import React, { useEffect, useState } from 'react'
import '../Portfolio/Portfolio.modules.css'
import picOne from '../../assets/pic1.png'
import picTwo from '../../assets/pic2.png'
import picThree from '../../assets/pic3.png'

export default function Portfolio({ currentTitle, setCurrentTitle }) {
    const [img, setImg] = useState('')

    useEffect(() => {
        setCurrentTitle('Portfolio')
    }, [])

    function clickImg(img) {
        console.log('Clicked! ', img);
        setImg(img)
        console.log(img);
    }


    return (
        <>
            <div className="portfolio d-flex justify-content-center align-items-start">
                <div className="content d-flex flex-column justify-content-center align-items-center">
                    <div className="title">
                        <h2 className='text-uppercase fw-bolder mt-4 mb-4 text-center'>portfolio component</h2>
                        <div className="starLine d-flex justify-content-center align-items-center mb-3">
                            <div className="line me-3"></div>
                            <i className='star fa-solid fa-star'></i>
                            <div className="line ms-3"></div>
                        </div>
                    </div>

                    <div className="details">
                        <div className="container d-flex flex-wrap justify-content-center align-items-center">
                            <div className="outer-card w-own p-24 mb-48">
                                <div className="inner-card cursor-pointer position-relative" onClick={() => clickImg(picOne)}>
                                    <div className="layout rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-layout d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                    <img src={picOne} className='rounded-3' alt="Pic one" />
                                </div>
                            </div>
                            <div className="outer-card w-own p-24 mb-48">
                                <div className="inner-card cursor-pointer position-relative" onClick={() => clickImg(picTwo)}>
                                    <div className="layout rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-layout d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                    <img src={picTwo} className='rounded-3' alt="Pic two" />
                                </div>
                            </div>
                            <div className="outer-card w-own p-24 mb-48">
                                <div className="inner-card cursor-pointer position-relative" onClick={() => clickImg(picThree)}>
                                    <div className="layout rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-layout d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                    <img src={picThree} className='rounded-3' alt="Pic three" />
                                </div>
                            </div>
                            <div className="outer-card w-own p-24 mb-48">
                                <div className="inner-card cursor-pointer position-relative" onClick={() => clickImg(picOne)}>
                                    <div className="layout rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-layout d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                    <img src={picOne} className='rounded-3' alt="Pic one" />
                                </div>
                            </div>
                            <div className="outer-card w-own p-24 mb-48">
                                <div className="inner-card cursor-pointer position-relative" onClick={() => clickImg(picTwo)}>
                                    <div className="layout rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-layout d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                    <img src={picTwo} className='rounded-3' alt="Pic two" />
                                </div>
                            </div>
                            <div className="outer-card w-own p-24 mb-48">
                                <div className="inner-card cursor-pointer position-relative" onClick={() => clickImg(picThree)}>
                                    <div className="layout rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-layout d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                    <img src={picThree} className='rounded-3' alt="Pic three" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
