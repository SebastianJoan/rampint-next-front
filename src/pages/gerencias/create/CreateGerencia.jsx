import { BasicLayout } from "@/layouts";


    export default function CreateGerencia(){
        return (
            <>  
            <BasicLayout>
                <div className='py-60'>
                    <div className="w-full max-w-md mx-auto">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2 text-center">
                                Nombre de la gerencia
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Ingrese el nombre de la gerencia" 
                                name='nombre'
                                //value={data.nombre}
                                //onChange={obtenerInputs}
                            />
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                                Crear gerencia
                            </button>
                        </form>
                    </div>
                </div>
            </BasicLayout>
            </>
        );
    }