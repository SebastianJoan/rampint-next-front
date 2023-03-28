

    //Componentes de React

    //Imagenes
    import { Acciones } from '@/components/Acciones/Acciones';
    import { Appbar } from '@/components/Appbar';
    import Image from 'next/image';
    import gerencia from '../../../../public/img/build.png'

    const fetchGerencias = ()  => {
        return fetch('https://localhost:8000/api/gerencias')
        .then(response => response.json())
        .catch(error => console.error(error));
        console.log(response)
    }

    export default async function GerenciaPage(){

        const gerencias = await fetchGerencias();

        return (
            <>
                <Appbar/>
                <Acciones page="Crear Nueva Gerencia"/>
                <div className='bg-gray-800 h-screen px-5 py-5 flex flex-col justify-start justify-items-center items-center gap-4'>
                    {
                        gerencias.map(post => (
                            <div key={post.id} className='w-full h-auto bg-white flex justify-between items-center justify-items-center'>
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
                                    <span> Gerencia: { post.nombre } </span>
                                </div>
                                <div className='w-auto h-full py-2 px-2 flex justify-center items-center justify-items-center gap-4'>
                                    <button className='flex justify-center items-center justify-items-center bg-green-500 hover:bg-green-800 h-full px-4 py-2 text-white hover:transition-colors rounded-md '>
                                        Informacion
                                    </button>
                                    <button className='flex justify-center items-center justify-items-center bg-yellow-500 hover:bg-yellow-800 h-full px-4 py-2 text-white hover:transition-colors rounded-md'>
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
