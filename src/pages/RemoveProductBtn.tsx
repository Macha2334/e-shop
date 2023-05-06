import { OverlayTrigger,Popover } from "react-bootstrap";
import { removeFromCart } from "./Cart/cartSlice";
import { useDispatch } from "react-redux";
import { prodDataType } from "../types/productDataType";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

interface Props{
    data:prodDataType;
}
const RemoveProductBtn=(props:Props)=>{
    const dispatch=useDispatch();
    const [rem,setRem]=useState<any>(false);

    const handleRemoveProduct =()=>{
        setRem(true)
        setTimeout(()=>{
            dispatch(removeFromCart(props.data));
        },1000)
}

    return(
        <>
            <FaTrash onClick={handleRemoveProduct} style={rem && {...{color:"red"}}}/>
        </>
    )
}
export default RemoveProductBtn;