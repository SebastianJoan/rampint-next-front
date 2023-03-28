
    'use client'

    //NodeModules
    import { useState, useEffect } from 'react';
    import { useRouter } from 'next/navigation';
    import firebaseApp from '../../../../../firebase'
    import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc, query } from 'firebase/firestore'

    //Componentes de React
    import Appbar from './components/Appbar'
    
    //Imagenes

    const db = getFirestore(firebaseApp)


    export default function ContratoCreate(){

        const router = useRouter()

        const valorInicialContratoEquipos = {
            nombre:'',
            equipo:'',
            proveedor:'',
            objeto:'',
            valor:'',
            periodo:'',
            fechainicio:'',
            fechafin:'',
            acuerdoPago:'',
            valorunitario:''
        }
        
        const valorInicialContratoServicios = {
            servicio:'',
            proveedor:'',
            objeto:'',
            valor:'',
            valorDia:'',
            fechainicio:'',
            plazo:'',
            periodo:'',
        }

        const [ contratosEquipos, setContratosEquipos ] = useState(valorInicialContratoEquipos)

        const [ contratosServicios, setContratosServicios ] = useState(valorInicialContratoServicios)
        
        const [ optionsEquipos, setoptionsEquipos ] = useState([])
        
        const [ optionsServicios, setoptionsServicios ] = useState([])

        const [ isSelected, setisSelected ] = useState(false)


        useEffect( () => {

            // const getDocsList = doc(collection(db, 'equipos'));
            // console.log(typeof getDocsList)

            const querySnapshot = getDocs(collection(db,'equipos'))
            querySnapshot.then((snapshot) => {
                const EquiposOptions = []
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    EquiposOptions.push({
                        id: data.id,
                        nombre: data.nombre,
                    });
                });
                setoptionsEquipos((dataOptions) => [...dataOptions, EquiposOptions]);
                console.log(EquiposOptions[0]['nombre']);
                console.log(typeof EquiposOptions);
            })
            .catch((error) => {
                console.log(error);
            })

        }, []);
        

        const obtenerDatosEquipos = (e) => {
            const { name, value } = e.target;
            setContratosEquipos({...contratosEquipos, [name]:value})
        }

        const obtenerDatosServicios = (e) => {
            const { name, value } = e.target;
            setContratosServicios({...contratosServicios, [name]:value})
        }

        const CreaerContratoEquipo = async(e)=>{
            e.preventDefault();
            try {
                await addDoc(collection(db,'contratos_equipos'),{
                    ...contratosEquipos
                })
            } catch (error) {
                console.log(error);
            }
            router.push('/pages/contratos')
        }

        const CreaerContratoServicio = async(e)=>{
            e.preventDefault();
            try {
                await addDoc(collection(db,'contratos_servicios'),{
                    ...contratosServicios
                })
            } catch (error) {
                console.log(error);
            }
            router.push('/pages/contratos')
        }

        return (
            <>
                <NavBar
                    tittle = 'Creando Contrato'
                />
                <div className='py-10'>
                    <div className="w-full max-w-md mx-auto">
                        <div className='bg-white shadow-md rounded px-8 py-6 pb-6 mb-4'>
                            <label className="block text-gray-700 font-bold mb-2 text-start">
                                Por favor selecciona el tipo de contrato que deseas crear
                            </label>
                            <div className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' onClick={() => setisSelected(true)}>
                                Contrato de Equipo
                            </div>
                            <dir className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' onClick={() => setisSelected(false)}>
                                Contrato de Servicio
                            </dir>
                        </div>
                        <div className={`bg-transparent  px-8 pt-6 pb-8 mb-4 ${
                                    isSelected ? 'block' : 'hidden'
                                }`}>
                            <div className='bg-blue-500 w-full text-white rounded-t px-2 py-2'>
                                Creando Contrato de Equipo
                            </div>
                            <form className='bg-white shadow-md rounded-b px-8 pt-6 pb-8 mb-4' 
                                onSubmit={CreaerContratoEquipo}>
                                <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Equipo
                                </label>
                                <select 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    name="nombre"
                                    value={contratosEquipos.equipo}
                                    onChange={obtenerDatosEquipos}
                                >
                                    {
                                        optionsEquipos.map((obj, index) => (
                                            <option key={index} id={obj[index]['id']} value={ obj[index]['nombre'] }> { obj[index]['nombre'] } </option>
                                        ))
                                    }            
                                </select>
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Proovedor
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosEquipos.nombre}
                                    onChange={obtenerDatosEquipos}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Objeto de Contrato
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosEquipos.nombre}
                                    onChange={obtenerDatosEquipos}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Valor
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosEquipos.nombre}
                                    onChange={obtenerDatosEquipos}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Periodo
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosEquipos.nombre}
                                    onChange={obtenerDatosEquipos}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Fecha de Inicio
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosEquipos.nombre}
                                    onChange={obtenerDatosEquipos}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Fecha Fin
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosEquipos.nombre}
                                    onChange={obtenerDatosEquipos}
                                />
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                                    Crear Contrato Equipos
                                </button>
                            </form>
                        </div>
                        <div className={`bg-transparent  px-8 pt-6 pb-8 mb-4 ${
                                    isSelected ? 'hidden' : 'block'
                                }`}>
                            <div className='bg-blue-500 w-full text-white rounded-t px-2 py-2'>
                                Creando Contrato de Servicio
                            </div>
                            <form className='bg-white shadow-md rounded-b px-8 pt-6 pb-8 mb-4' 
                                onSubmit={CreaerContratoServicio}>
                                <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Servicio
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Proovedor
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Objeto de Contrato
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Valor
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Valor por dia
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Fecha de Inicio
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Plazo
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                <label className="block text-gray-700 font-bold mb-2 text-start">
                                    Periodo
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="nombre"
                                    type="text"
                                    placeholder="Ingrese el nombre de la gerencia" 
                                    name='nombre'
                                    value={contratosServicios.nombre}
                                    onChange={obtenerDatosServicios}
                                />
                                </div>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                                    Crear Contrato de Servicio
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }