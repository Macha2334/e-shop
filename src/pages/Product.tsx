import { prodDataType } from "../types/productDataType"
import { addToCart } from "./Cart/cartSlice"
import { useDispatch } from "react-redux";
import {OverlayTrigger, Popover} from "react-bootstrap"
import {useState} from "react"
import './Home.scss'
import {FaStar} from "react-icons/fa"
import { useNavigate } from "react-router";

const Product = (props:{data:prodDataType}) =>{
    //console.log('inside products-',props.data);
    const navigate=useNavigate();
    const [added,setAdded] = useState(false);
    const dispatch=useDispatch();
    const handleAddProduct =()=>{
        dispatch(addToCart(props.data));
    }
    const handleProdClick=()=>{
        navigate(`/product/${props.data.id}`,{replace:true})
    }
    
    const popover=(
                <Popover className="cart-add-alert" >
                    <Popover.Header></Popover.Header>
                    <Popover.Body><div className="cart-add-success">Added to Cart, click on Cart to view/proceed further.</div></Popover.Body>
                </Popover>
                )
    return(
        <div className="col-sm-3">
            <div className="item-detail">
                <img src={props.data.image} className="item-image" alt={props.data.title}/>
                <a className="item-title" onClick={handleProdClick}>{props.data.title}</a>

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