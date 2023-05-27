import React from 'react'
import './Apply.css'
import ApplyButton from './Button'
import applyImg from '../assets/images/apply.svg'
const Apply = () => {
  return (
   <div className="apply row">
    <div className="apply-left-side col-12 col-md-6">
<img src={applyImg} alt="" />
    </div>
    <div className="apply-right-side col-12 col-md-6">
<h1>Apply AI, Deep Learning <br/> and Data Sciece to solve</h1>
<p>Lorem ipsum is placeholder text commonly used in the <br/> graphic, print, and publishing industries for previewing <br/> layouts and visual mockups.</p>
<ApplyButton klassAdi="Sign-in" butonunIcindekiDeyer="Learn more"/>
    </div>
   </div>
  )
}

export default Apply