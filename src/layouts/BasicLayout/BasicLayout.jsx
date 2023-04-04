import { Appbar } from "@/components/Appbar";
import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export  function BasicLayout(props) {
  
  const { children } = props;
  const { user } = useAuth();
  const  router  = useRouter();
  
  if(!user) {
    router.push("/join/sign-in")
    return null
  }

  return (
    <>
      <Appbar/>
      { children } 
    </>
  )

}
