
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { initialValue, validationSchema } from "./RegisterForm.form";

const authCtrl = new Auth();


export function RegisterForm() {

  const router = useRouter();

  const formik = useFormik({
    initialValues:initialValue(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        await authCtrl.register(formValue)
        router.push("/join/sign-in")
      }catch(e){
        console.error(e);
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} method="POST"  className=" w-full flex flex-col justify-center items-start justify-items-center gap-4 mt-3">
        <div className="flex flex-col w-full h-auto">
            <div className="flex gap-2">
                <span>Correo Electronico </span><h1 className="font-bold text-red-500">*</h1>
            </div>
            <input name="email" className="w-full h-auto px-4 py-2 border border-gray-800 rounded-md  shadow-sm   focus:outline-none " type="email" placeholder="Ejemplo: JhonDoe@ejemplo.com" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} required/>
        </div>
        <div className="flex w-full gap-2 justify-center items-center justify-items-center">
            <div className="flex flex-col w-1/2 h-auto">
                <div className="flex gap-2">
                    <span>Nombres</span><h1 className="font-bold text-red-500">*</h1>
                </div>
                <input name="name"  className="w-full h-auto px-4 py-2 border border-gray-800 rounded-md  shadow-sm   focus:outline-none " type="text" placeholder="Ejemplo: Jhon Doe" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name } required/>
            </div>
            <div className="flex flex-col w-1/2 h-auto">
                <div className="flex gap-2">
                    <span>Apellidos</span> <h1 className="font-bold text-red-500">*</h1>
                </div>
                <input name="name"  className="w-full h-auto px-4 py-2 border border-gray-800 rounded-md  shadow-sm   focus:outline-none " type="text" placeholder="Ejemplo: Jhon Doe" value={formik.values.name} onChange={formik.handleChange} error={formik.errors.name } required/>
            </div>
        </div>
        <div className="flex flex-col w-full h-auto">
            <div className="flex gap-2">
                <span>Contraseña</span> <h1 className="font-bold text-red-500">*</h1>
            </div>
            <input name="password" className="w-full h-auto px-4 py-2 border border-gray-800 rounded-md  shadow-sm   focus:outline-none " type="password" placeholder="Por favor ingrese una contraseña" value={formik.values.password} onChange={formik.handleChange} required error={formik.errors.password}/>
        </div>
        <input type="submit" value = "Registrar"  className="w-full cursor-pointer h-auto bg-yellow-500 flex justify-center items-center justify-items-center border text-white border-gray-800 rounded-md  shadow-smpx-4 py-2 hover:bg-yellow-800 hover:transition-colors"/>
    </form>
  )
}
