import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  Link
} from "react-router-dom";
import images from '../../assets/images';
import './style.css';

function HeaderMenu(props) {
  let { url } = useRouteMatch();
  const { logo,logo_footer } = images;
  let dark = '';
  let text_dark = '';
  let img_logo = logo;
  if(url === '/about' || url === '/police') {
    dark = "dark_header"
    text_dark = "dark_txt"
    img_logo = logo_footer;
    console.log()
  }
    return (
      <div className={`header_container ${dark}`}>
        <div className="header_menu_logo_container">
        <Link to="/"><img style={{cursor:'pointer'}} src={img_logo} alt="logo" width="160" height="56" /></Link>
        </div>
        <div className="header_menu_title_container">
        <Link to="/"><div className={`menu_title ${text_dark}`} onClick={(e)=>{window.scrollTo(0,2330)}}>Пешеходные</div></Link>
        <Link to="/"><div className={`menu_title ${text_dark}`} onClick={(e)=>{window.scrollTo(0,3180)}}>Автомобильные</div></Link>
        <Link to="/"><div className={`menu_title ${text_dark}`} onClick={(e)=>{window.scrollTo(0,4030)}}>Авторские</div></Link>
        <Link to="/"><div className={`menu_title ${text_dark}`} onClick={(e)=>{window.scrollTo(0,6480)}}>Вопрос/Ответ</div></Link>
          <Link to="/about"><div onClick={(e)=>{window.scrollTo(0,0)}} className={`menu_title ${text_dark}`}>О нас</div></Link>
        </div>
      </div>
    );
}
 
export default HeaderMenu;
