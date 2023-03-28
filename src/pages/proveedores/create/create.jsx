
    'use client'

    //NodeModules
    import { useState } from 'react';
    import { useRouter } from 'next/navigation';
    import firebaseApp from '../../../../../firebase'
    import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'


    //Componentes de React
    import Appbar from './components/Appbar'
    
    //Imagenes

    const db = getFirestore(firebaseApp)

    export default function GerenciaCreate(){

        const router = useRouter()

        const valorInicial = {
            nombre:''
        }

        const [ data, setData ] = useState(valorInicial)

        const obtenerInputs = (e) => {
            const { name, value } = e.target;
            setData({...data, [name]:value})
        }

        const enviarInfo = async(e)=>{
            e.preventDefault();
            try {
                await addDoc(collection(db,'proovedores'),{
                    ...data
                })
            } catch (error) {
                console.log(error);
            }
            router.push('/pages/proveedores')
        }

        return (
            <>
                <NavBar
                    tittle = 'Creando Proveedor'
                />
                <div className='py-60'>
                    <div className="w-full max-w-md mx-auto">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={enviarInfo}>
                            <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2 text-center">
                                Nombre del proveedor
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Ingrese el nombre del proveedor " 
                                name='nombre'
                                value={data.nombre}
                                onChange={obtenerInputs}
                            />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                                Crear Proveedor
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }