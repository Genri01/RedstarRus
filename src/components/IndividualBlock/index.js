import React from 'react';
import images from '../../assets/images';
import ButtonSection from '../../components/ButtonSection';
import './style.css';

function IndividualBlock(props) {
  const { onClick } = props
  const { individual, churches_1 , vip, boat, optional, disabled, lunch, star_2} = images;
    return (
      <div className="individual_container">
          <div className="individual_container_left">
              <img src={individual} alt="profile" width="210" height="160" />
              <div className="individual_container_left_header">Индивидуальные</div>
              <div className="individual_container_left_title">Мы составим индивидуальный тур под Ваши нужды за 30 минут</div>
              <div className="individual_container_left_description">У вас есть индивидуальный запрос на экскурсию по Санкт-Петербургу и пригородам?Напишите нам Ваши предложения и мы составим маршрут,программу и просчитаем стоимостьв течении 30 минут.</div>
              <ButtonSection onClick={onClick} lock active width={180} height={50} title="ПРОСЧИТАТЬ" />
          </div>
          <div className="individual_container_right">
            <div className="info_container">
            <img className="info_background" src={churches_1} alt="churches_1" width="100%" height="100%" />
            </div>
            <div className="container_all">
              <div className="info_container_up">
                <img src={star_2} alt="profile" width="25" height="25" />
                <div className="info_container_title">Автомобильная</div>
              </div>
              <div className="info_container_midle">Экскурсия другой Петергоф</div>
              <div className="info_container_all">
                <div className="number_txt">5</div>
                <div className="info_container_images">
                  <img src={lunch} alt="profile" width="25" height="25" />
                  <img src={boat} alt="profile" width="25" height="25" />
                  <img src={optional} alt="profile" width="25" height="25" />
                  <img src={disabled} alt="profile" width="25" height="25" />
                </div>
              </div>
              <div className="info_container_down">
                <div className="hour_txt">Часов</div>
                <div className="all_txt">Включено</div>
              </div>
              <img className="info_vip" src={vip} alt="profile" width="180" height="155" />
            </div>
          </div>
      </div>
    );
}

export default IndividualBlock;
