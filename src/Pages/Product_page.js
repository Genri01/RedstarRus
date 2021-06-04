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
  slide,
  routes,
} = config;


function Product_page (props) {
  let { id } = useParams();
  const { show, toogleShow } = props;
  const { 
    header,
    img,
    info,
    type,
    description
  } = slide[id];
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
        <SliderOfExcursions type="Подобные экскурсии" slide={slide} />
        <IndividualBlock onClick={toogleShow} />
        <Popup show={show} onClick={toogleShow} />
        <Footer />
        <div className="footer_cap"></div>
      </div>
    </div>
);  
}


export default Product_page;
