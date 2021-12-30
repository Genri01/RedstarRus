import React from 'react';
import {HashLink as Link} from 'react-router-hash-link'
import './style.css';

function CardTypeExcursion(props) {
  const { images, title,link } = props;

    return (
      <Link to={link}><div id="excursion" className="cards_container">
        <img className="cards_container_img" src={`https://pixboost.com/api/2/img/https://redstar-rus-genri01.vercel.app/${images}/optimise?auth=MTQ4OTY2NTYyMw__`} alt="cards" width="100%" height="100%" />
        <div className="cards_container_title">{title}</div>
      </div></Link>
    );
}

export default CardTypeExcursion;
