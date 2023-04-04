import { useFormik } from "formik";
import { Gerencias } from "@/api";
import { initialValue, validationSchema } from "./CreateGerencia.form";

const GerenciaCtrl = new Gerencias();

export function CreateGerencia(props) {
  const formik = useFormik({
    initialValues:initialValue(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        await GerenciaCtrl.register(formValue)
        props.onClose();
      }catch(e){
        console.error(e);
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2 text-center">
          Nombre de la Gerencia
      </label>
      <input 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nombre"
          type="text"
          placeholder="Ingrese el Nombre de la Gerencia" 
          name='nombre'
          value={formik.values.nombre} 
          onChange={formik.handleChange} 
          error={formik.errors.nombre}
      />
      </div>
      <input type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" value="Registrar Nueva gerencia" />
    </form>
  )
}
