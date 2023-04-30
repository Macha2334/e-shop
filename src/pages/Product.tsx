import { prodDataType } from "../types/productDataType"
import {useState} from "react"
import './Home.scss'
import {FaStar} from "react-icons/fa"
import { useNavigate } from "react-router";
import AddProductBtn from "./AddProductBtn";

const Product = (props:{data:prodDataType}) =>{
    //console.log('inside products-',props.data);
    const navigate=useNavigate();
    const [added,setAdded] = useState(false);
    
    const handleProdClick=()=>{
        navigate(`/product/${props.data.id}`,{replace:true})
    }
    
    return(
        <div className="col-sm-3">
            <div className="item-detail">
                <img src={props.data.image} className="item-image" alt={props.data.title}/>
                <a className="item-title" onClick={handleProdClick}>{props.data.title}</a>

                <div className="price">Price:${props.data.price}</div>
                <AddProductBtn data={props.data}/>
                <div> {props.data.rating.rate} <FaStar/>  {`(${props.data.rating.count})`}</div>
            </div>
        </div>
    )
}
export default Product;