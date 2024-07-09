import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
          <h1>FoodZone</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eligendi adipisci optio mollitia aspernatur, tempore aliquid sed laborum dicta, quod, sequi ut!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
          <a href="/">Home</a>
        <a href='#explore-menu' >Menu</a>
        <a href='#app-download' >Mobile-app</a>
        <a href='#footer' >Contact us</a>
        </ul>
        </div>

        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
          <li>+1-232-423-532</li>
          <li>bibashchaudhary@gmail.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 FoodZone.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
