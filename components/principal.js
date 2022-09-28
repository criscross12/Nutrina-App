export default function header() {
    return (
      <header class="hero">
          <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
              
              <div className="shrink w-80 font-bold ">
                  <a>L.N MONSERRAT PIÑA JIMENEZ</a>
                  <a>Cédula Profesional: 12490409 UAEMÉX</a>
              </div>
              <div>
              <img src="nutrina1.png" className="order-2 flex justify-center" width="100" alt=""></img>
              </div>
              <div className="flex order-3">
              <ul class='menu flex items-center justify-center gap-5'>
                      <li><a href="#" class='link'>INICIO</a></li>
                      <li><a href="#" class='link'>PREGUNTAS FRECUENTES</a></li>
                      <li><a href="#" class='link'>CONTACTO</a></li>
                      <li><a href="#" class='rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:text-black hover:bg-white transition duration-500'>INICIAR SESIÓN</a></li>
                  </ul>
              </div>
          </div>
      </header>
    );
  }