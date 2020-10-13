import React from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
const juicyBread = ({ breaddata }) => {
  var elementsNew = []

  breaddata.crumbs.forEach(createdBread)
  function createdBread(item) {
    var newlast = item.crumbLabel.replace(/-/g, " ")
    elementsNew.push({ pathname: item.pathname, crumlabel: newlast })
  }
  //console.log(elementsNew)

  return (
    <>
      <Breadcrumb>
        <nav class="text-black font-bold my-8" aria-label="Breadcrumb">
          <List class="">
            {elementsNew.map((value, index) => {
              return (
                <li
                  key={index}
                  class="flex items-center gjbreadcrumb capitalize"
                >
                  <Link
                    key={index}
                    to={`${value.pathname}`}
                    activeClassName="text-blue-600"
                  >
                    {value.crumlabel}
                  </Link>
                  <Link
                    activeClassName="opacity-0 "
                    className="transition-all duration-700"
                    key={index}
                    to={`${value.pathname}`}
                  >
                    <svg
                      class="fill-current w-3 h-3 mx-3"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                    </svg>
                  </Link>
                </li>
              )
            })}
          </List>
        </nav>
      </Breadcrumb>
    </>
  )
}

export default juicyBread

const Breadcrumb = styled.div`
  ${tw`relative w-full mb-3 `}
`

const List = styled.ol`
  ${tw`flex inline-flex justify-start p-0 list-none`}
`
