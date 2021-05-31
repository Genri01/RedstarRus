import React from 'react';
import './style.css';

function RoteBlock(props) {
  const { header, description, routes } = props;
    return (
      <div className="routes_container">
        <div className="routes_container_header">{header}</div>
        <div className="routes_container_title">{description}</div>
        <div className="routes_container_cards">
          {
            routes.map((el,id,arr) => (
              <div className="route_card" key={id}>
                <div className="route_card_container">
                  <img className="route_card_img" src={el.img}  alt="route_img" width="100%" height="100%" />
                  {
                    (arr.length - 1 === id) ? '': <img className="route_card_img" src={el.delimeter}  alt="route_img" width="30px" height="30px" /> 
                  }
                </div>
                <div className="route_txt_container">
                  <div className="route_time">{el.time}</div>
                  <div className="route_description">{el.title}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
}

export default RoteBlock;
