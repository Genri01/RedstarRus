import React from 'react';
import { useParams } from 'react-router-dom';
import config from '../assets/config'
import HeaderMenu from '../components/HeaderMenu/index';
import TitleBlock from '../components/TitleBlock/index';
import SliderOfExcursions from '../components/SliderOfExcursions/index';
import IndividualBlock from '../components/IndividualBlock/index';
import AboutBlock from '../components/AboutBlock/index';
import BookBlock from '../components/BookBlock/index';
import RoteBlock from '../components/RoteBlock/index';
import Footer from '../components/Footer/index';
import Popup from '../components/Popup/index';
import '../App.css';

const {
  sliderAuthor,
  sliderAuto,
  sliderWalk,
} = config;

function Product_page (props) {
  let { id, category } = useParams();
  let header = '', img = '', info = [], type ='', description = '',routes_times="",price="";
  const { show, toogleShow } = props;
  switch (category) {
    case 'walk':
      header = sliderWalk[id].header;
      img = sliderWalk[id].img_x;
      info = sliderWalk[id].info;
      type = sliderWalk[id].type;
      description = sliderWalk[id].description;
      routes_times = sliderWalk[id].routes_times;
      price = sliderWalk[id].price;
      break;
    case 'auto':
      header = sliderAuto[id].header;
      img = sliderAuto[id].img_x;
      info = sliderAuto[id].info;
      type = sliderAuto[id].type;
      description = sliderAuto[id].description;
      routes_times = sliderAuto[id].routes_times;
      price = sliderAuto[id].price;
      break;
    case 'author':
      header = sliderAuthor[id].header;
      img = sliderAuthor[id].img_x;
      info = sliderAuthor[id].info;
      type = sliderAuthor[id].type;
      description = sliderAuthor[id].description;
      routes_times = sliderAuthor[id].routes_times;
      price = sliderAuthor[id].price;
      break;
  
    default:
      header = sliderAuto[id].header;
      img = sliderAuto[id].img_x;
      info = sliderAuto[id].info;
      type = sliderAuto[id].type;
      description = sliderAuto[id].description;
      routes_times = sliderWalk[id].routes_times;
      price = sliderWalk[id].price;
      break;
  }

  if(show) {
    document.getElementsByTagName('html')[0].style.overflowX="hidden";
    document.getElementsByTagName('html')[0].style.overflowY="hidden";
  } else {
    document.getElementsByTagName('html')[0].style.overflowX="hidden";
    document.getElementsByTagName('html')[0].style.overflowY="auto";
  }
  return (
    <div className="App">
      <div className="content_app_container">
        <HeaderMenu product={true} />
        <TitleBlock
          title = {header}
          subtitle = {`${type} экскурсия для Вашей индивидуальной группы от 1 до 5 человек`}
          header = ""
          subheader = ""
          img_head = {img}
          description = ""
          h={741}
          ht={350}
          price={price}
          product={true}
        />
        <AboutBlock header="О мероприятии" info={info} />
        <BookBlock onClick={toogleShow} header="Описание" description={description} />
        <RoteBlock header="Маршрут" description="Маршрут и очередность посещения достопримечательностей указан как пример и может быть изменен в зависимости от дня недели" routes={routes_times} />
        <SliderOfExcursions type="Подобные экскурсии" slide={sliderAuto} />
        <IndividualBlock onClick={toogleShow} />
        <Popup show={show} onClick={toogleShow} />
        <Footer />
        <div className="footer_cap"></div>
      </div>
    </div>
);  
}


export default Product_page;
