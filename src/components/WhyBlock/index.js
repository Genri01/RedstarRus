import React from 'react';
import './style.css';


class WhyBlock extends React.Component {
  render() {
    const { header, blocks } = this.props;
    return (
      <div className="why_container">
        <div className="why_container_header">{header}</div>
        <div className="why_container_card">
          {
            blocks.map((el,id) => (
              <div className="why_card" key={id}>
                <img className="why_card_img" src={id == 1 ? el.img :`https://pixboost.com/api/2/img/https://redstar-rus-genri01.vercel.app/${el.img}/optimise?auth=MTQ4OTY2NTYyMw__`}  alt="why_img" width={146} height={146} />
                <div className="why_card_title">{el.header}</div>
                <div className="why_card_description">{el.description}</div>
              </div>
            ))
          } 
        </div>
      </div>
    );
  }

}

export default WhyBlock;
