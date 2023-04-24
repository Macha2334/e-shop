import { prodDataType } from "../types/productDataType"
import { addToCart } from "./Cart/cartSlice"
import { useDispatch } from "react-redux";
const Product = (props:prodDataType) =>{
    const dispatch=useDispatch();
    const handleAddProduct =()=>{
        console.log(props);
        dispatch(addToCart(props));
        console.log('adding prod to cart')
    }
    return(
        <div className="col-sm-4">
            <div className="item-detail">
                <img src={props.image} className="item-image" alt={props.title}/>
                <div>{props.title}</div>
                <div className="price">Price:${props.price}</div>
                <button onClick={handleAddProduct}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;