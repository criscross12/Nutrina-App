import Format from "../Layout/format"

export default function Page(){
    return(
       <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <div className="post py-10"></div>
            </div>
        </section>
       </Format> 
    )
}