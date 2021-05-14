import React from "react"
import PropTypes from "prop-types"
import Answer from "./Answer"

const Question = ({
  question,
  answers,
  handleAnswerClick,
  handleEnterPress,
}) => {
  return (
    <div className="question">
      <h2 className="px-6 py-6 font-mono text-2xl text-center border-b border-gray-300 question-title" >
        {question}
      </h2>
      <ul className="grid text-left question-answers" >
        {answers.map((answer, index) => {
          return (
            <Answer
              key={JSON.stringify(answer.props.children)}
              answer={answer}
              handleAnswerClick={handleAnswerClick(index)}
              handleEnterPress={handleEnterPress(index)}
            />
          )
        })}
      </ul>
    </div>
  )
}

Question.propTypes = {
  question: PropTypes.element.isRequired,
  answers: PropTypes.array.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired,
}

export default Question
