import Format from "../Layout/format";

export default function Page() {
  return (
    <Format>
      <div className="antialiased max-w-9xl mx-auto my-0 bg-gray-300 px-10">
        <div className="relative block md:flex items-center">
          <div className="w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
            <div className="text-lg font-medium text-green-500 uppercase p-8 text-center border-b border-gray-200 tracking-wide">
              Información
            </div>
            <div className="block sm:flex md:block lg:flex items-center justify-center">
              <div className="mt-8 sm:m-8 md:m-0 md:mt-8 lg:m-8 text-center">
                <span className="block text-sm text-gray-600 mt-2">
                  <img alt="test" src="me.png"/>
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <ul>
                <li className="flex items-center">
                  <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="h-5 w-5 text-teal-800"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <rect x="3" y="4" width="18" height="16" rx="3" />{" "}
                      <circle cx="9" cy="10" r="2" />{" "}
                      <line x1="15" y1="8" x2="17" y2="8" />{" "}
                      <line x1="15" y1="12" x2="17" y2="12" />{" "}
                      <line x1="7" y1="16" x2="17" y2="16" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">
                    L.N MONSERRAT PIÑA JIMÉNEZ
                  </span>
                </li>
                <li className="flex items-center mt-3">
                  <div className="bg-green-200 rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="h-5 w-5 text-teal-800"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <rect x="3" y="7" width="18" height="13" rx="2" />{" "}
                      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />{" "}
                      <line x1="12" y1="12" x2="12" y2="12.01" />{" "}
                      <path d="M3 13a20 20 0 0 0 18 0" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">
                    Cédula profesional: 12490409 UAÉMEX
                  </span>
                </li>
              </ul>
            </div>
            <a
              className=" flex items-center justify-center bg-gray-200 hover:bg-gray-300 p-8 text-md font-semibold text-gray-800 uppercase mt-16"
              href="#"
            ></a>
          </div>
          <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
            <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
              <div className="text-lg font-medium uppercase p-8 text-center border-b border-blue-800 tracking-wide">
                Nutriña
              </div>

              <main className="h-screen w-screen -my-24 flex justify-items-center items-center flex-wrap">
                <div className="bg-white w-60 h-64 shadow-md rounded m-8">
                  <div className="w-full h-1/4 p-3">
                    <a
                      href="#"
                      className=" hover:text-yellow-600 text-gray-700"
                    >
                      <span className="text-lg font-semibold uppercase tracking-wide ">
                        Misión
                      </span>
                    </a>
                    <p className="text-gray-600 text-sm leading-5 mt-1">
                      Brindar servicios de nutrición de calidad con calidez y
                      profesionalismo, basado en evidencia científica, acordes a
                      las necesidades de cada paciente, y al mismo tiempo
                      aportar las herramientas necesarias en materia de
                      educación nutricional para el empoderamiento personal.
                    </p>
                  </div>
                </div>
                <div className="bg-white w-52 h-64 shadow-md rounded m-3">
                  <div className="w-full h-1/4 p-3">
                    <a
                      href="#"
                      className=" hover:text-yellow-600 text-gray-700"
                    >
                      <span className="text-lg font-semibold uppercase tracking-wide ">
                        Visión
                      </span>
                    </a>
                    <p className="text-gray-600 text-sm leading-5 mt-1">
                      Ser un Consultorio Nutricional que brinde servicios
                      especializados que satisfagan las necesidades de la
                      población para contribuir en la mejora de la Salud
                      Pública.
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Format>
  );
}
