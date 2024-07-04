import React from 'react'
import "./Specializationcard.css";
import { FaCodeBranch } from "react-icons/fa";

const Specializationcard = () => {
  return (
    <div className='Specializationcard'>
        <div className="Specializationcardhead">
          <div className="Specializationcardheadcontent">
            
            <h1>Web Design</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            
          </div>
          <FaCodeBranch className='speciallizationsectionicon' />
          
        </div>
        <p className='specializationcardcontent'>4 Projects </p>
     
        
    </div>
  )
}

export default Specializationcard