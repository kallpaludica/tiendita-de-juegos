import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import "../components/VideoReact.css"

const PageContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full p-3 py-12 mx-auto text-purple-700 bg-white`}
`

export default () => {
  return (
    <Layout>
      <HeroWave
        heading="Sobre el proyecto"
        pattern="bg-pink-800 text-pink-900"
        svg="M0,224L720,160L1440,288L1440,320L720,320L0,320Z"
      />
      <PageContainer>
        <div className="flex items-center justify-center pb-24">
          <div class="pattern-dots-md text-orange-300 gray-light max-w-2xl mx-auto my-12 text-center w-full">
            <img
              className="transition-all duration-500 transform -translate-x-6 -translate-y-4 hover:-translate-y-5 hover:-translate-x-6"
              src="https://images.unsplash.com/photo-1563941407950-f0cf2b55c425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            />
          </div>
        </div>
      </PageContainer>
    </Layout>
  )
}
