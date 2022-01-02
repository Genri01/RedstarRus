import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import images from '../../assets/images';
import './style.css';

function Footer(props) {
  const { instagram, facebook, visa, mastercard,logo_footer, qr } = images;
    return (
      <div className="footer_container">
        <div className="footer_up">
          <div className="footer_logo_section">
            <div className="footer_menu_logo_container">
            <Link to={"/"}><img src={logo_footer} alt="logo" width="159" height="71" /></Link>
            </div>
          </div>
          <div className="footer_desription_section_left">
          <Link to={"/#walk"}><div className="footer_txt" >Пешеходные</div></Link>
          <Link to={"/#auto"}><div className="footer_txt" >Автомобильные</div></Link>
          <Link to={"/#author"}><div className="footer_txt" >Авторские</div></Link>
          <Link to={"/#individual"}><div className="footer_txt">Индивидуальные</div></Link>
          </div>
          <div className="footer_desription_section_right">
          <Link to={"/#answer"}><div className="footer_txt">Вопросы и ответы</div></Link>
            <Link to={"/about"}><div className="footer_txt">О нас</div></Link>
            <Link to={"/police"}><div className="footer_txt">Политика конфидециальности</div></Link>
          </div>
          <div className="footer_social_section">
            <div className="social_container">
              <img className="social_img" style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "http://www.instagram.com";}}  src={instagram} alt="instagram" width="28" height="28" />
              <img style={{cursor: 'pointer'}} onClick={(e)=>{ document.location.href = "https://www.facebook.com/";}} src={facebook} alt="facebook" width="28" height="28" />
            </div>
            <div className="qr">
              <img src={`https://pixboost.com/api/2/img/https://ru.redstarbaltic.com/${qr}/optimise?auth=MTQ4OTY2NTYyMw__`} alt="qr" width="50" height="50" />
            </div>
          </div>
        </div>
        <div className="footer_down">
          <div className="coperait_container">
            <div className="coperait_txt">Copyright © 2021 Red Star All rights reserved</div>
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
