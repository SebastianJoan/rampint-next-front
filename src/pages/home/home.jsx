

    //Nodemodules
    import { useState, useEffect } from 'react';


    import { BasicLayout } from '@/layouts'
    import Image from 'next/image'
    import truck_bx from '../../../public/img/truck.png'
    import build from '../../../public/img/build.png'
    import service from '../../../public/img/service.png'
    import proveedor from '../../../public/img/proveedor.png'
    import contrato from '../../../public/img/contrato.png'
    import { authFetch, ENV } from "@/utils";

    export default function HomePage() {

        const [countGerencias, setcountGerencias] = useState(0);
        const [countEquipos, setcountEquipos] = useState(0);
        const [countServicios, setcountServicios] = useState(0);
        const [countProveedores, setcountProveedores] = useState(0);
        const [countFacturas, setcountFacturas] = useState(0);
        const [countContratosEquipos, setcountContratosEquipos] = useState(0);
        const [countContratosServicios, setcountContratosServicios] = useState(0);
        const [countContratos, setcountContratos] = useState(0);

        useEffect(() => {
            const fetchData = async () => {
            try {
                const params = {
                    method: "GET",
                };
                const responseGerencias = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.GERENCIAS}/${ENV.ENDPOINTS.SQL.COUNT}`, params);
                const responseEquipos = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.EQUIPOS}/${ENV.ENDPOINTS.SQL.COUNT}`, params);
                const responseServicios = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.SERVICIOS}/${ENV.ENDPOINTS.SQL.COUNT}`, params);
                const responseProveedores = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.PROVEEDORES}/${ENV.ENDPOINTS.SQL.COUNT}`, params);
                const responseContratosServicios = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.CONTRATOS_SERVICIO}/${ENV.ENDPOINTS.SQL.COUNT}`, params);
                const responseContratosEquipos = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.CONTRATOS_EQUIPO}/${ENV.ENDPOINTS.SQL.COUNT}`, params);
                const responseFacturas = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.PROVEEDORES}/${ENV.ENDPOINTS.SQL.COUNT}`, params);
                const jsonGerencias = await responseGerencias.json();
                const jsonEquipos = await responseEquipos.json();
                const jsonServicios = await responseServicios.json();
                const jsonContratosServicios = await responseContratosServicios.json();
                const jsonContratosEquipos = await responseContratosEquipos.json();
                const jsonFacturas = await responseFacturas.json();
                const jsonProveedores = await responseProveedores.json();
                setcountGerencias(jsonGerencias.body);
                setcountEquipos(jsonEquipos.body);
                setcountServicios(jsonServicios.body);
                setcountProveedores(jsonProveedores.body);
                setcountFacturas(jsonFacturas.body);
                setcountContratosEquipos(jsonContratosEquipos.body)
                setcountContratosServicios(jsonContratosServicios.body)
                setcountContratos(jsonContratosServicios.body + jsonContratosEquipos.body)
                console.log(jsonGerencias.body)
            } catch (error) {
                console.error(error);
            }
            };        
            fetchData();
        }, []);

        return (
            <BasicLayout>
                <div className="p-6  bg-gray-800 ">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">GASTOS DE SERVICIOS MENSUALIZADOS</h2>
                                <canvas id="chart1"></canvas>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">GASTOS DE SERVICIOS DIARIOS</h2>
                                <canvas id="chart2"></canvas>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Equipos Registrados</h2>
                                <div className="flex items-center">
                                    <div className="bg-gray-500 flex justify-center items-center justify-items-center text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ truck_bx }
                                            alt="Rampint Image "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold">{countEquipos}</p>
                                        <p className="text-gray-500">Registrados en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Gerencias Registradas</h2>
                                <div className="flex items-center">
                                    <div className="bg-blue-500 text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ build }
                                            alt=" gerencia icon "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold">{countGerencias}</p>
                                        <p className="text-gray-500">Registradas en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Servicios Registrados</h2>
                                <div className="flex items-center">
                                    <div className="bg-red-500 text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ service }
                                            alt="Rampint Image "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold">{countServicios}</p>
                                        <p className="text-gray-500">Registradas en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Proveedores Registrados</h2>
                                <div className="flex items-center">
                                    <div className="bg-yellow-500 text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ proveedor }
                                            alt="Rampint Image "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold">{countProveedores}</p>
                                        <p className="text-gray-500">Registradas en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Contratos Registrados</h2>
                                <div className="flex items-center">
                                    <div className="bg-orange-500 text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ contrato }
                                            alt="Rampint Image "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold"> {countContratos} </p>
                                        <p className="text-gray-500">Registrados en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Contratos de Servicios</h2>
                                <div className="flex items-center">
                                    <div className="bg-lime-500 text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ contrato }
                                            alt="Rampint Image "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold">{countContratosServicios}</p>
                                        <p className="text-gray-500">Registrados en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Contratos de Equipos</h2>
                                <div className="flex items-center">
                                    <div className="bg-cyan-500 text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ contrato }
                                            alt="Rampint Image "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold">{countContratosEquipos}</p>
                                        <p className="text-gray-500">Registrados en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow">
                                <h2 className="text-lg font-semibold mb-4">Facturas</h2>
                                <div className="flex items-center">
                                    <div className="bg-cyan-500 text-white p-4 rounded-lg mr-4">
                                        <Image
                                            src={ contrato }
                                            alt="Rampint Image "
                                            width={512}
                                            height={512}
                                            className="mx-auto w-10 h-10"
                                            priority="true"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold">{countFacturas}</p>
                                        <p className="text-gray-500">Registradas en Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BasicLayout>
        )
    }
