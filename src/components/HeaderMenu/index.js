import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { HashLink as Link} from 'react-router-hash-link'
import images from '../../assets/images';
import './style.css';

function HeaderMenu(props) {
  let { url } = useRouteMatch();
  const { logo,logo_footer } = images;
  let dark = '';
  let text_dark = '';
  let gradient = '';
  let img_logo = logo;
  let style_about = {}
  if(url === '/about' || url === '/police') {
    dark = "dark_header"
    text_dark = "dark_txt"
    img_logo = logo_footer;
    style_about={ color:'#fff'}

  } else {
     gradient = 'gradient_header';
  }
    return (
      <div className={`header_container ${dark} ${gradient}`}>
        <div className="header_menu_logo_container">
        <Link to="/"><img style={{cursor:'pointer'}} src={img_logo} alt="logo" width="160" height="56" /></Link>
        </div>
        <div className="header_menu_title_container">
        <Link to={"/#walk"}><div className={`menu_title ${text_dark}`} >Пешеходные</div></Link>
        <Link to={"/#auto"}><div className={`menu_title ${text_dark}`} >Автомобильные</div></Link>
        <Link to={"/#author"}><div className={`menu_title ${text_dark}`} >Авторские</div></Link>
        <Link to={"/#answer"}><div className={`menu_title ${text_dark}`} >Вопрос/Ответ</div></Link>
          <Link to="/about"><div style={style_about} onClick={(e)=>{window.scrollTo(0,0)}} className={`menu_title ${text_dark}`}>О нас</div></Link>
        </div>
      </div>
    );
}
 
export default HeaderMenu;
