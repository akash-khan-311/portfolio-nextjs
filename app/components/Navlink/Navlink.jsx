import Link from "next/link";
import { useRouter } from "next/router";


const Navlink = ({href,children}) => {
    const router = useRouter()
    const isActive = router.pathname === href
    return (
        <>
            <Link href={href}>
                <a className={isActive && 'active'}>{children}</a>
            </Link>
        </>
    );
};

export default Navlink;