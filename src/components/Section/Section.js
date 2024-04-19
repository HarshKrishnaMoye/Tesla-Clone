import React from 'react'
import './Section.css'
import { Fade } from 'react-reveal';


function Section(props) {
  return (
    <div className="wrap" style={{backgroundImage:`url(${props.bgImage})`}}>

      <Fade bottom>
      <div className="itemText">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
      </Fade>
      <div className="low">
        <Fade bottom>
      <div className="buttons">
        <button className="button leftButton">{props.leftButton}</button>
        {props.rightButton && <button className="button rightButton">{props.rightButton}</button> }   
      </div>
      </Fade>


      </div>
    </div>
  )
}

export default Section
