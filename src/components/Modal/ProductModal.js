import React from "react"
import Modal from "react-modal"
import "./ProductModal.css"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { GiTabletopPlayers } from "react-icons/gi"
import { FaCaretRight } from "react-icons/fa"

Modal.setAppElement("#___gatsby")

function CategoryModal(props) {
  var subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333"
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <div>
      <button
        onClick={openModal}
        className="relative flex items-center justify-center w-full h-full p-2 font-sans text-white duration-1000 transform bg-blue-500 rounded-lg shadow-lg outline-none rounded-bl-2xl rounded-br-2xl hover:shadow-xl hover:-translate-y-1"
      >
        <svg
          viewBox="0 0 20 20"
          enableBackground="new 0 0 20 20"
          className="inline-block w-6 h-6"
        >
          <path
            fill="#fff"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                      C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                      C15.952,9,16,9.447,16,10z"
          />
        </svg>
        Previsualizar
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel={props.title}
      >
        <h2
          className="text-sm text-blue-500 uppercase"
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          {props.title}
        </h2>
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 z-50 w-6 h-6 m-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="text-gray-700 fill-current"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className="py-3 text-xl">
          <h2 className="w-full pb-1 mb-3 font-sans text-lg text-left text-blue-600 border-b border-blue-600">
            <span className="pr-2">{props.title}</span>
            {props.publisher && (
              <div className="flex items-center justify-start ">
                <Link
                  to={`/tienda-de-juegos/editoriales/${kebabCase(
                    props.publisher.slug
                  )}/`}
                  className="flex flex-col py-1 mr-2 text-sm opacity-75"
                  key={props.publisher.slug}
                >
                  <b className="font-sans text-gray-800 underline hover:text-dblue-600">
                    Editorial {props.publisher.title}
                  </b>
                </Link>
              </div>
            )}
          </h2>
          {props.age && (
            <div className="w-full text-left">
              <div className="flex justify-center pb-1 font-sans text-lg font-bold text-left text-gray-800 ">
                <FaUserFriends className="w-6 mx-auto mb-1 text-base text-blue-600" />
                <div className="flex flex-col flex-1 pl-3">
                  {props.age}+ años
                  <small className="text-xs ">Edades sugeridas</small>
                </div>
              </div>
            </div>
          )}
          {props.duration && (
            <div className="w-full text-left">
              <div className="flex justify-center pb-1 font-sans text-lg font-bold text-left text-gray-800 ">
                <IoMdTime className="w-6 mx-auto mb-1 text-2xl text-blue-600" />
                <div className="flex flex-col flex-1 pl-3">
                  {props.duration} min.
                  <small className="text-xs ">Tiempos de partida</small>
                </div>
              </div>
            </div>
          )}

          {props.players && (
            <div className="w-full text-left">
              <div className="flex justify-center pb-1 font-sans text-lg font-bold text-left text-gray-800 ">
                <GiTabletopPlayers className="w-6 mx-auto mb-1 text-2xl text-blue-600" />
                <div className="flex items-baseline flex-1 pl-3">
                  {props.players}{" "}
                  <span className="pl-1 text-xs ">jugadores/as</span>
                </div>
              </div>
            </div>
          )}

          <Link
            to={`/tienda-de-juegos/${kebabCase(props.slug)}/`}
            className="flex items-center justify-between p-2 px-3 font-sans text-sm font-bold text-left text-white transition-all duration-500 bg-blue-600 hover:text-white hover:bg-blue-500"
          >
            {props.stock ? (
              <span>Pedilo por encargo</span>
            ) : (
              <span>Consulta este juego</span>
            )}
            <FaCaretRight className="text-lg text-blue-200" />
          </Link>
        </div>
      </Modal>
    </div>
  )
}

export default CategoryModal
