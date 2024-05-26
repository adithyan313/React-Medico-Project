import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const checkguest=(Component)=>{
    function Wrapper(props) {
        var user = useSelector(store=>store.auth.user);
        var navigate = useNavigate();
        useEffect(()=>{
            if (user) {
                navigate('/');
            }
        },[user]);
        return <Component {...props}/>
    }
    return Wrapper;
}
export default checkguest;