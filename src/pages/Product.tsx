import { prodDataType } from "../types/productDataType"
import { addToCart } from "./Cart/cartSlice"
import { useDispatch } from "react-redux";
import {OverlayTrigger, Popover} from "react-bootstrap"
import {useState} from "react"
import './Home.scss'
import {FaStar} from "react-icons/fa"

const Product = (props:{data:prodDataType}) =>{
    const [added,setAdded] = useState(false);
    const dispatch=useDispatch();
    const handleAddProduct =()=>{
        //setAdded(true);
        dispatch(addToCart(props.data));
    }
    const popover=(
                <Popover >
                    <Popover.Header></Popover.Header>
                    <Popover.Body><div className="cart-add-success">Added to Cart</div></Popover.Body>
                </Popover>
                )
    return(
        <div className="col-sm-3">
            <div className="item-detail">
                <img src={props.data.image} className="item-image" alt={props.data.title}/>
                <div>{props.data.title}</div>
                <div className="price">Price:${props.data.price}</div>
                <OverlayTrigger trigger="click"  overlay={popover} rootClose>
                    <button onClick={handleAddProduct}>Add to Cart</button>
                </OverlayTrigger>
                <div> {props.data.rating.rate} <FaStar/>  {`(${props.data.rating.count})`}</div>
            </div>
        </div>
    )
}
export default Product;