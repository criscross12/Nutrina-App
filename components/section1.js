import Image from "next/image"
import Link from "next/link"

export default function section1(){
    return(
        <section className="py-16 hero" width="100px" height="100hv">
            <div className="container mx-auto md:px-20">
             

            {Slide()}
            </div>
        </section>
    )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="info">
                <div className="title">
                    <Link href={"/"}><a className="text-1xl md:text-3xl text-black hover:text-white">El valor es como el amor,</a></Link>
                    <Link href={"/"}><a className="text-3xl md:text-6xl text-black font-bold hover:text-white"> Debe tener esperanza para su nutrición</a></Link>
                    <p className="text-2xl md:text-1xl text-black hover:text-white py-4">la primera riqueza es la salud</p>
                    
                </div>
            </div>
            <div className="image">
              <Image src={"/images/imagen.png"} width={700} height={500}></Image>
            </div>
        </div>
    )
}