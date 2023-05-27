import React from 'react'

const PartnerCompany = ({sirketinLogosu,sirketinAdi}) => {
  return (
   <div className="sirket">
     <img src={sirketinLogosu} alt={sirketinAdi} className='sirketinLogosu'/>
   </div>
  )
}

export default PartnerCompany