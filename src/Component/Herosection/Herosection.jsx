import React from 'react'
import "./Herosection.css"
import { CiHome } from "react-icons/ci";
import Numbercard from '../NumberCard/Numbercard';



function Herosection() {
  return (
    <div className='Herosection'>
    
     <button className='herosectionCTA'><CiHome className='herosectionicon'/> INTRODUCE</button>
     <h1 >Say Hi from <span className='animate__bounce'>Prabu</span>, <br></br> Front-end Developer</h1>
     <p className='herosectiondescription'>I design and code beautifully simple things and i love what i do. Justsimple like that!</p>
    <div className='numbercardsec'>
     <Numbercard number="4+" desc="Projects completed on intership"></Numbercard>
     <Numbercard number="12+" desc="Dynamic skills i have"></Numbercard>
     </div> 

      </div>
      
      
      
    


    
  )
}

export default Herosection