import React from 'react'
import './Footer.css'
import gmailImg from '../assets/images/gmail.svg'
import phoneImg from '../assets/images/phone.svg'
import adressImg from '../assets/images/adress.svg'
import artifigial from '../assets/images/artifigial.svg'
import facebookImg from '../assets/images/facebook.svg'
import instagramImg from '../assets/images/instagram.svg'
import twitterImg from '../assets/images/twitter.svg'
import inImg from '../assets/images/in.svg'
import youtubeImg from '../assets/images/youtube.svg'
import globusImg from '../assets/images/globus.svg'
const Footer = () => {
  return (
    <div className='footer-section row'>
      <div className="artigial-intelligence col-12 col-md-6 col-lg-2 ms-auto">
        <img src={artifigial} alt="" className='logo'/>
        <p>Lorem ipsum is placeholder text <br /> commonly used in the graphic, print, and layouts and <br /> visual mockups.</p>
        <div className="gmail text-white">
          <img src={gmailImg} alt="" />
          <h4>Company@gmail.com.com</h4>
        </div>
        <div className="phone text-white">
          <img src={phoneImg} alt="" />
          <h4>Phone: (064) 332-1233</h4>

        </div>
        <div className="adress text-white">
          <img src={adressImg} alt="" />
          <h4>450 Wall Street, USA, New York</h4>

        </div>
      </div>
      <div className="information text-white col-12 col-md-6 col-lg-2 ms-auto">
        <h3>INFORMATION</h3>
        <a href="">New Collection</a>
        <a href="">About Store</a>
        <a href="">Contact Us</a>
        <a href="">Latest News</a>
        <a href="">Our Sitemap</a>
        <a href="">Orders History</a>
      </div>
      <div className="footer-menu text-white col-12 col-md-6 col-lg-2 ms-auto">
        <h3>FOOTER MENU</h3>
        <a href="">Instagram profile</a>
        <a href="">New Collection</a>
        <a href="">Contact Us</a>
        <a href="">Latest News</a>
        <a href="">Terms & Conditions</a>
        <a href="">Purchase Theme</a>
      </div>
      <div className="useful-links text-white col-12 col-md-6 col-lg-2 ms-auto">
        <h3>USEFUL LINKS</h3>
        <a href="">Instagram profile</a>
        <a href="">New Collection</a>
        <a href="">Contact Us</a>
        <a href="">Latest News</a>
        <a href="">Terms & Conditions</a>
        <a href="">Purchase Theme</a>
      </div>
      <div className="about-store text-white col-12 col-md-6 col-lg-2 ms-auto">
       <h3>ABOUT THE STORE</h3>
       <p>Lorem ipsum is placeholder text <br/> commonly used in the graphic, print, and <br/> layouts and visual mockups.</p>
       <h4>www.company.com</h4>
       <div className="contact-img">
        <img src={facebookImg} alt="" />
        <img src={instagramImg} alt="" />
        <img src={twitterImg} alt="" />
        <img src={inImg} alt="" />
        <img src={youtubeImg} alt="" />
       </div>
       <div className="language">
        <img src={globusImg} alt="" />
        <h4>English</h4>
       </div>
      </div>
    </div>
  )
}

export default Footer