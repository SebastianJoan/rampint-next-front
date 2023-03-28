import { BasicLayout } from '@/layouts'
import Image from 'next/image'
import truck_bx from '../../../public/img/truck.png'
import build from '../../../public/img/build.png'
import service from '../../../public/img/service.png'
import proveedor from '../../../public/img/proveedor.png'
import contrato from '../../../public/img/contrato.png'

export default function HomePage() {
  return (
    <BasicLayout>
      <div className="p-6  bg-gray-800 h-screen">
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
                              <p className="text-xl font-semibold">52</p>
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
                              <p className="text-xl font-semibold">25</p>
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
                              <p className="text-xl font-semibold">25</p>
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
                              <p className="text-xl font-semibold">25</p>
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
                              <p className="text-xl font-semibold">25</p>
                              <p className="text-gray-500">Registrado s en Total</p>
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
                              <p className="text-xl font-semibold">25</p>
                              <p className="text-gray-500">Registrado s en Total</p>
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
                              <p className="text-xl font-semibold">25</p>
                              <p className="text-gray-500">Registrado s en Total</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </BasicLayout>
  )
}
