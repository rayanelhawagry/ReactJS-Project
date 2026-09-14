import React, { useEffect, useState } from 'react'
import '../Portfolio/Portfolio.modules.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'

export default function Portfolio({ setCurrentTitle }) {
    const imgs = [img1, img2, img3, img1, img2, img3]
    const [selectedImg, setSelectedImg] = useState(null)

    useEffect(() => {
        setCurrentTitle('Portfolio')
    }, [])


    return (
        <>
            <div className="portfolio d-flex justify-content-center align-items-start">
                <div className="content d-flex flex-column justify-content-center align-items-center mb-5">
                    <div className="title">
                        <h1 className='text-uppercase fw-bolder my-4'>portfolio component</h1>
                        <div className="starLine d-flex justify-content-center align-items-center gap-3 mb-3">
                            <div className="line"></div>
                            <i className='star fa-solid fa-star'></i>
                            <div className="line"></div>
                        </div>
                    </div>

                    <div className="details">
                        <div className="container d-flex flex-wrap justify-content-center align-items-center gap-5">
                            {imgs.map((img, index) =>
                                <div className="card w-own cursor-pointer position-relative rounded-3" key={index} onClick={() => setSelectedImg(img)}>
                                    <img src={img} alt="Img" className='w-100 rounded-3' />
                                    <div className="layout rounded-3 position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center">
                                        <i className="fa-solid fa-plus fa-6x text-white"></i>
                                    </div>
                                </div>)}
                        </div>
                        {selectedImg &&
                            <div className='selectedImgLayout position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center' onClick={() => setSelectedImg(null)}>
                                <img src={selectedImg} alt="Img" />
                            </div>}
                    </div>
                </div>
            </div>
        </>
    )
}
