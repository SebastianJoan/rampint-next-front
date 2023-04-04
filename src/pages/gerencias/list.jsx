
    import { Acciones } from '@/components/Acciones/Acciones';
    import { Appbar } from '@/components/Appbar';
    import Modal from '@/components/Modal/Modal';
    import Image from 'next/image';
    import gerencia from '../../../public/img/build.png'
    import { useState, useEffect } from 'react';
    import { CreateGerencia } from '@/components/CreateGerencia';
    import { authFetch, ENV } from "@/utils";
    import Link from 'next/link';

    export default function GerenciaPage(){

        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
              try {
                const params = {
                    method: "GET",
                };
                const response = await authFetch(`${ENV.API_URL}/${ENV.ENDPOINTS.GERENCIAS}`, params);
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
                    <Acciones page="Crear Nueva Gerencia">
                        <CreateGerencia/>
                    </Acciones>
                    <div className='bg-gray-800 h-screen px-5 py-5 flex flex-col justify-start justify-items-center items-center gap-4'>
                        
                    </div>
                    <Modal/>
                </>
            )
        }

        return (
            <>
                <Appbar/>
                <Acciones page="Crear Nueva Gerencia">
                    <CreateGerencia />
                </Acciones>
                <div className='bg-gray-800 h-auto px-5 py-5 flex flex-col justify-start justify-items-center items-center gap-4'>
                    {
                       
                       data.map( gerencias => (
                           <div key={gerencias.id} className='w-full h-auto bg-white flex justify-between items-center justify-items-center'>
                               <div className='flex justify-center px-4 py-2 items-center justify-items-center gap-4'>
                                   <div className=' w-12 h-12'>
                                       <Image
                                           src={ gerencia }
                                           alt="Rampint Image"
                                           width={500}
                                           height={500}
                                           className="mb-8 mx-auto"
                                           priority="true"
                                       />
                                   </div>
                                   <span> { gerencias.nombre } </span>
                               </div>
                               <div className='w-auto h-full py-2 px-2 flex justify-center items-center justify-items-center gap-4'>
                                   <Link href={`/gerencias/info/${ gerencias.id }`} className='flex justify-center items-center justify-items-center bg-green-500 hover:bg-green-800 h-full px-4 py-2 text-white hover:transition-colors '>
                                       Informacion
                                   </Link>
                                   <Link href={`/gerencias/info/${ gerencias.id }`} className='flex justify-center items-center justify-items-center bg-yellow-500 hover:bg-yellow-800 h-full px-4 py-2 text-white hover:transition-colors'>
                                       Editar
                                   </Link>
                               </div>
                           </div>
                       ))
                   }
                </div>
            </>
        );
    }
