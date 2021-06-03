import React from 'react';
import ButtonSection from '../../components/ButtonSection';
import './style.css';

function TitleBlock(props) {
  const { 
    title,
    subtitle,
    header,
    subheader,
    img_head,
    description,
    btn,
    h,
    hb
  } = props;
    return (
      <section style={{height: h ? `${h}px`: ''}}className="main_container">
        <div style={{backgroundImage:`url(${img_head})`}} className="main_container_img">
          <img className="main_img"  alt="main_img" width="100%" height="100%" />
          <div className="main_container_title_block_header">{header}</div>
          <div className="main_container_title_block_subheader">{subheader}</div>
        </div>
        <div style={{paddingBottom: hb ? `${hb}px`: ''}} className={`main_container_title_block ${h ? 'none_padding' : ''}`}>
          <div className="main_container_title">
            {title}
          </div>
          <div className="main_container_subtitle">
            {subtitle}
          </div>
          <div style={{display: h ? `none`: 'flex'}} className="main_container_description">
            {description}
          </div>
          <div className="main_container_btn">
            {btn && <ButtonSection link="/about" mt={36} mr={888} mb={0} ml={16} width={131} height={58} title="О НАС" />}
          </div>
        </div>
      </section>
    );
}

export default TitleBlock;
