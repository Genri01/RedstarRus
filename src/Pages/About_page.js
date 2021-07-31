import React from 'react';
import images from '../assets/images'
import config from '../assets/config'
import HeaderMenu from '../components/HeaderMenu/index';
import AboutCards from '../components/AboutCards/index';
import ButtonSection from '../components/ButtonSection/index';
import Footer from '../components/Footer/index';
import Popup from '../components/Popup/index';
import '../App.css';

const { instagram, facebook } = images;
const {
  aboutcards
} = config;


class About_page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        active_elem: 'company',
    }
    this.toogle = this.toogleMenu.bind(this)
  }
    

  toogleMenu(e) {

    this.setState({
      active_elem: e.target.dataset.id
    })
  }

  render() {
    const { toogle, state } = this;
    const { toogleShow, show } = this.props;
    let content = [];
    if(state.active_elem === 'company') {
      content.push(
          <div key="48" className="about_page_container">
            <div className="about_page_container_left">
              <div className="title_about">О Нас</div>
              <div data-id="company" style={{ fontFamily: state.active_elem === 'company' ? 'Montserrat-Bold' : 'Montserrat-Regular'}} className="title_company" onClick={e=>toogle(e)}>О компании</div>
              <div data-id="contacts" style={{ fontFamily: state.active_elem === 'contacts' ? 'Montserrat-Bold' : 'Montserrat-Regular'}} className="title_contact" onClick={e=>toogle(e)}>Контакты</div>
            </div>
            <div className="about_page_container_right">
              <div className="about_header_cards">О Ред Стар</div>
              <div className="about_description_cards">Red Star Travel является лицензированным туроператором, предлагающим туры как по Санкт-Петербургу, так и в Москве. Наша команда состоит из преданных своему делу сотрудников c опытом работы в сфере туризма от 20 лет. Все наши усилия нацелены на предоставление высочайшего уровня сервиса и удовлетворение пожеланий даже самых взыскательных клиентов. Для нас не существует слов «невозможно» или «нельзя», так как мы ищем пути решения задачи, какой бы сложной она ни казалась. Наша прерогатива – это наши клиенты и их доверие к нам, именно поэтому отклик на ваш запрос не заставит себя долго ждать. Уже в течение одного часа мы ответим на Ваш запрос. <br /><br />Наш автопарк включает в себя самые последние модели автомобилей улучшенной комплектации класса Седан, Минивэн, Спринтер, имеющих комфортабельные салоны. Наши гиды –  это профессионалы и знатоки своего дела. Все наши экскурсоводы имеют лицензии на право проведения экскурсий во всех основных музеях Санкт-Петербурга и пригородов. Наши гиды готовы поделиться с гостями своими глубокими знаниями о городе и о стране, а также показать Санкт-Петербург через свое личное к нему отношение.</div>
              <div className="about_title_cards">"Ред Стар Тревел" предоставляет следующие туристические услуги:<br />

Автомобильные экскурсии<br />
Пешеходные экскурсии<br />
Экскурсии по рекам и каналам на теплоходах и катерах<br />
Прогулки по крышам<br />
Составление индивидуальных туристических программ для небольших (от 1 чел) и больших групп (неограниченное количество человек)<br />
Организация различных мероприятий, в том числе семинаров и конференций<br /><br />

Экскурсии проводятся на следующих языках:<br />

Русский<br />
Английский<div className="break"></div>
Французский<div className="break"></div>
Немецкий<div className="break"></div>
Испанский<div className="break"></div>
Китайский <div className="break"></div>
</div>
              <div className="container_about_cards">
                {
                  aboutcards.map((el,id)=>(
                    <AboutCards key={id+'kjhf6'} li={el.li} img={el.img} title={el.title} />
                  ))
                }
                <ButtonSection cordinat link="/#excursion" proc mt={10} mb={10} ml={4} active title="К ЭКСКУРСИЯМ" width={200} height={50} cards={aboutcards} />
              </div>
            </div>
            <Popup show={show} onClick={toogleShow} />
          </div>
)
    } else {
      content.push(
        <div key="39" className="about_page_container">
        <div className="about_page_container_left">
          <div className="title_about" style={{ color: state.active_elem_header === 'about' ? '#fff' : 'Montserrat-Regular'}}>О Нас</div>
          <div data-id="company" style={{ fontFamily: state.active_elem === 'company' ? 'Montserrat-Bold' : 'Montserrat-Regular'}} className="title_company" onClick={e=>toogle(e)}>О компании</div>
          <div data-id="contacts" style={{ fontFamily: state.active_elem === 'contacts' ? 'Montserrat-Bold' : 'Montserrat-Regular'}} className="title_contact" onClick={e=>toogle(e)}>Контакты</div>
        </div>
        <div className="about_page_container_right">
        <div className="contacts_container">
          <div>
          <div className="contacts_header">Наши контакты</div>
          <div className="contacts_title">Адрес</div>
          <div className="contacts_description">188300, г.Гатчина, ул 7 Армии, дом 23а, пом. 22 </div>
          <div className="contacts_title">Часы работы</div>
          <div className="container_work">
            <div>
              <div className="contacts_title_description">Пн-Пт</div>
              <div className="contacts_title_description">Сб-Вс</div>
            </div>
            <div>
              <div className="contacts_description">9:00 - 20:00</div>
              <div className="contacts_description">10:00 - 18:00</div>
            </div>
          </div>
          <div className="contacts_title">Для связи</div>
          <div className="container_link">
            <div>
              <div className="contacts_title_description">Телефон</div>
              <div className="contacts_title_description">E-mail</div>
            </div>
            <div>
              <div className="contacts_description">+7 911 020 49 99</div>
              <div className="contacts_description">info@redstarbaltic.com</div>
            </div>
          </div>
          <div className="container_social">
            <div className="contacts_title_description">Социальные сети</div>
            <div>
            <img style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "http://www.instagram.com";}}  src={instagram} alt="instagram" width="28" height="28" />
            <img style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "https://www.facebook.com/";}} src={facebook} alt="facebook" width="28" height="28" />
            </div>
          </div>
          </div>
        </div>
        </div>
        </div>
      )
    }

    return (
      <div  style={{backgroundColor:'#f9f9f9'}} className="App">
        <div className="header_cap"></div>

        <div className="content_app_container">
          <HeaderMenu />
            {content}
          <Footer />
          <div className="footer_cap"></div>
        </div>
      </div>
    );
  }
}

export default About_page;
