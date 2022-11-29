import { useContext, useEffect } from "react";
import { DataContext } from "../../context/dataContext";
import { isAuthenticated, getMedicalRes } from "../../utils/AuthService";
import { useRouter } from "next/router";
import Navbar from "../../components/navBarC";

export default function Home() {
  const { push, query } = useRouter();

  const { currentUser, setCurrentUser } = useContext(DataContext);
  console.log("User: ", currentUser);
  const checkLoggedIn = async () => {
    let cuser = isAuthenticated();
    setCurrentUser(cuser);
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  console.log(query.type);
  getMedicalRes(query.id, query.type, currentUser);
  return (
    <Navbar>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b bg-teal-500">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Nombre Completo
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Número Telefónico
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Correo electronico
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Edad
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      hola
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      713
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      de
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      15
                    </td>
                    <td className="text-sm text-gray-900 font-light px-3 py-2 whitespace-nowrap">
                      <button class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full"></button>
                      &nbsp;
                      <button class="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full"></button>
                      &nbsp;
                      <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full"></button>
                    </td>
                  </tr>
                  )
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
