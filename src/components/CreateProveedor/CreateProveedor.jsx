import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { initialValue, validationSchema } from "./CreateProveedor.form";

const authCtrl = new Auth();

export function CreateProveedor(props) {

  const router = useRouter();

  const formik = useFormik({
    initialValues:initialValue(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        await authCtrl.register(formValue)
        props.onClose();
      }catch(e){
        console.error(e);
      }
    }
  })

  return (
    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
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
        />
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
            Crear Proveedor
        </button>
    </form>
  )
}
