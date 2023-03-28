
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
    import FacturaIcon from '../../../../public/icons/FacturaIcon.png'

    const fetchFacturas = async( context ) => {
        const querySnapshot = await getDocs(collection(db,'facturas'))
                      const docs = []
                      querySnapshot.forEach((doc)=>{
                          docs.push({...doc.data(), id: doc.id})
                      })
        console.log(docs)
        return docs
    }



    export default async function FacturaPage(){

        const facturasData = await fetchFacturas();

        return (
            <>
                <NavBar tittle = 'Facturas' />
                <Search
                    buttonTittle = 'Crear Nueva Factura'
                    href='/pages/facturas/create'
                />
                <div className='bg-transparent h-auto px-5 py-5 flex flex-col justify-center justify-items-center items-center gap-4'>
                    { 
                        facturasData.map((obj) => (
                            <RowComponent
                                key        = { obj.id }
                                src        = {FacturaIcon}
                                tittle     = 'Equipo:'
                                TextTittle = { obj.nombre }
                                Infohref   = {'/pages/facturas/info/' + obj.id }
                                editarHref = {'/pages/facturas/edit/' + obj.id }
                            />
                        ))
                    }
                </div>
            </>
        );
    }