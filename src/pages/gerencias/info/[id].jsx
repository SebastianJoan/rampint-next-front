import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import { authFetch, ENV } from "@/utils";

const Post = () => {

  const router = useRouter()
  const { id } = router.query
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const params = {
  //           method: "GET",
  //       };
  //       const response = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.GERENCIAS}`, params);
  //       const json = await response.json();
  //       setData(json.body);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };        
  //   fetchData();
  // }, []);
  const equipos = [
    {
      nombre: "Equipo 1",
      modelo: "Modelo 1",
      referencia: "REF-123",
      placas: "ABC-123",
      capacidad: "10 toneladas",
      contratos: [
        {
          cliente: "Cliente 1",
          fechaInicio: "01/01/2022",
          fechaFin: "31/12/2022",
          estado: "Activo"
        },
        {
          cliente: "Cliente 2",
          fechaInicio: "01/01/2023",
          fechaFin: "31/12/2023",
          estado: "Pendiente"
        }
      ]
    },
    {
      nombre: "Equipo 2",
      modelo: "Modelo 2",
      referencia: "REF-456",
      placas: "DEF-456",
      capacidad: "20 toneladas",
      contratos: [
        {
          cliente: "Cliente 3",
          fechaInicio: "01/01/2022",
          fechaFin: "31/12/2022",
          estado: "Finalizado"
        }
      ]
    }
  ];
  return(
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Nuestro Equipo</h1>
      {equipos.map((equipo) => (
        <div key={equipo.nombre} className="w-full max-w-3xl bg-white rounded-lg shadow-lg mb-8">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{equipo.nombre}</h2>
            <p className="text-gray-700">Modelo: {equipo.modelo}</p>
            <p className="text-gray-700">Referencia: {equipo.referencia}</p>
            <p className="text-gray-700">Placas: {equipo.placas}</p>
            <p className="text-gray-700">Capacidad: {equipo.capacidad}</p>
            <h3 className="text-lg font-bold mb-2 mt-4">Contratos:</h3>
            <ul className="list-disc pl-6">
              {equipo.contratos.map((contrato, index) => (
                <li key={index} className="text-gray-700">
                  <p>Cliente: {contrato.cliente}</p>
                  <p>Fecha de inicio: {contrato.fechaInicio}</p>
                  <p>Fecha de finalización: {contrato.fechaFin}</p>
                  <p>Estado: {contrato.estado}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Post