import React from 'react'
import "./Navbar.css";
import { CiHome } from "react-icons/ci";
import { FaServicestack } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { SiHyperskill } from "react-icons/si";



const Navbar = () => {
  return (
    <div className="navbar">
    <div className='Navbar'>
     <CiHome className='Navbarmenuicons'/>
     <FaServicestack className='Navbarmenuicons' />
     <MdOutlineDashboardCustomize className='Navbarmenuicons' />
     <CgProfile className='Navbarmenuicons' />
     <CiMail className='Navbarmenuicons'/>
     <SiHyperskill className='Navbarmenuicons' />

    </div>
    </div>
  )
}

export default Navbar