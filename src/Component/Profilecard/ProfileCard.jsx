import React from 'react'
import profile from "../../Component/Asset/download.jpeg";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import "./ProfileCard.css"





const profilecard = () => {
  return (
    <div className='profileCard'>
        <div className="profilecardhead">
            <h1>Prabu </h1>
            <p>Front-end developer <br></br> designer</p>
            </div>
            <img src={profile}></img>
            <h1 className="profileCardMail">Iam a front end developer<br></br> in pondicherry</h1>
            <p className="profilecardcopyright">All copy rights issused</p>
            <div className="profilecardsocialmedia">
            <CiTwitter className='profilecardicon'></CiTwitter>
            <CiLinkedin className='profilecardicon'></CiLinkedin>
            <FaGithub className='profilecardicon'></FaGithub>
            <FaInstagram className='profilecardicon'></FaInstagram><br></br>
            

            </div>
            <button className="profilecardCTA"><CiMail></CiMail>  HIRE ME</button>
           

            

        
    </div>
  )
}

export default profilecard