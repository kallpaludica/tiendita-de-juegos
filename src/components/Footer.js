import React, { useEffect } from "react"
import lottie from "lottie-web"
import { Link } from "gatsby"
import {
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai"
import KallpaLogo from "../assets/logo.svg"
import { AiOutlineHeart } from "react-icons/ai"
import { HiCode } from "react-icons/hi"
import reactLogo from "../animations/ogam.json"

const Footer = ({ children }) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    })
  }, [])

  return (
    <>
      <footer className="relative w-full p-2 py-8 pb-24 overflow-hidden text-gray-800 bg-white">
        <div className="flex-col w-full mx-auto max-w-7xl">
          <div className="flex flex-col w-full px-6 pb-12 md:flex-row">
            <div className="flex items-start justify-start w-64">
              <KallpaLogo className="w-20 h-20 max-w-xs mb-6" />
            </div>
            <div className="w-full">
              <div className="grid w-full gap-3 mx-auto mt-12 font-serif text-lg text-left text-gray-800 md:grid-cols-2 md:mt-3 lg:grid-cols-3">
                <div className="flex flex-col mt-6 mb-3 space-y-2 md:mt-0">
                  <span className="block mb-3 font-sans text-sm font-bold text-gray-800 uppercase">
                    Tiendita de juegos
                  </span>
                  <Link className="hover:underline" to="/tienda-de-juegos">
                    Por título
                  </Link>
                  <Link
                    className="hover:underline"
                    to="/tienda-de-juegos/precio"
                  >
                    Por precio
                  </Link>
                  <Link
                    className="hover:underline"
                    to="/tienda-de-juegos/duracion"
                  >
                    Por duración
                  </Link>
                  <Link
                    className="hover:underline"
                    to="/tienda-de-juegos/edades"
                  >
                    Por edades
                  </Link>
                  <Link
                    className="hover:underline"
                    to="/tienda-de-juegos/editoriales/"
                  >
                    Editoriales
                  </Link>
                  <Link
                    className="hover:underline"
                    to="/tienda-de-juegos/colecciones/"
                  >
                    Colecciones
                  </Link>
                </div>
                <div className="flex flex-col mt-6 mb-3 space-y-2 md:mt-0">
                  <span className="block mb-3 font-sans text-sm font-bold text-gray-800 uppercase">
                    Comunidad
                  </span>
                  <Link className="hover:underline" to="/comunidad">
                    Subido recientemente
                  </Link>
                  <Link
                    className="hover:underline"
                    to="/comunidad/proyectos-que-nos-potencian/"
                  >
                    Proyectos
                  </Link>
                  <Link className="hover:underline" to="/comunidad/recursos/">
                    Recursos lúdicos
                  </Link>
                  <Link className="hover:underline" to="/comunidad/notas/">
                    Notas
                  </Link>
                  {/* <Link className="hover:underline" to="/comunidad/quiz/">Quiz</Link> */}
                </div>
                <div className="flex flex-col mt-6 mb-3 space-y-2 md:mt-0">
                  <span className="block mb-3 font-sans text-sm font-bold text-gray-800 uppercase">
                    Contacto
                  </span>
                  <div className="select-all">+549 3876034627</div>
                  <div className="select-all">kallpaludica@gmail.com</div>
                  <Link className="hover:underline" to="/quienes-somos">
                    Quienes somos
                  </Link>
                  <Link className="hidden hover:underline" to="/showroom">
                    Showroom
                  </Link>
                  <Link className="hover:underline" to="/preguntas-frecuentes">
                    Preguntas Frecuentes
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex mt-12 md:mt-0">
              <a
                href="https://www.facebook.com/kallpaludicaa"
                target="_blank"
                className="h-12"
                rel="noopener noreferrer"
              >
                <AiOutlineFacebook className="mx-3 text-4xl" />
              </a>
              <a
                href="https://www.instagram.com/kallpaludica/"
                target="_blank"
                className="h-12"
                rel="noopener noreferrer"
              >
                <AiOutlineInstagram className="mx-3 text-4xl" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCBiIvzck56BxP9PXCEQ4E3Q"
                target="_blank"
                className="h-12"
                rel="noopener noreferrer"
              >
                <AiOutlineYoutube className="mx-3 text-4xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-end justify-between w-full px-6 mx-auto md:flex-row max-w-7xl">
            <div className="flex flex-col justify-center pr-2 font-sans font-bold md:flex-row">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block font-bold"
                href="https://www.cooparaje.com.ar"
              >
                Realizado cooperativamente con
              </a>
              <div>
                <HiCode className="inline-block mx-1 text-lg " />
                <span className="mx-1">&</span>
                <AiOutlineHeart className="inline-block mx-1 text-lg " />
              </div>
            </div>

            <div>
              <div className="relative flex w-32 h-40 max-w-lg mx-auto overflow-hidden duration-200">
                <div id="react-logo" style={{ width: 220, height: 210 }} />
              </div>
              <div className="font-sans font-bold">
                {new Date().getFullYear()} Kallpa Lúdica
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
