import React from 'react';
import './style.css';
import CardTypeExcursion from '../CardTypeExcursion';

function TypesOfExcursions(props) {
  const { cards, title } = props;

    return (
      <div className="types_container">
        <div className="types_container_title">{title}</div>
        <div className="types_container_cards">
          {
            cards.map((elem,id)=>(<CardTypeExcursion key={id} title={elem.header} images={elem.img} />))
          }
        </div>
      </div>
    );
}

export default TypesOfExcursions;
