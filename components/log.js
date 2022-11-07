import Link from "next/link";
import { Men, Cart } from "./icons";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useCookies } from "react-cookie";
import { login } from "../utils/AuthService";

const Log = () => {
  const [cookie, setCookie] = useCookies(["user"]);
  const { push } = useRouter();
  const { register, handleSubmit } = useForm({});
  const onSubmit = async (data) => {
    try {
      const user = await login(data);
      console.log("data_user: ", user);
      if (user["roles"] == "super_admin") {
        setCookie("user", user["token"], {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
        console.log("what");
        push("/admin/dashbord");
      } else if (user["roles"] == "patient") {
        setCookie("user", user["token"], {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: true,
        });
        push("/patients/welcome");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <main className="min-w-screen min-h-screen hero flex items-center justify-center px-5 py-5">
        <div class="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div class="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0 height: 500px">
            <div class="flex flex-col w-full md:w-1/2 p-4">
              <div class="flex flex-col flex-1 justify-center mb-4">
                <div className="flex justify-center">
                  <img
                    src="nutrina1.png"
                    className="flex justify-center w-24 h-22 hover:scale-110 hover:rotate-12"
                  ></img>
                </div>
                <h1 class="text-4xl text-center font-thin text-green-500">
                  Bienvenido
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class=" mt-5 form-horizontal w-3/4 mx-auto">
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-1">
                        <div className="rounded-lg border-2 border-gray-400 w-34 p-2 flex items-center">
                          <Cart className="text-gray-400" />
                          <input
                            type="email"
                            {...register("user", { required: true })}
                            placeholder="Correo electronico"
                            className="bg-transparent outline-none text-sm"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="flex -mx-3">
                      <div class="w-full px-3 mb-1 mt-2">
                        <div className="rounded-lg border-2 border-gray-400 w-34 p-2 flex items-center">
                          <Men className="text-gray-400" />
                          <input
                            type="password"
                            {...register("password", { required: true })}
                            placeholder="*************"
                            className="outline-none text-sm bg-transparent"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col mt-8">
                      <button
                        type="submit"
                        class="bg-cyan-500 hover:bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Iniciar Sesión
                      </button>
                    </div>
                    <div class="flex flex-col mt-4">
                      <Link href={"/initial"}>
                        <button
                          type="submit"
                          class="bg-cyan-500 hover:bg-gray-700 text-white text-sm font-semibold py-2 px-4 rounded"
                        >
                          Regresar al inicio
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="hidden md:flex md:w-1/2 w-full">
              <img src="cd.jpg" className="flex rounded-r-lg"></img>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Log;
