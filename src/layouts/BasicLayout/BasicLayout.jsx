import { Appbar } from "@/components/Appbar";

export  function BasicLayout(props) {
  
  const { children } = props;

  return (
    <>
      <Appbar/>
      { children } 
    </>
  )

}
