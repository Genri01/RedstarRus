import React from 'react';
import './style.css';

function CardTypeExcursion(props) {
  const { images, title } = props;
  let cord = 0;
  if(title === "Пешеходные") { cord = 2330 }
  if(title === "Автомобильные") { cord = 3180 }
  if(title === "Авторские") { cord = 4030 }
    return (
      <div onClick={(e)=>{window.scrollTo(0,cord)}} className="cards_container">
        <img className="cards_container_img" src={images} alt="cards" width="100%" height="100%" />
        <div className="cards_container_title">{title}</div>
      </div>
    );
}

export default CardTypeExcursion;
