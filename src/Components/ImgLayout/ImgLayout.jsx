import React from 'react'
import '../ImgLayout/ImgLayout.modules.css'
import snippet from '../../assets/pic1.png'

export default function ImgLayout() {
  return (
    <>
      <div className="outer position-relative">
        <div className="img-layout position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center bg-primary">
          <img src={snippet} alt="Img" />
        </div>
      </div>
    </>
  )
}
