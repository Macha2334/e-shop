import { useState } from "react";
import { Popover,Button,Modal, Alert } from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"
import {FaTrash} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { removeFromCart,clearCart } from "./cartSlice";
import { prodDataType } from "../../types/productDataType";
import  './Cart.scss'

const CartPopOver =(props:any)=>{
    const [open,setOpen] = useState(false);
    const dispatch= useDispatch();
    const handlePlaceOrder=()=>{
        setOpen(false);
        dispatch(clearCart());
    }
    const totalOrderPrice=
        props.items.length >0  ? props.items.map(
            (item:prodDataType)=>item.price).reduce(
                (sum=0,cur:any)=>sum+cur
            ) : 0;
        
    return(
        <>
            <div className="cart-icon" onClick={()=>setOpen(true)}><FaShoppingCart/><span className="badge">{props.items.length}</span></div>
            <Modal show={open} onHide={()=>setOpen(false)}>
                <Modal.Header closeButton> Cart Details</Modal.Header>
                <Modal.Body>{props.items.map((item:any)=>{

                    return(<div>
                            <div className="item-detail">
                                <img src={item.image} className="item-image img-responsive" alt={item.title}/>
                                <div>{item.title}</div>
                                <div className="price">Price:${item.price}</div>
                                <a className="close-cart-item" onClick={()=>dispatch(removeFromCart(item))}><FaTrash/></a>
                            </div>
                    </div>)

                    })}
                    <div className="total-value">{`Total Order Price: $ ${totalOrderPrice} `}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handlePlaceOrder}>Place Order</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CartPopOver;