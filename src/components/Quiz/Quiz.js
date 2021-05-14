import React from "react"
import PropTypes from "prop-types"
import QuestionList from "./QuestionList"
import "./quiz.css"
import { FcRating } from "react-icons/fc"

const Quiz = ({
  step,
  questions,
  totalQuestions,
  score,
  handleAnswerClick,
  handleEnterPress,
}) => {
  return (
    <div className="relative z-50 w-full max-w-2xl mx-auto wrapper ">
      <div className="relative z-50 overflow-hidden bg-white shadow-2xl rounded-xl questions">
        <header className="left-0 right-0 z-50 flex justify-between p-4 font-mono bg-yellow-100">
          <div className="space-x-1 text-lg question-count">
            <div className="question-number">{step}</div>
            <div className="description">
              / <span>{totalQuestions}</span>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-1 font-mono text-2xl score-container">
            <div className="score">{score} x</div>
            <div className=" description">
              <FcRating />
            </div>
          </div>
        </header>
        <QuestionList
          questions={questions}
          handleAnswerClick={handleAnswerClick}
          handleEnterPress={handleEnterPress}
        />
      </div>
    </div>
  )
}

Quiz.propTypes = {
  step: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  handleAnswerClick: PropTypes.func.isRequired,
  handleEnterPress: PropTypes.func.isRequired,
}

export default Quiz
