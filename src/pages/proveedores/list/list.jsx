
    //NodeModules
    import firebaseApp from '../../../../firebase'
    import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc} from 'firebase/firestore'
    import { async } from '@firebase/util'
    const db = getFirestore(firebaseApp)

    //Componentes de React
    import Appbar from './components/Appbar'
    import RowComponent from '@/app/components/RowComponent';
    import Search from '@/app/components/Search';

    //Imagenes
    import ProveedoresIcon from '../../../../public/icons/ProveedoresIcon.png'

    const fetchProveedor = async( context ) => {
        const querySnapshot = await getDocs(collection(db,'proovedores'))
                      const docs = []
                      querySnapshot.forEach((doc)=>{
                          docs.push({...doc.data(), id: doc.id})
                      })
        return docs
    }

    export default async function ProveedoresPage(){
        
        const gerenciasData = await fetchProveedor(); 
        
        return (
            <>
                <NavBar tittle = 'Proveedores' />
                <Search
                    buttonTittle = 'Crear Nuevo Proveedor'
                    href = '/pages/proveedores/create'
                />
                <div className='bg-transparent h-auto px-5 py-5 flex flex-col justify-center justify-items-center items-center gap-4'>
                    { 
                        gerenciasData.map((obj) => (
                            <RowComponent
                                key        = { obj.id }
                                src        = {ProveedoresIcon}
                                tittle     = 'Proveedor:'
                                TextTittle = { obj.nombre }
                                Infohref   = {'/pages/proveedores/info/' + obj.id }
                                editarHref = {'/pages/proveedores/edit/' + obj.id }
                            />
                        ))
                    }
                </div>
            </>
        );
    }