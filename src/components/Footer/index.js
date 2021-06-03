import React from 'react';
import {
  Link
} from "react-router-dom";
import images from '../../assets/images';
import './style.css';

function Footer(props) {
  const { instagram, facebook, visa, mastercard,logo_footer } = images;
    return (
      <div className="footer_container">
        <div className="footer_up">
          <div className="footer_logo_section">
            <div className="footer_menu_logo_container">
            <Link to="/"><img src={logo_footer} alt="logo" width="159" height="71" /></Link>
            </div>
          </div>
          <div className="footer_desription_section_left">
          <Link to="/"><div className="footer_txt" onClick={(e)=>{window.scrollTo(0,2330)}}>Пешеходные</div></Link>
          <Link to="/"><div className="footer_txt" onClick={(e)=>{window.scrollTo(0,3180)}}>Автомобильные</div></Link>
          <Link to="/"><div className="footer_txt" onClick={(e)=>{window.scrollTo(0,4030)}}>Авторские</div></Link>
          <Link to="/"><div className="footer_txt" onClick={(e)=>{window.scrollTo(0,4880)}}>Индивидуальные</div></Link>
          </div>
          <div className="footer_desription_section_right">
          <Link to="/"><div className="footer_txt" onClick={(e)=>{window.scrollTo(0,6480)}}>Вопросы и ответы</div></Link>
            <Link to="/about"><div className="footer_txt">О нас</div></Link>
            <Link to="/police"><div className="footer_txt">Политика конфидециальности</div></Link>
          </div>
          <div className="footer_social_section">
            <div className="social_container">
              <img style={{cursor: 'pointer',margin: '0 24px 0 0'}} onClick={(e)=>{ document.location.href = "http://www.instagram.com";}}  src={instagram} alt="instagram" width="28" height="28" />
              <img style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "https://www.facebook.com/";}} src={facebook} alt="facebook" width="28" height="28" />
            </div>
          </div>
        </div>
        <div className="footer_down">
          <div className="coperait_container">
            <div className="coperait_txt">Copiraight © 2021 Red Star All right reserved</div>
          </div>
          <div className="visa_container">
            <img src={visa} alt="visa" width="49" height="17" />
            <img src={mastercard} alt="mastercard" width="35" height="23" />
          </div>
        </div>
      </div>
    );
}

export default Footer;
