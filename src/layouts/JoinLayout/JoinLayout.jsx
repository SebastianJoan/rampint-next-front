import { useAuth } from "@/hooks";
import { useRouter } from "next/router";

export function JoinLayout(props) {

    const { children } = props;
    const { user } = useAuth();
    const  router  = useRouter();

    if(user) {
        router.push("/")
        return null
    }

    return (
        <>
            {children}
        </>
    )
}
