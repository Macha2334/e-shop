import { OverlayTrigger,Popover } from "react-bootstrap";
import { addToCart } from "./Cart/cartSlice";
import { useDispatch } from "react-redux";
import { prodDataType } from "../types/productDataType";
import './Home.scss'

interface Props{
    data:prodDataType;
}
const AddProductBtn=(props:Props)=>{
    const dispatch=useDispatch();
    const popover=(
        <Popover className="cart-add-alert" >
            <Popover.Header></Popover.Header>
            <Popover.Body><div className="cart-add-success">Added to Cart, click on Cart to view/proceed further.</div></Popover.Body>
        </Popover>
        )
        const handleAddProduct =()=>{
            dispatch(addToCart(props.data));
        }

    return(
        <OverlayTrigger trigger="click"  overlay={popover} rootClose>
            <button onClick={handleAddProduct}>Add to Cart</button>
        </OverlayTrigger>
    )
}
export default AddProductBtn;