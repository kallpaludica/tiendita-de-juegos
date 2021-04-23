import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Helmet } from "react-helmet"
import Contact from "../../components/About/Contact"
import { GiCardRandom } from "react-icons/gi"
import { AwesomeButtonSocial } from "react-awesome-button"
const GiftCardPages = ({ data, pageContext, location }) => {
  return (
    <Layout>
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <Seo title="GifCards" />
      <div className="min-h-screen">
        <div className="relative pt-24 pb-12 text-yellow-500 bg-yellow-400 pattern-grid-lg">
          <img
            className="w-full max-w-3xl mx-auto"
            alt="Gift Card"
            src="https://images.ctfassets.net/mc6j42086v0m/3pFbrddf49dIRLm9j2yJIX/a8c93d084471698e400a1bf2a3b29908/1.png?w=1747&h=1240&q=50&fm=webp"
          />
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
