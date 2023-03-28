import { useAuth } from "@/hooks";
import Link from "next/link";
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

        <div>

            <div>
                <Link href="/">
                    
                </Link>
                <Link href="/">
                    
                </Link>
            </div>

            <div>{children}</div>
            <div></div>
        </div>
    )
}
