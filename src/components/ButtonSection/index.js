import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import './style.css';

function ButtonSection(props) {
  const {
    active,
    title,
    onClick,
    height,
    width,
    mt,
    mr,
    mb,
    ml,
    proc,
    link,
    lock,
    cancel,
    fs,
    cordinat,
  } = props;
  let lockstyle = 0;
  let obj = {}
  let txt = {}
  const btn = []


  if (height === undefined || width === undefined || height === 0 || width === 0) {
    lockstyle = 1
  }

  if(lockstyle > 0) {
    txt = { fontSize: '12px',paddingBottom: "3px"}
    obj = { padding: '3px 15px', marginTop: `${mt}${proc ? '%' : 'px'}`, marginRight: `${mr}${proc ? '%' : 'px'}`, marginBottom: `${mb}${proc ? '%' : 'px'}`, marginLeft: `${ml}${proc ? '%' : 'px'}` }
  } else {
    txt = {fontSize: fs === undefined ? '' :  `${fs}px`}
    obj = { width: `${width}px`, height: `${height}px`, marginTop: `${mt}${proc ? '%' : 'px'}`, marginRight: `${mr}${proc ? '%' : 'px'}`, marginBottom: `${mb}${proc ? '%' : 'px'}`, marginLeft: `${ml}${proc ? '%' : 'px'}` }
  }

  if(link === '' || link === false || link === undefined) {

    btn.push(<div key="1" style={obj} className={`${active ? cancel ? "btn_cancel" : "btn_active" : cancel ? "btn_cancel" : 'btn_container'}`}  onClick={lock ? (e)=>{onClick()} : ()=>{}}>
      <div  style={txt} className="btn_title">{title}</div>
    </div>)
  } else {

    btn.push(
    <Link key="2"  to={link}><div style={obj} className={`${active ? "btn_active" : 'btn_container'}`} onClick={lock ? (e)=>{onClick()} : () => {cordinat ? console.log() : window.scrollTo(0,0)}}>
      <div  style={txt} className="btn_title">{title}</div>
    </div></Link>
    )
  }
  return (
    btn
  );
}

export default ButtonSection;
