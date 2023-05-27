import React from 'react'
import './Awesome.css'
import awesomeImg from '../assets/images/awesome.svg'
const Awesome = () => {
    return (
        <div className='awesome-section row'>
            <div className="left-side text-white col-12 col-md-6 ">
                <h3>What our clients say about <br /> our awesome solutions</h3>
                <p>To take a trivial example, which of us  ever undertakes <br /> laborious physical exercise, except to obtain some <br /> advantage from it who do not know.</p>
                <p>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing .</p>
                <p>Lorem ipsum is placeholder previewing layouts and visual <br /> mockups.</p>
                <p>Lorem ipsum is placeholder text commonly used in the <br /> graphic, print, and publishing industries for previewing <br /> layouts and visual mockups.</p>
            </div>

            <div className="right-side col-12 col-md-6">
                <img src={awesomeImg} alt="" />
            </div>
        </div>
    )
}

export default Awesome