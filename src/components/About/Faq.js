import React from "react"
import { Disclosure, Transition } from "@headlessui/react"
import { FiChevronDown } from "react-icons/fi"

const FaqComponent = () => {
  // const data = useStaticQuery(graphql`
  //   query AboutAboutQuery {
  //     about: contentfulSobreElProyecto(slug: { eq: "quienes-somos" }) {
  //       id
  //       title
  //       textoPrincipal {
  //         raw
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="w-full px-4 pt-16">
        <div className="w-full max-w-3xl p-2 mx-auto bg-white rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-sans text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Hacen envíos al interior?</span>
                  <FiChevronDown
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel static className="px-6 pt-6 pb-4 font-sans text-xl text-left text-gray-800">
                    Si! Hacemos envios a todo el pais por medio de Correo Argentino y ViaCargo. Puede llegar a tu domicilio o a la sucursal más cercana a tu domicilio.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-sans text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Que medios de pago hay para elegir?</span>
                  <FiChevronDown
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel static className="px-6 pt-6 pb-4 font-sans text-xl text-left text-gray-800">
                    Aceptamos pagos en efectivo, transferencia bancaria o deposito.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  )
}

export default FaqComponent
