import React from "react";
import './style.css';
import ButtonSection from '../ButtonSection/index';
import image from '../../assets/images';
import InputMask from 'react-input-mask';



class Popup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        msg: '',
        close: false,
        errEmail: true,
        errTel: true,
        loader: false,
        phone:'',
        mask:'',
        bang: true,
        quality:{ 
          "AC": "+247-9999", 
          "AD": "+376-999-999", 
          "AE": "+971-59-999-9999", 
          "AE": "+971-9-999-9999", 
          "AF": "+93-99-999-9999", 
          "AG": "+1(268)999-9999", 
          "AI": "+1(264)999-9999", 
          "AL": "+355(999)999-999", 
          "AM": "+374-99-999-999", 
          "AN": "+599-999-9999", 
          "AN": "+599-999-9999", 
          "AN": "+599-9999-9999", 
          "AO": "+244(999)999-999", 
          "AQ": "+672-199-999", 
          "AR": "+54(999)999-9999", 
          "AS": "+1(684)999-9999", 
          "AT": "+43(999)999-9999", 
          "AU": "+61-9-9999-9999", 
          "AW": "+297-999-9999", 
          "AZ": "+994-99-999-99-99", 
          "BA": "+387-99-99999", 
          "BA": "+387-99-9999", 
          "BB": "+1(246)999-9999", 
          "BD": "+880-99-999-999", 
          "BE": "+32(999)999-999", 
          "BF": "+226-99-99-9999", 
          "BG": "+359(999)999-999", 
          "BH": "+973-9999-9999", 
          "BI": "+257-99-99-9999", 
          "BJ": "+229-99-99-9999", 
          "BM": "+1(441)999-9999", 
          "BN": "+673-999-9999", 
          "BO": "+591-9-999-9999", 
          "BR": "+55(99)9999-9999", 
          "BR": "+55(99)7999-9999", 
          "BR": "+55(99)99999-9999", 
          "BS": "+1(242)999-9999", 
          "BT": "+975-17-999-999", 
          "BT": "+975-9-999-999", 
          "BW": "+267-99-999-999", 
          "BY": "+375(99)999-99-99", 
          "BZ": "+501-999-9999", 
          "CA": "+1(999)999-9999", 
          "CD": "+243(999)999-999", 
          "CF": "+236-99-99-9999", 
          "CG": "+242-99-999-9999", 
          "CH": "+41-99-999-9999", 
          "CI": "+225-99-999-999", 
          "CK": "+682-99-999", 
          "CL": "+56-9-9999-9999", 
          "CM": "+237-9999-9999", 
          "CN": "+86(999)9999-9999", 
          "CN": "+86(999)9999-999", 
          "CN": "+86-99-99999-99999", 
          "CO": "+57(999)999-9999", 
          "CR": "+506-9999-9999", 
          "CU": "+53-9-999-9999", 
          "CV": "+238(999)99-99", 
          "CW": "+599-999-9999", 
          "CY": "+357-99-999-999", 
          "CZ": "+420(999)999-999", 
          "DE": "+49(9999)999-9999", 
          "DE": "+49(999)999-9999", 
          "DJ": "+253-99-99-99-99", 
          "DK": "+45-99-99-99-99", 
          "DM": "+1(767)999-9999", 
          "DO": "+1(809)999-9999", 
          "DO": "+1(999)999-9999",
          "DZ": "+213-99-999-9999", 
          "EC": "+593-99-999-9999", 
          "EC": "+593-9-999-9999", 
          "EE": "+372-9999-9999", 
          "EE": "+372-999-9999", 
          "EG": "+20(999)999-9999", 
          "ER": "+291-9-999-999", 
          "ES": "+34(999)999-999", 
          "ET": "+251-99-999-9999", 
          "FI": "+358(999)999-99-99", 
          "FJ": "+679-99-99999", 
          "FK": "+500-99999", 
          "FM": "+691-999-9999", 
          "FO": "+298-999-999", 
          "FR": "+262-99999-9999", 
          "FR": "+33(999)999-999", 
          "FR": "+508-99-9999", 
          "FR": "+590(999)999-999", 
          "GA": "+241-9-99-99-99", 
          "GD": "+1(473)999-9999", 
          "GE": "+995(999)999-999", 
          "GF": "+594-99999-9999", 
          "GH": "+233(999)999-999", 
          "GI": "+350-999-99999", 
          "GL": "+299-99-99-99", 
          "GM": "+220(999)99-99", 
          "GN": "+224-99-999-999", 
          "GQ": "+240-99-999-9999", 
          "GR": "+30(999)999-9999", 
          "GT": "+502-9-999-9999", 
          "GU": "+1(671)999-9999", 
          "GW": "+245-9-999999", 
          "GY": "+592-999-9999", 
          "HK": "+852-9999-9999", 
          "HN": "+504-9999-9999", 
          "HR": "+385-99-999-999", 
          "HT": "+509-99-99-9999", 
          "HU": "+36(999)999-999", 
          "ID": "+62(899)999-9999", 
          "ID": "+62-99-999-99", 
          "ID": "+62-99-999-999", 
          "ID": "+62-99-999-9999", 
          "ID": "+62(899)999-999", 
          "ID": "+62(899)999-99-999", 
          "IE": "+353(999)999-999", 
          "IL": "+972-59-999-9999", 
          "IL": "+972-9-999-9999", 
          "IN": "+91(9999)999-999", 
          "IO": "+246-999-9999", 
          "IQ": "+964(999)999-9999", 
          "IR": "+98(999)999-9999", 
          "IS": "+354-999-9999", 
          "IT": "+39(999)9999-999", 
          "JM": "+1(876)999-9999", 
          "JO": "+962-9-9999-9999", 
          "JP": "+81-99-9999-9999", 
          "JP": "+81(999)999-999", 
          "KE": "+254-999-999999", 
          "KG": "+996(999)999-999", 
          "KH": "+855-99-999-999", 
          "KI": "+686-99-999", 
          "KM": "+269-99-99999", 
          "KN": "+1(869)999-9999", 
          "KP": "+850-191-999-9999", 
          "KP": "+850-99-999-999", 
          "KP": "+850-999-9999-999", 
          "KP": "+850-999-999", 
          "KP": "+850-9999-9999", 
          "KP": "+850-9999-9999999999999", 
          "KR": "+82-99-999-9999", 
          "KW": "+965-9999-9999", 
          "KY": "+1(345)999-9999", 
          "KZ": "+7(699)999-99-99", 
          "KZ": "+7(799)999-99-99", 
          "LA": "+856(2099)999-999", 
          "LA": "+856-99-999-999", 
          "LB": "+961-99-999-999", 
          "LB": "+961-9-999-999", 
          "LC": "+1(758)999-9999", 
          "LI": "+423(999)999-9999", 
          "LK": "+94-99-999-9999", 
          "LR": "+231-99-999-999", 
          "LS": "+266-9-999-9999", 
          "LT": "+370(999)99-999", 
          "LU": "+352(999)999-999", 
          "LV": "+371-99-999-999", 
          "LY": "+218-99-999-999", 
          "LY": "+218-21-999-9999", 
          "MA": "+212-99-9999-999", 
          "MC": "+377(999)999-999", 
          "MC": "+377-99-999-999", 
          "MD": "+373-9999-9999", 
          "ME": "+382-99-999-999", 
          "MG": "+261-99-99-99999", 
          "MH": "+692-999-9999", 
          "MK": "+389-99-999-999", 
          "ML": "+223-99-99-9999", 
          "MM": "+95-99-999-999", 
          "MM": "+95-9-999-999", 
          "MM": "+95-999-999", 
          "MN": "+976-99-99-9999", 
          "MO": "+853-9999-9999", 
          "MP": "+1(670)999-9999", 
          "MQ": "+596(999)99-99-99", 
          "MR": "+222-99-99-9999", 
          "MS": "+1(664)999-9999", 
          "MT": "+356-9999-9999", 
          "MU": "+230-999-9999", 
          "MV": "+960-999-9999", 
          "MW": "+265-1-999-999", 
          "MW": "+265-9-9999-9999", 
          "MX": "+52(999)999-9999", 
          "MX": "+52-99-99-9999", 
          "MY": "+60-99-999-9999", 
          "MY": "+60(999)999-999", 
          "MY": "+60-99-999-999", 
          "MY": "+60-9-999-999", 
          "MZ": "+258-99-999-999", 
          "NA": "+264-99-999-9999", 
          "NC": "+687-99-9999", 
          "NE": "+227-99-99-9999", 
          "NF": "+672-399-999", 
          "NG": "+234(999)999-9999", 
          "NG": "+234-99-999-999", 
          "NG": "+234-99-999-99", 
          "NG": "+234(999)999-9999", 
          "NI": "+505-9999-9999", 
          "NL": "+31-99-999-9999", 
          "NO": "+47(999)99-999", 
          "NP": "+977-99-999-999", 
          "NR": "+674-999-9999", 
          "NU": "+683-9999", 
          "NZ": "+64(999)999-999", 
          "NZ": "+64-99-999-999", 
          "NZ": "+64(999)999-9999", 
          "OM": "+968-99-999-999", 
          "PA": "+507-999-9999", 
          "PE": "+51(999)999-999", 
          "PF": "+689-99-99-99", 
          "PG": "+675(999)99-999", 
          "PH": "+63(999)999-9999", 
          "PK": "+92(999)999-9999", 
          "PL": "+48(999)999-999", 
          "PS": "+970-99-999-9999", 
          "PT": "+351-99-999-9999", 
          "PW": "+680-999-9999", 
          "PY": "+595(999)999-999", 
          "QA": "+974-9999-9999", 
          "RE": "+262-99999-9999", 
          "RO": "+40-99-999-9999", 
          "RS": "+381-99-999-9999", 
          "RU": "+7(999)999-99-99", 
          "RW": "+250(999)999-999", 
          "SA": "+966-5-9999-9999", 
          "SA": "+966-9-999-9999", 
          "SB": "+677-999-9999", 
          "SB": "+677-99999", 
          "SC": "+248-9-999-999", 
          "SD": "+249-99-999-9999", 
          "SE": "+46-99-999-9999", 
          "SG": "+65-9999-9999", 
          "SH": "+290-9999", 
          "SH": "+290-9999", 
          "SI": "+386-99-999-999", 
          "SK": "+421(999)999-999", 
          "SL": "+232-99-999999", 
          "SM": "+378-9999-999999", 
          "SN": "+221-99-999-9999", 
          "SO": "+252-99-999-999", 
          "SO": "+252-9-999-999", 
          "SO": "+252-9-999-999", 
          "SR": "+597-999-9999", 
          "SR": "+597-999-999", 
          "SS": "+211-99-999-9999", 
          "ST": "+239-99-99999", 
          "SV": "+503-99-99-9999", 
          "SX": "+1(721)999-9999", 
          "SY": "+963-99-9999-999", 
          "SZ": "+268-99-99-9999", 
          "TC": "+1(649)999-9999", 
          "TD": "+235-99-99-99-99", 
          "TG": "+228-99-999-999", 
          "TH": "+66-99-999-9999", 
          "TH": "+66-99-999-999", 
          "TJ": "+992-99-999-9999", 
          "TK": "+690-9999", 
          "TL": "+670-999-9999", 
          "TL": "+670-779-99999", 
          "TL": "+670-789-99999", 
          "TM": "+993-9-999-9999", 
          "TN": "+216-99-999-999", 
          "TO": "+676-99999", 
          "TR": "+90(999)999-9999", 
          "TT": "+1(868)999-9999", 
          "TV": "+688-909999", 
          "TV": "+688-29999", 
          "TW": "+886-9-9999-9999", 
          "TW": "+886-9999-9999", 
          "TZ": "+255-99-999-9999", 
          "UA": "+380(99)999-99-99", 
          "UG": "+256(999)999-999", 
          "UK": "+44-99-9999-9999", 
          "US": "+1(999)999-9999",
          "UY": "+598-9-999-99-99", 
          "UZ": "+998-99-999-9999", 
          "VA": "+39-6-698-99999", 
          "VC": "+1(784)999-9999", 
          "VE": "+58(999)999-9999", 
          "VG": "+1(284)999-9999", 
          "VI": "+1(340)999-9999", 
          "VN": "+84-99-9999-999", 
          "VN": "+84(999)9999-999", 
          "VU": "+678-99-99999", 
          "VU": "+678-99999", 
          "WF": "+681-99-9999", 
          "WS": "+685-99-9999", 
          "YE": "+967-999-999-999", 
          "YE": "+967-9-999-999", 
          "YE": "+967-99-999-999", 
          "ZA": "+27-99-999-9999", 
          "ZM": "+260-99-999-9999", 
          "ZW": "+263-9-999999" 
        }
        
    }
    this.changeEmail = this.Email.bind(this)
    this.changeTel = this.Telephone.bind(this)
    this.changeMsg = this.Msg.bind(this)
    this.handleSubmit = this.Submit.bind(this)
    this.closeForm = this.Form.bind(this)
    this.validateForm = this.Valid.bind(this)
    this.validateTelephone = this.ValidTel.bind(this)
}


componentDidMount() {
  const { quality } = this.state
  fetch('https://api.sypexgeo.net/json')
  .then(response => response.json())
  .then(data => {
    if(data.country!= null) {
      this.setState({ 
        mask: quality[data.country.iso],
        tel_code: '+' + data.country.phone
       })
    }
  });
}
  Email(event) {
    this.setState({
      email: event.target.value
    })
    this.validateForm();
  }

  Telephone(event) {
    this.setState({
      phone: event.target.value
    })
    this.validateTelephone();
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
        errEmail: false,
        bang:false
      })
    } else {
      console.log(email + " не подтвержден.");
      this.setState({
        errEmail: true,
        bang:true
      })
    }
    return false;
  }

  ValidTel() {
    const { phone,mask } = this.state;
    if ((phone[mask.length-2] !== '_') && (phone[mask.length-2] !== undefined)) {
      this.setState({
        errTel: false,
        bang:false
      })
    } else {
      console.log(phone + " не подтвержден.");
      this.setState({
        errTel: true,
        bang:true
      })
    }
    return true;
  }
  
  Submit(event) {
    console.log( event.target);
    const {
      email,
      msg,
      phone
    } = this.state;
    this.validateForm();
    console.log(email,msg,phone)
    this.senmailFetch(email,msg,phone)
    event.preventDefault();
  }

  senmailFetch(email,msg,phone) {
    this.setState({
      loader: true
    })
    const requestOptions = {
    method: 'POST',
    headers: { 
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, msg, phone })
    };
    fetch('https://ru.redstarbaltic.com:8081/api/sendMail', requestOptions)
    .then(response => {
      response.json();
      if(response.status === 200) {
        this.setState({
          loader: false,
          msg: '',
          email:'',
          phone:''
        })
      } else {
        this.setState({
          loader: false,
          msg: 'ЧТО ТО ПОШЛО НЕ ТАК,ПОПРОБУЙТЕ ПОЗЖЕ!',
          email:'',
          phone: ''
        })
      }
      console.log(response)
    })

  }

  render() {
    const { show,onClick } = this.props;
    const { changeEmail, changeMsg, handleSubmit } = this;
    var { msg,email,close,errEmail,errTel,loader,phone ,mask,bang} = this.state;
    const { cross } = image;
    return (
      <div style={{display: (show && !close)? 'flex': 'none'}} className="popup_container">
        <form className="container_form" onSubmit={handleSubmit}>
          <img className="popup_cross" onClick={()=>onClick()} src={cross} alt="cross" width={25} height={25} /> 
          <div className="popup_header">Свяжитесь с нами</div>
          <div className="popup_title">Отправьте нам свое сообщение с названием желаемой экскурсии или оставьте нам свои пожелания по поводу индивидуального тура. Мы свяжемся с Вами в кратчайшие сроки! </div>
          <div className="popup_description">E-mail</div>
          <input name="email" placeholder="your@email.com" className={`popup_input ${errEmail ? 'error_input' : ''}`}  type="text" value={email} onChange={changeEmail} />
          <div className="popup_description">Телефон</div>
          <InputMask placeholder="your phone" className={`popup_input ${errTel ? 'error_input' : ''}`}  name="telephone" mask={`${mask}`} maskChar={'_'} value={phone} onChange={this.changeTel} />
          <div className="popup_description">Сообщение<sup>*</sup></div>
          <textarea name="msg" placeholder="Укажите как можно больше информации: дата и время экскурсии, название экскурсии, количество человек, Ваши пожелания..." className="popup_textarea" value={msg} onChange={changeMsg} />
          <div className="container_btn">
            <ButtonSection lock onClick={onClick} cancel mr={10} title="ОТМЕНИТЬ" width={200} height={54} fs={15} />
            {
             loader ? <div className="loader_container"><div className="loader">Sending...</div></div> :  <input className={`input_submit ${bang ? 'disable' : ''}`} disabled={bang} type="submit" value="ОТПРАВИТЬ" />
            }
          </div>
        </form>
      </div>
    );
  } 
}

export default Popup;
