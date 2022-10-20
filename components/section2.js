import React from "react"
import Image from "next/image";

export default function section2(){
    return(
        <div className="min-w-7xl mx-20 my-24">
          <div className="text-center mb-10 flex-col flex">
              <h2 className="font-fold md:text-5xl text-4xl text-gray-800 mb-4">
                Servicios
              </h2>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5">
            {/**first block */}
            <div className="flex flex-wrap justify-center">
<<<<<<< HEAD
              <div className="w-full px-4">
                <div className="hero border-gray-500 rounded-md p-10">
                <Image src={"/images/foto1.png"} width={1500} height={1500}/>
                  <span className="text-primary font-semibold text-lg block mb-4">Lite</span>
=======
              <div className="w-full px-4 font-mono">
                <div className="hero border-gray-500 rounded-md p-10">
                <Image src={"/images/nutrina1.png"} width={700} height={500}/>
                  <span className="text-primary font-semibold text-lg block mb-4">Consulta Nutricional</span>
                  <span className="text-primary font-semibold text-lg block mb-4">Incuye:</span>
                  <h1>•Valoración del Estado Nutricional</h1>
                  <h1>•Horientacion alimentaria</h1>
                  <h1>•Plan de alimentacion personalizado, en base a tus necesidades, presupuesto, preferencias y horarios.</h1>
>>>>>>> b97b12f (actualizacion-form)
                </div>
              </div>
            </div>
            {/**second block */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
<<<<<<< HEAD
                <div className="hero border-gray-500 rounded-md p-10">
                <Image src={"/images/imagen2.png"} width={1500} height={1500}/>
                  <span className="text-primary font-semibold text-lg block mb-4">Lite</span>
=======
                <div className="hero border-gray-500 rounded-md p-10 font-mono">
                <Image src={"/images/ima.png"} width={3400} height={1650}/>
                  <span className="text-primary font-semibold text-lg block mb-4">Servicios</span>
                  <div className="flow-root"><h1 className="float-left">Toma de glucosa capilar</h1><Image className="float-right" src={"/images/imagen3.png"} width={20} height={25}/></div>
                  <div className="flow-root"><h1 className="float-left">Toma de presion arterial</h1><Image className="float-right" src={"/images/imagen4.png"} width={20} height={25}/></div>
                  
                  <table class="border-separate border border-slate-400 font-serif">
  <thead>
  <tr>
      <th class="border border-slate-300 " COLSPAN="2">Planes de alimentación personalizados</th>
    </tr>
    <tr>
      <td class="border border-slate-300 bg-yellow-400">Diabetes</td>
      <td class="border border-slate-300 bg-green-300">Osteoporosis</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 bg-green-300">Hipertención arterial</td>
      <td class="border border-slate-300 bg-yellow-400">Anemia</td>
    </tr>
    <tr>
      <td class="border border-slate-300 bg-yellow-400">Triglicéridos</td>
      <td class="border border-slate-300 bg-green-300">Desnutrición</td>
    </tr>
    <tr>
      <td class="border border-slate-300 bg-green-300">Ácido Úrico</td>
      <td class="border border-slate-300 bg-yellow-400">Hipotiroidismo</td>
    </tr>
    <tr>
      <td class="border border-slate-300 bg-yellow-400">Control de peso</td>
      <td class="border border-slate-300 bg-green-300">Menopausia</td>
    </tr>
  </tbody>
</table>
>>>>>>> b97b12f (actualizacion-form)
                </div>
              </div>
            </div>
            {/**tercer block */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="hero border-gray-500 rounded-md p-10">
                <Image src={"/images/foto3.png"} width={1500} height={1500}/>
                  <span className="text-primary font-semibold text-lg block mb-4">Lite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

