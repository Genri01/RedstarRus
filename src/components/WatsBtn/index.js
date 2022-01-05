import React from "react";
import './style.css';
import image from '../../assets/images';

function WatsBtn(props) {
  const { wats_up } = image;

  return (
    <div onClick={() => {
      window.open('https://wa.me/79095819912?text=Я%20заинтересован%20в%20ваших%20экскурсиях!');
    }} className="call_container">
      <div className="call_wrapper">
        <img className="call_up" src={wats_up} alt="wats_up" width={95} />
      </div>
    </div>
  );
    
}

export default WatsBtn;
