import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import images from '../../assets/images';
import 'swiper/swiper.scss';
import './style.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import ButtonSection from '../ButtonSection/index';
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper/core';

SwiperCore.use([EffectCoverflow,Pagination]);

class SliderOfExcursions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        items: 0,
        active: 0,
        direction: ''
    }
    this.rightClick = this.moveRight.bind(this)
    this.leftClick = this.moveLeft.bind(this)
}


componentDidMount() {
  const { number } = this.props;
  this.mySwiper = document.querySelector(`.mySwiper_${number}`).swiper
}

moveLeft() {
  this.mySwiper.slidePrev();
}

moveRight() {
  this.mySwiper.slideNext()
}

  render() {
    const { slide, type, dark, number,id, prod } = this.props;
    const { active } = this.state;
    const { calendar,arrow_left,arrow_right,star_filled } = images;
    return (

  <div id={id} style={{backgroundColor: dark ? '#f8f8f8' : '#ffffff'}} className="slider_container">
    <div className={`${ prod ? "nav_container_product" : "nav_container"}`}>
      <div className="slider_container_title">{type}</div>
      <div className="arrow_left" onClick={this.leftClick}>
        <img src={arrow_left} alt="types" width="100%" height="100%" />
      </div>
      <div className="arrow_number">
        <div className="number">{active + 1}</div>
        <div className="arrow_delimetr">/</div>
        <div className="number">{slide.length}</div>
      </div>
      <div className="arrow_right" onClick={this.rightClick}>
        <img src={arrow_right} alt="types" width="100%" height="100%" />
      </div>
    </div>
    <div className="slider_container_cards">
        <Swiper
          initialSlide={Math.round(slide.length)/2}
          autoHeight={true}
          slidesPerView={'auto'}
          onSlideChange={(e) =>{
            this.setState({
              active: e.activeIndex
            })
          }}
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween = {300}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 300,
            modifier: 3,
            slideShadows: false,
          }}
          className={`mySwiper_${number}`}
        >
          { 
           slide.map((el,id)=>(
            <SwiperSlide key={id}>
              <div className="slider_container_all">
                <div className="slider_img_all_container">
                  <div className="btn_title_container">
                    <ButtonSection title={el.btn_title} active />
                  </div>
                  <img src={el.img} alt="types" width="100%" height="100%" />
                </div>
                <div className="slider_info_all_container">
                  <div className="slider_info_container_up">
                    <div className="slider_tipe_up">
                      <img src={star_filled} alt="profile" width="25" height="25" />
                      <div className="slider_info_container_title">{el.type}</div>
                    </div>
                    <div className="slider_title">{el.header}</div>
                  </div>

                  <div className="slider_info_container_midle">
                    <div className="slider_info_container_time">
                      <img src={calendar} alt="profile" width="25" height="25" />
                      <div className="slider_all_txt">Маршрут</div>
                      <img src={calendar} alt="profile" width="25" height="25" />
                      <div className="slider_all_txt">{el.time}</div>
                    </div>
                    <div className="slider_info_container_route">
                      <div className="slider_routes_txt">
                        {
                          el.routes.map((e, id, arr)=>(
                            <div key={id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent: 'center'}}>
                              <div>{e}</div>
                              {
                                (id === arr.length - 1) ? '': <div style={{ paddingBottom: '7px', paddingLeft: '7px', paddingRight: '7px' }}>.</div>
                              }
                            </div>
                          ))
                        }
                      </div>
                    </div>
                  </div>
                  <div className="slider_info_container_down">
                    <div className="slider_price_txt">{el.price} ₽</div>
                    <ButtonSection link={`/product/${el.link}`} mr={10} title="ПОДРОБНЕЕ" width={160} height={45} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))
          } 
        </Swiper>
    </div>
  </div>
);
}
    
}

export default SliderOfExcursions;
