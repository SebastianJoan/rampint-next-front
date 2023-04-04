import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { initialValue, validationSchema } from "./CreateEquipo.form";

const authCtrl = new Auth();

export function CreateEquipo(props) {

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
    <form onSubmit={formik.handleSubmit} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-start">
              Nombre del Equipo
          </label>
          <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nombre"
              type="text"
              placeholder="Ingrese el nombre del Equipo" 
              name='nombre'
              value={formik.values.nombre} 
              onChange={formik.handleChange} 
              error={formik.errors.nombre}
          />
      </div>
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-start">
              Capacidad
          </label>
          <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="capacidad"
              type="text"
              placeholder="Ingrese la cantidad" 
              name='capacidad'
          />
      </div>
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-start">
              Modelo
          </label>
          <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="modelo"
              type="text"
              placeholder="Ingrese el modelo" 
              name='modelo'
          />
      </div>
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-start">
              Placa
          </label>
          <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="placa"
              type="text"
              placeholder="Ingrese la placa" 
              name='placa'
          />
      </div>
      <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-start">
              Referencia
          </label>
          <input 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="referencia"
              type="text"
              placeholder="Ingrese la referencia" 
              name='referencia'
          />
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
          Registrar Nuevo Equipo
      </button>
    </form>
  )
}
