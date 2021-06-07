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
              <div className="about_description_cards">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
              <div className="about_title_cards">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
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
