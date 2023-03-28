import { JoinLayout } from "@/layouts"
import Link from "next/link"
import { RegisterForm } from "../../../components/Auth"
import registerImage from '../../../../public/img/LoginUser.png'
import Image from "next/image"
import logo from '../../../../public/icons/logo.png'
import logoBg from '../../../../public/img/login.png'

export default function SignUpPage() {
  return (
    <>
        <JoinLayout>
            <div class=" mt-9 md:mt-0 flex flex-col md:flex-row h-screen bg-gray-200">
                <div class="bg-white w-full md:w-1/3 flex justify-center items-center">
                    <div class="w-4/5">
                        <Image
                            src={ logo }
                            alt="Rampint Image "
                            width={500}
                            height={500}
                            className="mb-8 mx-auto"
                            priority="true"
                        />
                        <RegisterForm/>
                    </div>
                </div>
                <div class="hidden md:flex bg-cover bg-center w-full h-screen md:h-auto md:w-2/3">
                    <Image
                        src={ logoBg }
                        alt="img_background_login"
                        width={2000}
                        height={1500}
                        className="w-full h-full object-cover"
                        priority="true"
                    />
                </div>
            </div>
        </JoinLayout>
    </>
  )
}
