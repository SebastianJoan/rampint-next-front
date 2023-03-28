import * as Yup from 'yup'

export function initialValue() {
  return {
        email: "",
        password:"",
    }
}

export function validationSchema(){
    return Yup.object({
        email: Yup.string().required(true),
        password:Yup.string().required(true),
    })
}
