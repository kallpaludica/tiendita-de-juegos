import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { FcIdea, FcDocument, FcEngineering } from "react-icons/fc"

const HomeWidgets = ({ children }) => {
  return (
    <>
      <Fade>
        <Link
          className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
          to={`/comunidad/recursos/`}
        >
          <div className="mb-3 font-sans text-xl font-bold text-left ">
            <h2 className="mb-1 text-sm text-green-600 uppercase">
              Recursos lúdicos
            </h2>
            <p className="text-gray-800">
              Para jugar y descargar <br /> al alcance de un click.
            </p>
          </div>
          <FcEngineering className="text-6xl" />
        </Link>
      </Fade>
      <Fade>
        <Link
          className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
          to={`/comunidad/proyectos-que-nos-potencian/`}
        >
          <div className="mb-3 font-sans text-xl font-bold text-left ">
            <h2 className="mb-1 text-sm text-green-600 uppercase">
              Grandes Ideas
            </h2>
            <p className="text-gray-800">Valiosos proyectos que nos <br /> rodean día a día.</p>
          </div>
          <FcIdea className="text-6xl" />
        </Link>
      </Fade>
      <Fade>
        <Link
          className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
          to={`/comunidad/notas/`}
        >
          <div className="mb-3 font-sans text-xl font-bold text-left ">
            <h2 className="mb-1 text-sm text-green-600 uppercase">
              Educación y los Juegos de Mesa
            </h2>
            <p className="text-gray-800">
              {" "}
              Noticias y entrevistas <br /> del campo de la Recreación.
            </p>
          </div>
          <FcDocument className="text-6xl" />
        </Link>
      </Fade>
    </>
  )
}

export default HomeWidgets
