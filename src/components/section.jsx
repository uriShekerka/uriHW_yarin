import React from 'react'
import "./section.css"

const Section = () => {
  return (
    <div className='section d-flex flex-end col-lg-12 col-md-12 col-sm-12' >
        <div className='section-father col-lg-12 col-md-12 col-sm-12'>
        <div className='h1 col-lg-12 col-md-12 col-sm-12'><h1>כרטיס המתנה שלך</h1></div>
        <div><h2>Make Your Loved One, Smile</h2></div>
       <div className='gift'> <img src="gift card.webp" alt="" /></div>
       <div><h5>SHOP NOW</h5></div>
       </div>
    </div>
  )
}

export default Section