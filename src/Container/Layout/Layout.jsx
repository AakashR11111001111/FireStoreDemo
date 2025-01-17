import { useContext, useEffect } from "react";
import Header from "../../Component/Header/Header";
import { Outlet, useNavigate } from 'react-router-dom'
import { userCtx } from "../../App";
const Layout = () => {
    const ctx = useContext(userCtx);
    const navigate = useNavigate();

    useEffect(()=>{
        const localStorageUser = localStorage.getItem("UserDetails");
        if(localStorageUser){
            const details = JSON.parse(localStorageUser);
            ctx.setUser(details);
        }
        const isLoggedIn = ctx.user.displayName || localStorageUser;
        console.log("LOGGED IN KI VALUE =>", isLoggedIn);
        if(!isLoggedIn){
            console.log("not OF IS LOGGED IN",!isLoggedIn);
            navigate("/");
        }
    },[])
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}
export default Layout;