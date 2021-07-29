import React from "react";
import './style.css';
import image from '../../assets/images';

function CallBtn(props) {
  const { onClick } = props;
  const { call_up, call_down } = image;

  return (
    <div onClick={onClick} className="call_container">
      <div className="call_wrapper">
        <img className="call_up" src={call_up} alt="call_up" width={95} />
        <img className="call_down" src={call_down} alt="call_down" width={95} />
      </div>
    </div>
  );
    
}

export default CallBtn;
