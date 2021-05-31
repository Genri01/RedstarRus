import React from 'react';
import './style.css';

function AboutBlock(props) {
  const { header, info }= props;
    return (
      <div className="about_container">
          <div className="about_header">{header}</div> 
         <div className="about_cantainer_cards">
          {
            info.map((el,id)=>(
              <div key={id+'58yh'} className="about_card">
                <div className="about_title">{el.description}</div>
                <img src={el.img} alt="about_img" width="120" height="120" />
              </div>
            ))
          }
         </div>
      </div>
    );
}

export default AboutBlock;
