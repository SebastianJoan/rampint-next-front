import { useFormik } from "formik";
import { Auth } from "@/api";
import { useAuth } from "@/hooks";
import { initialValue, validationSchema } from "./LoginForm.form";
import { useRouter } from "next/router";


const authCtrl = new Auth();

export function LoginForm() {

  const router = useRouter();
  const {login} = useAuth();


  const formik = useFormik({
    initialValues:initialValue(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try{
        const response =  await authCtrl.login(formValue);
        login(response.body);
      }catch(e){
        console.error(e);
        console.error(error);
      }
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className=" w-full flex flex-col justify-center items-start justify-items-center gap-4 mt-3">
        <div className="flex flex-col w-full h-auto">
            <div className="flex gap-2">
                <span>Correo Electronico </span><h1 className="font-bold text-red-500">*</h1>
            </div>
            <input name="email" className="w-full h-auto px-4 py-2 border border-gray-800 rounded-md  shadow-sm   focus:outline-none " type="email" placeholder="Ejemplo: JhonDoe@ejemplo.com" value={formik.values.email} onChange={formik.handleChange} error={formik.errors.email} required/>
        </div>
        <div className="flex flex-col w-full h-auto">
            <div className="flex gap-2">
                <span>Contraseña </span><h1 className="font-bold text-red-500">*</h1>
            </div>
            <input name="password" type="password" placeholder="Contraseña" value={formik.values.password} onChange={formik.handleChange} error={formik.errors.password}  className="w-full h-auto px-4 py-2 border border-gray-800 rounded-md  shadow-sm   focus:outline-none "/>
        </div>
        <input type="submit" value = "Iniciar Sesion"  className="w-full cursor-pointer h-auto bg-yellow-500 flex justify-center items-center justify-items-center border text-white border-gray-800 rounded-md  shadow-smpx-4 py-2 hover:bg-yellow-800 hover:transition-colors"/>
    </form>
  )
}
