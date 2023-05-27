import React from 'react'
import './Introduction.css'
import introImg from '../assets/images/intro.svg'
import Button from './Button'
import Typed from 'react-typed';

const Introduction = () => {
    return (
        <div className='introduction row'>
            <div className="intro-left-side col-12 col-md-6">
                <h6>Next genaretion platform</h6>
                <Typed
                strings={[
                    'Artificial intelligence',
                    '& Syber security']}
                    typeSpeed={40}
                    backSpeed={50}
                   className="typing-effekt"
                    loop >
                    
                </Typed>
                <p>Lorem ipsum is placeholder text commonly used in the graphic,<br/> print, and publishing industries for previewing layouts and <br/> visual mockups.</p>
                <div className="button-groups">
                   <Button butonunIcindekiDeyer="Get started" klassAdi="Sign-in margin-right" />
                   <Button butonunIcindekiDeyer="Watch video" klassAdi="Sign-in" icon={true}/>
                </div>
            </div>
            <div className="intro-right-side col-12 col-md-6">
                <img src={introImg} alt="" className='profile'/>
            </div>
        </div>
    )
}

export default Introduction