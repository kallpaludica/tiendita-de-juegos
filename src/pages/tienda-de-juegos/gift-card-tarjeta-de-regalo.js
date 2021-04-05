import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Helmet } from "react-helmet"
import styled from "@emotion/styled"
import "twin.macro"
import Contact from "../../components/About/Contact"
import { GiCardRandom } from "react-icons/gi"
import { AwesomeButtonSocial } from "react-awesome-button"
const GiftCardPages = ({ data, pageContext, location }) => {
  return (
    <Layout>
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <SEO title="GifCards" />
      <div className="min-h-screen">
        <div className="relative pt-24 pb-12 text-yellow-500 bg-yellow-400 pattern-grid-lg">
          <img
            className="w-full max-w-3xl mx-auto"
            alt="Gift Card"
            src="https://images.ctfassets.net/mc6j42086v0m/3pFbrddf49dIRLm9j2yJIX/a8c93d084471698e400a1bf2a3b29908/1.png?w=1747&h=1240&q=50&fm=webp"
          />

          <Wave>
            <div className="relative">
              <svg
                viewBox="0 0 1428 174"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g
                    transform="translate(-2.000000, 44.000000)"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  >
                    <path
                      d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                      opacity="0.100000001"
                    ></path>
                    <path
                      d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                      opacity="0.100000001"
                    ></path>
                    <path
                      d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                      id="Path-4"
                      opacity="0.200000003"
                    ></path>
                  </g>
                  <g
                    transform="translate(-4.000000, 76.000000)"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  >
                    <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </Wave>
        </div>
        <article className="max-w-2xl py-16 mx-auto text-xl text-center">
          <div className="flex flex-col items-center mb-12 font-mono ">
            <GiCardRandom className="text-6xl text-purple-400" />
            <hi className="mt-6 text-3xl text-purple-700">Gift Card </hi>
            <span className="mt-2 text-2xl opacity-75">
              (Tarjeta de Regalo)
            </span>
          </div>
          <p className="mb-6 font-sans text-2xl">
            La Gift Card o Tarjeta de Regalo es una idea hermosa y una solución
            increíble para aquelles indecises, que no terminen de definir su
            regalo porque les cuesta elegir entre la inmensa posibilidad de
            juegos..
          </p>
          <p className="mb-6 font-sans text-2xl">
            Elegí el Monto que quieras regalar y su Nombre para recibir la
            tarjeta de regalo y enviarla!
          </p>
          <p className="mb-12 font-sans text-2xl">
            Resolvé en segundos un bello regalo y disfrutá del compartir juegos
            de mesa con otres!!
          </p>
          <AwesomeButtonSocial
            type="whatsapp"
            href={`https://api.whatsapp.com/send?phone=5493876034627&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20para%20regalar%20una%20GiftCard`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacenos tu consulta
          </AwesomeButtonSocial>
        </article>
        <Contact />
      </div>
    </Layout>
  )
}

export default GiftCardPages

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  .svg {
    position: relative;
    display: block;
    width: calc(140% + 1.3px);
    height: 208px;
  }
`
