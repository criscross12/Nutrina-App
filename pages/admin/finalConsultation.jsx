import { useContext, useEffect } from "react";
import { DataContext } from "../../context/dataContext";
import { isAuthenticated } from "../../utils/AuthService";
import Navbar from "../../components/navBarC";

export default function Home() {
  const { currentUser, setCurrentUser } = useContext(DataContext);
  console.log("User: ", currentUser);
  const checkLoggedIn = async () => {
    let cuser = isAuthenticated();
    setCurrentUser(cuser);
  };
  useEffect(() => {
    checkLoggedIn();
  }, []);
  return (
    <Navbar>
      <div className="relative">
        <table width="150%">
          <tbody>
            <tr>
              <td width="20%" align="center" valign="middle">
                img_nutrina
              </td>
              <td width="60%" align="center" valign="middle">
                <p>
                  <strong>L.N Monserrat Piña Jiménez</strong>
                </p>
                <p>Cédula Profesional: 12490409 UAEMéx</p>
              </td>
              <td width="20%" align="center" valign="middle">
                logo-nu
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                &nbsp;
              </td>
              <td align="left" valign="middle">
                Nombre del paciente:{" "}
              </td>
              <td align="center" valign="middle">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td align="center" valign="middle">
                &nbsp;
              </td>
              <td align="left" valign="middle">
                Edad:{" "}
              </td>
              <td align="center" valign="middle">
                &nbsp;
              </td>
            </tr>
            <tr>
              <td colSpan={3} align="center" valign="middle">
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>N° de medición</td>
                      <td>1 medición</td>
                      <td>2 medición</td>
                      <td>3 medición</td>
                      <td>4 medición</td>
                      <td>5 medición</td>
                      <td>6 medición</td>
                    </tr>
                    <tr>
                      <td>Fecha </td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>T/A mm Hg</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Glucemia Capilar (mg/dl)</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Peso (kg)</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Estatura (cm)</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Cintura (cm)</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Cadera (cm)</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>ICC</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>% Grasa</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Kg Grasa</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Grasa visceral</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>% Músculo</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Kg músculo</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Edad corporal</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>IMC</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>CMB</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td colSpan={2} align="center" valign="middle">
                <table width="50%" border={0}>
                  <tbody>
                    <tr>
                      <td>
                        {" "}
                        <p>Parametros de referencia</p>
                        <p>Femenina 20-39 años</p>
                        <p>% Grasa Corporal: 21-39.9</p>
                        <p>Grasa Visceral: 1- 9</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              <td align="center" valign="middle">
                IMG_REFERENCIA
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Navbar>
  );
}
