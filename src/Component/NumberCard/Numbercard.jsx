import React from 'react'
import "././Numbercard.css";

function Numbercard(props) {
  return (
    <div className='numbercard'>
        <h1>{props.number}</h1>
        <p>{props.desc}</p>
    </div>
  )
}

export default Numbercard