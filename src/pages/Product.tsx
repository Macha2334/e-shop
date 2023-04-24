import { prodDataType } from "../types/productDataType"
import { addToCart } from "./Cart/cartSlice"
import { useDispatch } from "react-redux";
const Product = (props:{data:prodDataType}) =>{
    const dispatch=useDispatch();
    const handleAddProduct =()=>{
        //console.log(props.data);
        dispatch(addToCart(props.data));
        //console.log('adding prod to cart')
    }
    return(
        <div className="col-sm-4">
            <div className="item-detail">
                <img src={props.data.image} className="item-image" alt={props.data.title}/>
                <div>{props.data.title}</div>
                <div className="price">Price:${props.data.price}</div>
                <button onClick={handleAddProduct}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;