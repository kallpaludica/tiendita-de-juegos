import React from "react"
import PropTypes from "prop-types"
import tally from "./tally"
import { FcRating } from "react-icons/fc"

const Results = ({ userAnswers, score, restartQuiz }) => {
  const triesTotal = tally(userAnswers)
  const oneTry = triesTotal[1] && (
    <div className="flex items-baseline justify-between w-full px-6 py-3 border-b border-indigo-200">
      <div className="mr-2 font-mono text-left text-green-500 md:w-12">
        10 +{" "}
      </div>
      <div className="font-sans text-xl font-bold text-center text-gray-700 md:w-64">
        Primer intento
      </div>
      <strong className="ml-2 font-mono text-gray-700 md:w-12">
        x {triesTotal[1]}
      </strong>
    </div>
  )
  const twoTries = triesTotal[2] && (
    <div className="flex items-baseline justify-between w-full px-6 py-3 border-b border-indigo-200">
      <div className="mr-2 font-mono text-left text-green-500 md:w-12">
        5 +{" "}
      </div>
      <div className="font-sans text-xl font-bold text-center text-gray-700 md:w-64">
        Dos intentos
      </div>
      <strong className="ml-2 font-mono text-gray-700 md:w-12">
        x {triesTotal[2]}
      </strong>
    </div>
  )
  const threeTries = triesTotal[3] && (
    <div className="flex items-baseline justify-between w-full px-6 py-3 border-b border-indigo-200">
      <div className="mr-2 font-mono text-left text-green-500 md:w-12">
        2 +{" "}
      </div>
      <div className="font-sans text-xl font-bold text-center text-gray-700 md:w-64">
        Tres intentos
      </div>
      <strong className="ml-2 font-mono text-gray-700 md:w-12">
        x {triesTotal[3]}
      </strong>
    </div>
  )
  const fourTries = triesTotal[4] && (
    <div className="flex items-baseline justify-between w-full px-6 py-3 border-b border-indigo-200">
      <div className="mr-2 font-mono text-left text-green-500 md:w-12">
        1 +{" "}
      </div>
      <div className="font-sans text-xl font-bold text-center text-gray-700 md:w-64">
        Cuatro intentos
      </div>
      <strong className="ml-2 font-mono text-gray-700 md:w-12">
        x {triesTotal[4]}
      </strong>
    </div>
  )

  return (
    <div className="relative z-50 w-full results-container">
      <div className="w-full py-3 font-mono text-sm font-bold tracking-wider text-gray-500 uppercase bg-indigo-100">
        <span role="img" aria-label="Suerte!" className="mr-1 text-xl">
          👌🎍😍
        </span>
        <br />
        ¡Excelente!
      </div>
      <div className="w-full bg-indigo-100 results-total">
        <strong className="flex items-center justify-center py-4 font-mono text-6xl text-indigo-700">
          {score} x <FcRating className="ml-4" />
        </strong>
      </div>
      <h3 className="w-full py-3 font-mono text-2xl text-center text-gray-600 border-t border-b border-indigo-200 ">
        Resultado
      </h3>
      <div className="w-full">
        {oneTry}
        {twoTries}
        {threeTries}
        {fourTries}
      </div>
      <div className="flex items-center justify-center w-full py-6 duration-300 bg-yellow-100 hover:bg-yellow-200">
        <button onClick={restartQuiz} className="btn yellow">
          Jugar otra vez
        </button>
      </div>
    </div>
  )
}

Results.propTypes = {
  userAnswers: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
}

export default Results
