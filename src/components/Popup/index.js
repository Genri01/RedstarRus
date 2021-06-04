import React from "react";
import './style.css';
import ButtonSection from '../ButtonSection/index';
import image from '../../assets/images';

class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        msg: '',
        close: false,
        err: true,
    }
    this.changeEmail = this.Email.bind(this)
    this.changeMsg= this.Msg.bind(this)
    this.handleSubmit= this.Submit.bind(this)
    this.closeForm= this.Form.bind(this)
    this.validateForm= this.Valid.bind(this)
}


  Email(event) {

    this.setState({
      email: event.target.value
    })
    this.validateForm();
  }

  Msg(event) {
    this.setState({
      msg: event.target.value
    })
  }

  Form(event) {
    this.setState({
      msg: '',
      email:'',
      close: true
    })
  }


  validateEmail(email) {
    var pattern  = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
    return pattern .test(email);
  }

  Valid() {
    const { email } = this.state 
    console.log( email);
    if (this.validateEmail(email)) {
      this.setState({
        err: false
      })
    } else {
      console.log(email + " не подтвержден.");
      this.setState({
        err: true
      })
    }
    return false;
  }
  
  Submit(event) {
    console.log( event.target);
    this.validateForm();
    event.preventDefault();
  }

  render() {
    const { show,onClick } = this.props;
    const { changeEmail, changeMsg, handleSubmit } = this;
    const { msg,email,close,err } = this.state;
    const { cross } = image;
console.log(this)
    return (
      <div style={{display: (show && !close)? 'flex': 'none'}} className="popup_container">
        <form className="container_form" onSubmit={handleSubmit}>
         <img className="popup_cross" onClick={()=>onClick()} src={cross} alt="cross" width={25} height={25} /> 
        <div className="popup_header">Свяжитесь с нами</div>
        <div className="popup_title">Оставьте нам своё сообщение с пожеланиями и наименованием желаемой экскурсии, и мы свяжемся с Вами в кратчайшие сроки! </div>
        <div className="popup_description">E-mail<sup>*</sup></div>
        <input name="email" placeholder="your@eamil.com" className={`popup_input ${err ? 'error_input' : ''}`}  type="text" value={email} onChange={changeEmail} />
        <div className="popup_description">Сообщение<sup>*</sup></div>
        <textarea name="msg" placeholder="Укажите как можно больше информации: дата экскурсии,наименование экскурсии,количество человек,пожелания..." className="popup_textarea" value={msg} onChange={changeMsg} />
        <div className="container_btn">
          <ButtonSection lock onClick={onClick} cancel mr={10} title="ОТМЕНИТЬ" width={200} height={54} fs={15} />
          <input className={`input_submit ${err ? 'disable' : ''}`} disabled={err} type="submit" value="ОТПРАВИТЬ" />
        </div>
        </form>
      </div>
    );
  }
    
}

export default Popup;
