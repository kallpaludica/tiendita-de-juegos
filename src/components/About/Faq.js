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
      <div className="w-full px-4 pt-0">
        <div className="w-full max-w-3xl p-2 mx-auto bg-white rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Cómo hago para ver los juegos?</span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-8 font-serif text-xl text-left text-gray-800"
                  >
                    Actualmente contamos con un Show Room donde, previa
                    coordinación de día y horario, se puede venir a conocer los
                    juegos. Allí habrá algune de les integrantes de Kallpa para
                    ayudarte a elegir el juego que estás buscando y para evacuar
                    todas las dudas que presentes.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Qué medios de pago utilizan?</span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-8 font-serif text-xl text-left text-gray-800"
                  >
                    Los juegos se pueden abonar en efectivo o por transferencia
                    bancaria.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Qué significa "Por Encargo"?</span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-8 font-serif text-xl text-left text-gray-800"
                  >
                    Son aquellos juegos que suelen tardar un par de días en llegar a Salta.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Para qué edades son los juegos?</span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-8 font-serif text-xl text-left text-gray-800"
                  >
                    Cada juego tiene una edad sugerida. Es sugerida por una
                    cuestión evolutiva y de los componentes que posee pero
                    también puede variar según el recorrido lúdico y la
                    experiencia de cada persona.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Hacen envíos?</span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-8 font-serif text-xl text-left text-gray-800"
                  >
                    Sí, a toda la provincia de Salta y en Ciudad Autónoma de
                    Buenos Aires. El costo del envío corre por cuenta de le
                    compradore.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Por donde se pueden retirar?</span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-8 font-serif text-xl text-left text-gray-800"
                  >
                    Salta: Los juegos se retiran por nuestro Show Room, en zona
                    centro de la ciudad de Salta (cerca de la terminal). Para
                    más información por favor comunicarse a nuestro Whatsapp.
                    
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>¿Los juegos son originales?</span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-8 font-serif text-xl text-left text-gray-800"
                  >
                    Sí, todos de editoriales argentinas. Algunos son de
                    diseñador@s argentinos y otros licencias de otros países.
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-6 py-4 font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    ¿ Qué otras propuestas ofrecen además de la venta de juegos?
                  </span>
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
                  <Disclosure.Panel
                    static
                    className="px-6 pt-6 pb-4 space-y-3 font-serif text-xl text-left text-gray-800"
                  >
                    <p>
                      Realizamos talleres en instituciones educativas con niñes,
                      jóvenes y adultes y también talleres de formación docente.
                    </p>
                    <p>
                      Todos nuestros talleres tienen condimentos de la
                      Recreación Educativa y de los Juegos de Mesa.
                    </p>
                    <p>
                      Otras de las propuestas que llevamos adelante son las
                      Tardes y Noches de Juegos para toda la familia, donde
                      ponemos a disposición nuestra ludoteca para que quienes se
                      acercan al espacio encuentren muchas opciones de juego.
                    </p>
                    <p>
                      Allí siempre está algune de nosotres para facilitar la
                      explicación de los juegos y para asesorar a los grupos a
                      la hora de elegir.
                    </p>
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
