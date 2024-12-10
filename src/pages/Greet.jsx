import React from 'react'
import img404 from '../assets/images/404.png'
import '../styles/Greet.css'
import SocialMediaLinks from './SocialMediaLinks ';

const Greet = () => {
  return (
    <div className='greeting'>
      <div className="greeting_item">
        <h1 style={{ fontFamily: "CustomFont, sans-serif" }}>SURAJ MS</h1>
        <p>A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.</p>
        <SocialMediaLinks />
        <div className="star_me"><ion-icon name="star-outline"></ion-icon> Star Me On GitHub</div>
      </div>

      <div className='greet_img greeting_item'>
        <img src={img404} alt="Programming Icon" width="80%" height="80%" />

      </div>


    </div>
  )
}

export default Greet