import { useState } from "react";
import { Popover,Button,Modal, Alert } from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"
import {FaTrash} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { removeFromCart,clearCart } from "./cartSlice";
import { prodDataType } from "../../types/productDataType";
import Table from "react-bootstrap/Table";
import { useMemo } from "react";
import {formatNumber} from "../../Utils/Utils"
import  './Cart.scss'

const CartPopOver =(props:any)=>{
    const [open,setOpen] = useState(false);
    const dispatch= useDispatch();
    const handlePlaceOrder=()=>{
        setOpen(false);
        dispatch(clearCart());
    }

    const totalOrderPrice= useMemo(
        ()=>
            props.items.length >0  ? props.items.map(
                (item:prodDataType)=>item.price).reduce(
                    (sum=0,cur:any)=>sum+cur
                ) : 0
        ,[props.items]
    )
        
    return(
        <>
            <div className="cart-icon" onClick={()=>setOpen(true)}><FaShoppingCart/><sup>{props.items.length}</sup></div>
            <Modal show={open} onHide={()=>setOpen(false)}>
                <Modal.Header closeButton> Cart Details</Modal.Header>
                <Modal.Body>
                    <Table striped>
                        <thead>
                            <th>#</th>
                            <th>Item</th>
                            <th>Title</th>
                            <th>MRP</th>
                            <th>Discount</th>
                            <th>Price</th>
                        </thead>
                        <tbody>
                            {props.items.map((item:prodDataType,index:number)=>{
                                return(<tr>
                                    <td>{index+1}</td>
                                    <td><img src={item.image} className="item-image img-responsive" alt={item.title}/></td>
                                    <td>{item.title}</td>
                                    <td>{formatNumber(item.price)}</td>
                                    <td>{"60%"}</td>
                                    <td>{formatNumber(item.price * 0.6)}</td>
                                </tr>)
                                
                            })}
                            <tr  className="total-row">
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>{totalOrderPrice}</td>
                                <td>{"60%"}</td>
                                <td>{formatNumber(totalOrderPrice * 0.6)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <div className="savedMsg">{`You have Saved $${formatNumber(totalOrderPrice*0.4)}`}</div>
                    <Button onClick={handlePlaceOrder}>Place Order</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CartPopOver;