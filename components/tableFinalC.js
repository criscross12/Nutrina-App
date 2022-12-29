import Image from "next/image";
import React, { useState, useEffect } from "react";
import { getMedicalRes } from "../utils/AuthService";

export default function tableFinalConsultation({ data, access }) {
  console.log("Datos: ", data, access);
  const [datas, setData] = useState([]);
  const getData = async () => {
    const res = await getMedicalRes(data["id"], data["type"], access);
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);

  /** td field component */
  const TD = ({ data }) => <td className="border border-gray-400">{data}</td>;
  let createSpace = [];
  datas.map((i) => {
    console.log(i);
    createSpace.push(<TD data={i.note} />);
  });
  if (datas.length < 6) {
    for (let index = datas.length; index < 6; index++) {
      createSpace.push(<TD data="" />);
    }
  }

  return (
    <table className="min-w-full">
      <tbody>
        <tr>
          <td width="20%" align="center" valign="middle">
            <Image width="130" height="110" src="/nutrina1.png" />
          </td>
          <td width="60%" align="center" valign="middle">
            <p>
              <strong>L.N Monserrat Piña Jiménez</strong>
            </p>
            <p>Cédula Profesional: 12490409 UAEMéx</p>
          </td>
          <td width="20%" align="center" valign="middle">
            <Image width="130" height="110" src="/nutrina1.png" />
          </td>
        </tr>
        <tr>
          <td align="center" valign="middle">
            &nbsp;
          </td>
          <td align="left" valign="middle">
            Nombre del paciente:
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
          <td className=" content-center" colSpan={3} valign="middle">
            <table className="table-fixed" width="100%" border={1}>
              <tbody>
                <tr>
                  <td className="border border-gray-400">N° de medición</td>
                  <td className="border border-gray-400">1 medición</td>
                  <td className="border border-gray-400">2 medición</td>
                  <td className="border border-gray-400">3 medición</td>
                  <td className="border border-gray-400">4 medición</td>
                  <td className="border border-gray-400">5 medición</td>
                  <td className="border border-gray-400">6 medición</td>
                </tr>
                <tr>
                  <td className="border border-gray-400">Fecha </td>
                  {datas.map(({ created_at }) => (
                    <>
                      <td className="border border-gray-400">{created_at}</td>
                    </>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-400">T/A mm Hg</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-gray-400">
                    Glucemia Capilar (mg/dl)
                  </td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-gray-400">Peso (kg)</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.basic_measurements.weight}
                      </td>
                    </>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-400">Estatura (cm)</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.basic_measurements.height}
                      </td>
                    </>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-400">Cintura (cm)</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.basic_measurements.waist}
                      </td>
                    </>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-400">Cadera (cm)</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.basic_measurements.hip}
                      </td>
                    </>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-400">ICC</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.basic_measurements.icc}
                      </td>
                    </>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-400">% Grasa</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.body_measurements.fat_percentage}
                      </td>
                    </>
                  ))}{" "}
                </tr>
                <tr>
                  <td className="border border-gray-400">Kg Grasa</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                </tr>
                <tr>
                  <td className="border border-gray-400">Grasa visceral</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.body_measurements.visceral_fat_percentage}
                      </td>
                    </>
                  ))}{" "}
                </tr>
                <tr>
                  <td className="border border-gray-400">% Músculo</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.body_measurements.muscle_mass_percentage}
                      </td>
                    </>
                  ))}{" "}
                </tr>
                <tr>
                  <td className="border border-gray-400">Kg músculo</td>
                  {createSpace}
                </tr>
                <tr>
                  <td className="border border-gray-400">Edad corporal</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.body_measurements.body_age}
                      </td>
                    </>
                  ))}{" "}
                </tr>
                <tr>
                  <td className="border border-gray-400">IMC</td>
                  {datas.map((b) => (
                    <>
                      <td className="border border-gray-400">
                        {b.basic_measurements.imc}
                      </td>
                    </>
                  ))}
                </tr>
                <tr>
                  <td className="border border-gray-400">CMB</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                  <td className="border border-gray-400">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td colSpan={2} align="center" valign="middle">
            <table width="50%" border={1}>
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
  );
}
