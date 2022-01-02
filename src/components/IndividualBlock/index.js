import React from 'react';
import images from '../../assets/images';
import ButtonSection from '../../components/ButtonSection';
import './style.css';

function IndividualBlock(props) {
  const { onClick } = props
  const { individual, individual_card } = images;
    return (
      <div id="individual" className="individual_container">
          <div className="individual_container_left">
              <img src={individual} alt="profile" width="210" height="160" />
              <div className="individual_container_left_header">Тур по запросу</div>
              <div className="individual_container_left_title">Мы составим индивидуальный тур под Ваш запрос за 1 час</div>
              <div className="individual_container_left_description">У вас есть индивидуальный запрос на экскурсию по Санкт-Петербургу и пригородам? Напишите нам Ваши пожелания и мы составим маршрут, программу и просчитаем стоимость в течение 60 минут.</div>
              <ButtonSection onClick={onClick} mt={13} lock active width={179} height={56} title="ПРОСЧИТАТЬ" />
          </div>
          <div className="individual_container_right">
            <div className="info_container">
            <img className="info_background" src={`https://pixboost.com/api/2/img/https://ru.redstarbaltic.com/${individual_card}/optimise?auth=MTQ4OTY2NTYyMw__`} alt="churches_1" width="100%" height="100%" />
            </div>
          </div>
      </div>
    );
}

export default IndividualBlock;
