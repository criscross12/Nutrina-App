import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination";
import { paginate } from "../../utils/paginate";
import Layout from "../../components/layout";
import Navbar from "../../components/NavbarM";
import { NUTRINA_API } from "../../utils/config";

const Patients = () => {
  let token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiYTg0MWQwYzktZWM5Zi00ODRkLWJiMDYtZmMzOGIxMzk1ZWM1IiwiZW5hYmxlZCI6dHJ1ZSwiZW1haWwiOiJtaW5nMXNoZWxsQGdtYWlsLmNvbSIsImlhdCI6MTY2Nzg0MDI4NSwiZXhwIjoxNjY3OTI2Njg1fQ.K4vpL1v3POpr2ghFkPSPe2e2_fTwflhq9oaNIsAX1Qg";
  const [users, setUsers] = useState([]);
  const [tableUser, setTableUser] = useState([]);
  const [search, setSearch] = useState("");
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const getUsers = async () => {
    const { data: res } = await axios.get(NUTRINA_API.apiUsers + "/users", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    setUsers(res);
    setTableUser(res);
  };

  const handleValueChange = (e) => {
    setSearch(e.target.value);
    filterByValue(e.target.value);
  };

  const filterByValue = (itemValue) => {
    var resSearch = tableUser.filter((e) => {
      if (
        e.name?.includes(itemValue)
        // || e.company.name.toString().toLowerCase().includes(itemValue.toLowerCase())
      ) {
        return e;
      }
    });
    setUsers(resSearch);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getUsers();
  });

  const paginateUsers = paginate(users, currentPage, pageSize);

  return (
    <Layout title="Pacientes">
      <img src="../nutrina1.png" class="absolute right-0 top-0 w-22 h-24"></img>
      <h3>Lista pacientes</h3>
      <br />
      <br />
      <br />
      <div className="">
        <form className="flex items-center">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required=""
              onChange={handleValueChange}
              value={search}
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>
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
                      Sexo
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
                  {paginateUsers.map(({ name, phone, email, age }, i) => (
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {i + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {name}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {phone}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {age}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Borrar, Eliminar, Consulta
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Pagination
        items={users.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </Layout>
  );
};

export default Patients;
