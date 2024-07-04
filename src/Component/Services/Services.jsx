import React from 'react'
import "./Services.css";
import { CiHome } from "react-icons/ci";
import Specializationcard from '../Specializationcard/Specializationcard';

function Services() {
  return (
    <div className='servicesection'>
        <button className='servicesectionCTA'>
          <CiHome className='servicesectionicon'/> SERVICES
          </button>
          <h1 className='servicesectionhead'>My
            <span> Specialization</span>
          </h1>
          <Specializationcard Specializationcardhead="" Specializationcarddesc="" Specializationcardcontent="" />
          <Specializationcard Specializationcardhead="" Specializationcarddesc="" Specializationcardcontent="" />
          <Specializationcard Specializationcardhead="" Specializationcarddesc="" Specializationcardcontent="" />
          
    </div>
  )
}

export default Services