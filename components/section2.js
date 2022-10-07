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
              <div className="w-full px-4">
                <div className="hero border-gray-500 rounded-md p-10">
                <Image src={"/images/foto1.png"} width={1500} height={1500}/>
                  <span className="text-primary font-semibold text-lg block mb-4">Lite</span>
                </div>
              </div>
            </div>
            {/**second block */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4">
                <div className="hero border-gray-500 rounded-md p-10">
                <Image src={"/images/imagen2.png"} width={1500} height={1500}/>
                  <span className="text-primary font-semibold text-lg block mb-4">Lite</span>
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

