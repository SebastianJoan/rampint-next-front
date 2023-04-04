
    //Nodemodules
    import { useState, useEffect } from 'react';

    //Componentes de React
    import { Appbar } from '@/components/Appbar';
    import { Acciones } from '@/components/Acciones';
    import { CreateProveedor } from '@/components/CreateProveedor';
    import { authFetch, ENV } from "@/utils";

    import proveedor_img from '../../../public/img/proveedor.png'
    import Image from 'next/image';

    export default function ProveedoresPage(){
        
        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
              try {
                const params = {
                    method: "GET",
                };
                const response = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.PROVEEDORES}`, params);
                const json = await response.json();
                setData(json.body);
              } catch (error) {
                console.error(error);
              }
            };        
            fetchData();
        }, []);

        if (!data) {
            return (
                <>
                    <Appbar/>
                    <Acciones page="Registrar Nuevo Proveedor">
                        <CreateProveedor/>
                    </Acciones>
                    <div className='bg-gray-800 h-screen px-5 py-5 flex flex-col justify-start justify-items-center items-center gap-4'>
                        
                    </div>
                </>
            )
        }
        
        return (
            <>
                <Appbar/>
                <Acciones page="Registrar Nuevo Proveedor">
                    <CreateProveedor/>
                </Acciones>
                <div className='bg-gray-800 h-auto px-5 py-5 flex flex-col justify-start justify-items-center items-center gap-4'>
                    {
                       
                       data.map( proveedor  => (
                           <div key={proveedor.id} className='w-full h-auto bg-white flex justify-between items-center justify-items-center'>
                               <div className='flex justify-center px-4 py-2 items-center justify-items-center gap-4'>
                                   <div className=' w-12 h-12'>
                                       <Image
                                           src={ proveedor_img }
                                           alt="Rampint Image"
                                           width={500}
                                           height={500}
                                           className="mb-8 mx-auto"
                                           priority="true"
                                       />
                                   </div>
                                   <span> { proveedor.nombre } </span>
                               </div>
                               <div className='w-auto h-full py-2 px-2 flex justify-center items-center justify-items-center gap-4'>
                                   <button className='flex justify-center items-center justify-items-center bg-green-500 hover:bg-green-800 h-full px-4 py-2 text-white hover:transition-colors '>
                                       Informacion
                                   </button>
                                   <button className='flex justify-center items-center justify-items-center bg-yellow-500 hover:bg-yellow-800 h-full px-4 py-2 text-white hover:transition-colors'>
                                       Editar
                                   </button>
                               </div>
                           </div>
                       ))
                   }
                </div>
            </>
        );
    }