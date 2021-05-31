import React from 'react';
import './style.css';

function AboutCards(props) {
  const {
    li,
    img,
    title
  } = props;
  return (
    <div className="cards_li_container">
      <div className="img_li_container">
        <img src={img} alt="s" width={180} />
      </div>
      <div className="about_li_container">
        <div className="header_li">{title}</div>
            {
              li.map((el,id)=>(
                <div key={id} className="li_container">
                <div className="dot_li">.</div>
                <div className="txt_li">{el}</div>
                </div>
              ))
            }
      </div>
    </div>
  );
}

export default AboutCards;
