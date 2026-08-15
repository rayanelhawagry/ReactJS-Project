import React, { useEffect } from 'react'
import '../Contact/Contact.modules.css'

export default function Contact({ currentTitle, setCurrentTitle }) {
    useEffect(() => {
        setCurrentTitle('Contact')
    })


    return (
        <>
            <div className="contact d-flex justify-content-center align-items-start">
                <div className="content d-flex flex-column justify-content-center align-items-center mb-5 w-100">
                    <div className="title">
                        <h2 className='text-uppercase fw-bolder mt-4 mb-4 text-center'>contact component</h2>
                        <div className="starLine d-flex justify-content-center align-items-center mb-3">
                            <div className="line me-3"></div>
                            <i className='star fa-solid fa-star'></i>
                            <div className="line ms-3"></div>
                        </div>
                    </div>

                    <div className="form mt-5 w-form-own">
                        <div className='container d-flex justify-content-center align-items-center'>
                            <form className='w-100'>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label fw-medium">Username</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" autoComplete='off' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label fw-medium">Age</label>
                                    <input type="number" className="form-control" id="exampleFormControlInput2" autoComplete='off' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label fw-medium">Email Address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput3" autoComplete='off' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label fw-medium">Password</label>
                                    <input type="password" className="form-control" id="exampleFormControlInput4" autoComplete='off' />
                                </div>
                                <div className="btn d-flex justify-content-center align-items-center">
                                    <button type="button" className="btn btn-warning">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
