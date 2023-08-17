import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import { FcIdea, FcDocument, FcEngineering } from "react-icons/fc"

const HomeWidgets = () => {
  return (
    <>
      <Fade>
        <div className="flex items-start justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200">
          <div className="mb-3 text-xl font-bold text-left ">
            <h2 className="mb-1 text-sm text-green-600 uppercase">
              Recursos lúdicos
            </h2>
            <p className="font-serif text-gray-800">
              Para jugar al <br /> alcance de la mano.
            </p>
            <Link className="mt-3 btn yellow" to={`/comunidad/recursos/`}>
              Ver recursos
            </Link>
          </div>
          <FcEngineering className="text-6xl" />
        </div>
      </Fade>
      <Fade>
        <div className="flex items-start justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200">
          <div className="mb-3 text-xl font-bold text-left ">
            <h2 className="mb-1 text-sm text-green-600 uppercase">
              Grandes Ideas
            </h2>
            <p className="font-serif text-gray-800">
              Valiosos proyectos que nos <br /> rodean día a día.
            </p>
            <Link
              className="mt-3 btn red"
              to={`/comunidad/proyectos-que-nos-potencian/`}
            >
              Ver proyectos
            </Link>
          </div>
          <FcIdea className="text-6xl" />
        </div>
      </Fade>
      <Fade>
        <div className="flex items-start justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200">
          <div className="mb-3 text-xl font-bold text-left ">
            <h2 className="mb-1 text-sm text-green-600 uppercase">
              Educación y los Juegos de Mesa
            </h2>
            <p className="font-serif text-gray-800">
              Noticias y entrevistas <br /> del campo de la Recreación.
            </p>
            <Link className="mt-3 btn blue" to={`/comunidad/notas/`}>
              Ver recursos
            </Link>
          </div>
          <FcDocument className="text-6xl" />
        </div>
      </Fade>
    </>
  )
}

export default HomeWidgets
