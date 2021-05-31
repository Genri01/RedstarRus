import React from "react";
import './style.css';
import ButtonSection from '../ButtonSection/index';
import image from '../../assets/images';

class CallBtn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        msg: '',
        close: false
    }
    this.changeEmail = this.Email.bind(this)
    this.changeMsg= this.Msg.bind(this)
    this.handleSubmit= this.Submit.bind(this)
    this.closeForm= this.Form.bind(this)
}


  Email(event) {
    this.setState({
      email: event.target.value
    })
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

  Submit(event) {
    console.log( event.target);
    event.preventDefault();
  }

  render() {
    const { show,onClick } = this.props;
    const { changeEmail, changeMsg, handleSubmit } = this;
    const { msg,email,close } = this.state;
    const { call_up, call_down } = image;

    return (
      <div onClick={onClick} className="call_container">
        <div className="call_wrapper">
          <img className="call_up" src={call_up} alt="call_up" width={95} />
          <img className="call_down" src={call_down} alt="call_down" width={95}  />
        </div>
      </div>
    );
  }
    
}

export default CallBtn;
