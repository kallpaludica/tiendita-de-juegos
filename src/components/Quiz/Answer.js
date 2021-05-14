import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ answer, handleAnswerClick, handleEnterPress }) => {
  return (
    <li
      className="text-center question-answer"
      onClick={handleAnswerClick}
      onKeyDown={handleEnterPress}
    >
      {answer}
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.element.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired
};

export default Answer;