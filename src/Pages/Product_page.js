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
  routes,
} = config;

function Product_page (props) {
  let { id, category } = useParams();
  let header = '', img = '', info = [], type ='', description = '';
  const { show, toogleShow } = props;
  switch (category) {
    case 'walk':
      header = sliderWalk[id].header;
      img = sliderWalk[id].img;
      info = sliderWalk[id].info;
      type = sliderWalk[id].type;
      description = sliderWalk[id].description;
      break;
    case 'auto':
      header = sliderAuto[id].header;
      img = sliderAuto[id].img;
      info = sliderAuto[id].info;
      type = sliderAuto[id].type;
      description = sliderAuto[id].description;
      break;
    case 'author':
      header = sliderAuthor[id].header;
      img = sliderAuthor[id].img;
      info = sliderAuthor[id].info;
      type = sliderAuthor[id].type;
      description = sliderAuthor[id].description;
      break;
  
    default:
      header = sliderAuto[id].header;
      img = sliderAuto[id].img;
      info = sliderAuto[id].info;
      type = sliderAuto[id].type;
      description = sliderAuto[id].description;
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
        <HeaderMenu />
        <TitleBlock
          title = {header}
          subtitle = {`${type} экскурсия`}
          header = ""
          subheader = ""
          img_head = {img}
          description = ""
          h={741}
          ht={534}
          // hb={1}
        />
        <AboutBlock header="О мироприятии" info={info} />
        <BookBlock onClick={toogleShow} header="Впечатление" description={description} />
        <RoteBlock header="Маршрут" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et" routes={routes} />
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
