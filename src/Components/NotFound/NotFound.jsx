import React, { useEffect } from 'react'
import '../NotFound/NotFound.modules.css'

export default function NotFound({ setCurrentTitle }) {
    useEffect(() => {
        setCurrentTitle('404 Error!')
    }, [])


    return (
        <>
            <div className="notFound d-flex flex-column justify-content-center align-items-center">
                <h1>404 Error! Not Found Page</h1>
                <p className='fw-medium'>Oops! The page you're looking for does not exist.</p>
            </div>
        </>
    )
}
