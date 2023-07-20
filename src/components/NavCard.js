import React from 'react'
import './NavCard.css'
const NavCard = ({image , index , name , price}) => {
  return (
    <div>
       <div className="NavCard" >
        <img src={image} alt="" />
        <p>{name}</p>
        <span>{price}</span>
    </div>
    </div>
  )
}

export default NavCard
