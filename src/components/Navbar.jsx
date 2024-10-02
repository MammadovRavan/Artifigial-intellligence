import React, { useRef } from 'react'
import '../App.css'
import './Navbar.css'
import Button from './Button'
import logo from '../assets/images/logo.svg'
import { AiOutlineBars } from "react-icons/ai";
import { GiCrossedSwords } from "react-icons/gi";
// import About from './About'
// import Contact from './Contact'
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
         
        </div>
      </div>
      <div> <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
          <button onClick={menyunuAc} className="navbar-toggler menyunuAc"  >
            <AiOutlineBars className='bars-icon' />

          </button>
          {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
            <Button butonunIcindekiDeyer="Sign in" klassAdi="Sign-in"/>



          </div> */}
        </div>
      </nav>
      </div>
    </>

  )
}

export default Navbar