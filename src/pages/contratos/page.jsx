
    //NodeModules

    //Componentes de React
    import Appbar from './components/Appbar'
    import RowComponent from '@/app/components/RowComponent';
    import Search from '@/app/components/Search';

    //Imagenes


    export default async function ContratoPage(){

        return (
            <>
                <NavBar tittle = 'Contratos' />
                <Search
                    buttonTittle = 'Crear Nuevo Contrato'
                    href='/pages/contratos/create'
                />
                <div className='bg-transparent h-auto px-5 py-5 flex flex-col justify-center justify-items-center items-center gap-4'>
                </div>
            </>
        );
    }