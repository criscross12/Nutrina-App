<<<<<<< HEAD
import Head from "next/head"

export default function Login({ children, title }){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 hero">
            <Head>
        <title>Nutriña | Inicio de sesión{title ? `| ${title}` : ""}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">{children}
            <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
            <div className="w-3/5 p-5"><p>sign in section</p></div>{/** sign in section */}
            <div className="w-2/5 bg-green-500 text-white"><p>sign up section</p></div>{/**sign up section */}
            </div>
            </main>
        </div>
=======
import Log from "../components/log"

export default function Login(){
    return(
       <Log></Log>
>>>>>>> b97b12f (actualizacion-form)
    )
}