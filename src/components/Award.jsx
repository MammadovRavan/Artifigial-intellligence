import React from 'react'
import './Award.css'
const Award = ({meqaleninBasligi,meqaleninIconu,meqaleninMetni}) => {
  return (
    <div className='text-white  kart-bg kart'>
        <img src={meqaleninIconu} alt="" />
        <h3>{meqaleninBasligi}</h3>
        <p>{meqaleninMetni}</p>
    </div>
  )
}

export default Award