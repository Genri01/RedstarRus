import React from 'react';
import ButtonSection from '../../components/ButtonSection/index';
import './style.css';

function BookBlock(props) {
  const { header, description, onClick } = props;
    return (
      <div className="book_container">
        <div className="book_header">{header}</div>
        <div className="book_description">{description}</div>
        <ButtonSection onClick={onClick} lock active title="ЗАБРОНИРОВАТЬ" height={50} width={240} />
      </div>
    );
}

export default BookBlock;
