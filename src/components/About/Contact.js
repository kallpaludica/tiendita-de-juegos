import { graphql, useStaticQuery, navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import React from "react"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { GoMail } from "react-icons/go"
import { RiWhatsappLine } from "react-icons/ri"
import Fade from "react-reveal/Fade"

const ContactComponent = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      whatsapp: contentfulDatosDeContacto(titulo: { eq: "Whatsapp" }) {
        id
        titulo
        link
      }
      mail: contentfulDatosDeContacto(titulo: { eq: "Mail" }) {
        id
        titulo
        link
      }
      instagram: contentfulDatosDeContacto(titulo: { eq: "Instagram" }) {
        id
        titulo
        link
      }
      facebook: contentfulDatosDeContacto(titulo: { eq: "Facebook" }) {
        id
        titulo
        link
      }
      contactanos: contentfulSobreElProyecto(slug: { eq: "contacto" }) {
        id
        title
        textoPrincipal {
          raw
        }
      }
    }
  `)

  return (
    <>
      {/* <h1 className="max-w-6xl mx-auto mt-6 font-sans text-3xl font-bold text-green-600">
        {data.contactanos.title}
      </h1> */}
      <div className="flex flex-col justify-center max-w-5xl pb-6 mx-auto mt-6 text-center md:flex-row">
        <a
          className="flex flex-col items-center justify-center w-full max-w-sm p-2 mx-auto mb-3 text-center text-green-500 transition-all duration-500 ease-in-out transform bg-white rounded-md md:mx-3 hover:shadow-md hover:-translate-y-2 hover:text-green-600"
          target="_blank"
          rel="noopener noreferrer"
          title={data.whatsapp.titulo}
          href={`https://api.whatsapp.com/send?phone=${data.whatsapp.link}&text=%C2%A1Hola!%F0%9F%A4%97%20`}
        >
          <RiWhatsappLine className="my-6 text-4xl" />
          <h2 className="my-2 font-sans text-xl">{data.whatsapp.link}</h2>
          <b className="mb-3 font-mono text-base font-light">Teléfono</b>
        </a>
        <a
          className="flex flex-col items-center justify-center w-full max-w-sm p-2 mx-auto mb-3 text-center text-blue-500 transition-all duration-500 ease-in-out transform bg-white rounded-md md:mx-3 hover:shadow-md hover:text-blue-600 hover:-translate-y-2"
          target="_blank"
          rel="noopener noreferrer"
          title={data.facebook.titulo}
          href={data.facebook.link}
        >
          <AiOutlineFacebook className="my-6 text-4xl" />
          <h2 className="my-2 font-sans text-xl">kallpaludicaa</h2>
          <b className="mb-3 font-mono text-base font-light">Facebook</b>
        </a>

        <a
          className="flex flex-col items-center justify-center w-full max-w-sm p-2 mx-auto mb-3 text-center text-purple-500 transition-all duration-500 ease-in-out transform bg-white rounded-md md:mx-3 hover:shadow-md hover:text-purple-600 hover:-translate-y-2"
          target="_blank"
          rel="noopener noreferrer"
          title={data.instagram.titulo}
          href={data.instagram.link}
        >
          <AiOutlineInstagram className="my-6 text-4xl" />
          <h2 className="my-2 font-sans text-xl">@kallpaludica</h2>
          <b className="mb-3 font-mono text-base font-light">Instagram</b>
        </a>
        <a
          className="flex flex-col items-center justify-center w-full max-w-sm p-2 mx-auto mb-3 text-center text-yellow-500 transition-all duration-500 ease-in-out transform bg-white rounded-md md:mx-3 hover:shadow-md hover:text-yellow-600 hover:-translate-y-2"
          target="_blank"
          rel="noopener noreferrer"
          title={data.mail.titulo}
          href={`mailto:${data.mail.link}`}
        >
          <GoMail className="my-6 text-4xl" />
          <h2 className="my-2 font-sans text-xl">{data.mail.link}</h2>
          <b className="mb-3 font-mono text-base font-light">Mail</b>
        </a>
      </div>

      <section
        className="relative pt-6 pb-24 mb-0 bg-gradient-to-b from-white to-green-300"
        id="redes"
      >
        <Fade bottom delay={100}>
          <div className="relative z-50 hidden py-12 space-y-6 md:space-y-0 md:space-x-3">
            <AwesomeButton
              action={() => {
                navigate(`/showroom`)
              }}
              type="primary"
            >
              Conocer el showroom
            </AwesomeButton>
            <AwesomeButton
              action={() => {
                navigate(`/preguntas-frecuentes`)
              }}
              type="secondary"
            >
              Preguntas Frecuentes
            </AwesomeButton>
          </div>
        </Fade>
        <div className="absolute bottom-0 left-0 right-0 z-0 w-full overflow-hidden">
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
        </div>
      </section>
    </>
  )
}

export default ContactComponent
