import React from 'react';
import './Main.css';
import image from '../../images/down-arrow.svg';
import { Fade } from 'react-reveal';
import video from '../../images/video1.mp4';

function Main(props) {
  return (
    <div className="wrap1">
      <div className="video-container">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Fade bottom>
        <div className="itemText1">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </Fade>
      <div className="low1">
        <Fade bottom>
          <div className="buttons1">
            {props.rightButton && <button className="button1 rightButton1">{props.rightButton}</button>}
          </div>
        </Fade>
        <img className="downArrow" src={image} alt="" />
      </div>
    </div>
  );
}

export default Main;
