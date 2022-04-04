import React from "react"
import { Helmet } from "react-helmet"
// import Contact from "@components/Quiz/Quiz"
import QuizApp from "@components/Quiz/QuizApp"
import Layout from "@components/layout"
import Seo from "@components/seo"

const QuizPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="home quiz" />
      </Helmet>
      <Seo title="Quiz" />
      <div className="text-indigo-700 bg-indigo-800 pattern-grid-lg ">
        <div className="relative flex flex-col items-center justify-start py-12 md:py-24 from-indigo-700 via-indigo-800 to-transparent bg-gradient-to-b ">
          <div className="relative w-full max-w-md p-3 mx-auto mt-6 overflow-hidden text-indigo-900 bg-indigo-800 pattern-checks-md rounded-xl">
            <QuizApp totalQuestions={5} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuizPage
