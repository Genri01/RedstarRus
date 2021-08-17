import React from 'react';
import images from '../assets/images'
import config from '../assets/config'
import HeaderMenu from '../components/HeaderMenu/index';
import TitleBlock from '../components/TitleBlock/index';
import TypesOfExcursions from '../components/TypesOfExcursions/index';
import SliderOfExcursions from '../components/SliderOfExcursions/index';
import IndividualBlock from '../components/IndividualBlock/index';
import WhyBlock from '../components/WhyBlock/index';
import AnswerBlock from '../components/AnswerBlock/index';
import Footer from '../components/Footer/index';
import Popup from '../components/Popup/index';
import CallBtn from '../components/CallBtn/index';
import WatsBtn from '../components/WatsBtn/index';
import '../App.css';

const { header } = images;
const {
  cards,
  sliderAuthor,
  sliderWalk,
  sliderAuto,
  blocks,
  answers,
} = config;


class Main_page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        show: false,
        mobile: false
    }
    this.toogleShow = this.toogle.bind(this)
}

componentDidMount() {
  const mobile = window.screen.width;
  if(mobile < 770) {
    this.setState({
      mobile: true
    })
  }
}

toogle(e) {
  const {show} = this.state;
  window.scrollTo(0,0);
  this.setState({
    show: !show,
  })
}

  render() {
    const { toogleShow} = this;
    const { show, mobile } = this.state;
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
              title = "Лучшие экскурсии Питера"
              subtitle = "Мы на рынке туризма с 1989 года"
              header = "Экскурсии"
              subheader = "по Санкт-Петербургу и пригородам"
              img_head = {header}
              description = "Red Star Travel является лицензированным туроператором, предлагающим туры по Санкт-Петербургу и пригородам. Наша команда состоит из преданных своему делу сотрудников c опытом работы в сфере туризма от 10 лет."
              btn
              main={true}
            />
            <TypesOfExcursions title="Виды Экскурсий" cards={cards}/>
            <SliderOfExcursions id={'walk'} number={1} type="Пешеходные" slide={sliderWalk} dark />
            <SliderOfExcursions id={'auto'} number={2} type="Автомобильные" slide={sliderAuto} />
            <SliderOfExcursions id={'author'} number={3} type="Авторские" slide={sliderAuthor} dark />
            <IndividualBlock onClick={toogleShow} />
            <WhyBlock header="Почему стоит выбрать нас?" blocks={blocks} />
            <AnswerBlock header="Вопросы и ответы" answers={answers} />
            <Footer />
            <Popup show={show} onClick={toogleShow} />
            { mobile ? <WatsBtn  show={show} /> : <CallBtn show={show} onClick={toogleShow}/>}
            <div className="footer_cap"></div>
          </div>
        </div>
    );
  }
} 

export default Main_page;
