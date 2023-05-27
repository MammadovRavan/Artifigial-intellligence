import React, { useRef } from 'react'
import '../App.css'
import './Navbar.css'
import Button from './Button'
import logo from '../assets/images/logo.svg'
import { AiOutlineBars } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";
const Navbar = () => {
const overlayinRefi=useRef()
// overlayinRefi.current

  const menyunuAc = e=> {
if(e.target.classList.contains('menyunuAc')){
  overlayinRefi.current.classList.add('aktiv')
  }
  }
  const menyuBagla=e=>{
    if(e.target.classList.contains('cross-icon')){
      overlayinRefi.current.classList.remove('aktiv')
      }
  }
  return (
    <>
      <div className="overlay" ref={overlayinRefi}>
        {/* <button className='cross-icon'></button> */}
        <GiCrossedSwords  className='cross-icon'onClick={menyuBagla}/>
        <div className="nav-links">
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Services</a>
          <a href=''>Blog</a>
          <a href='mailto:rvanm15@gmail.com'>Contact</a>
        </div>
      </div>
      <div> <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
          <button onClick={menyunuAc} className="navbar-toggler menyunuAc"  >
            <AiOutlineBars className='bars-icon' />

          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white ">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Contact</a>
              </li>
            </ul>
            <Button butonunIcindekiDeyer="Sign in" klassAdi="Sign-in"/>



          </div>
        </div>
      </nav></div>
    </>

  )
}

export default Navbar