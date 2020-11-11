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
        <nav
          className="hidden mt-2 mb-3 font-bold text-white md:block "
          aria-label="Breadcrumb"
        >
          <List className="">
            {elementsNew.map((value, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center capitalize gjbreadcrumb"
                >
                  <Link
                    key={index}
                    to={`${value.pathname}`}
                    className="hover:text-gray-100"
                    activeClassName="text-gray-100"
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
                      className="w-3 h-3 mx-3 fill-current"
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
  ${tw`relative w-full max-w-6xl mx-auto mb-3 `}
`

const List = styled.ol`
  ${tw`flex justify-start p-0 list-none`}
`
