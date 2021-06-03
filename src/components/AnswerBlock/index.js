import React from 'react';
import Answer from '../../components/Answer';
import './style.css';

function AnswerBlock(props) {
  const { header,answers } = props;
  let st = {}
    return (
      <div className="answerblock_container">
        <div className="answerblock_container_header">{header}</div>
        {
          answers.map((el,id) => ( 
            <Answer style={st} title={el.answer} description={el.description} key={id} />
          ))
        }
      </div>
    );
}

export default AnswerBlock;
