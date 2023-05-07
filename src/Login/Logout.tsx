import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { loggedOut } from "./loginSlice";
import { useState,useEffect } from "react";

const Logout = ()=>{
    //const [logout,setLogout]=useState(false);
    //const navigate=useNavigate();
    const dispatch=useDispatch();

    useEffect(()=>{
       // console.log('log out click')
            //setLogout(true)
        //dispatch(loggedOut);
    },[])

   
    
    return(
        <h2>You have been logged out</h2>
    )
}
export default Logout;