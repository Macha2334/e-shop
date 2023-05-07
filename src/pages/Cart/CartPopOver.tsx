import { useState } from "react";
import { Popover,Button,Modal,OverlayTrigger } from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"
import {FaTrash} from "react-icons/fa"
import { useDispatch } from "react-redux";
import { removeFromCart,clearCart } from "./cartSlice";
import { prodDataType } from "../../types/productDataType";
import Table from "react-bootstrap/Table";
import { useMemo } from "react";
import {formatNumber,/*getOrderNum*/} from "../../Utils/Utils"
import  './Cart.scss';
import { PopoverHeader,PopoverBody } from "react-bootstrap";
import RemoveProductBtn from "../RemoveProductBtn";

const CartPopOver =(props:any)=>{
    const [open,setOpen] = useState(false);
    const dispatch= useDispatch();
    //getOrderNum();
    //console.log(localStorage)
    const handlePlaceOrder=()=>{
        //add the order in local storage
        //var orderDetail ={id:,name:"test", time:"Date 2017-02-03T08:38:04.449Z"};
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
    const deleteConfirm = (item:prodDataType)=>{
        //dispatch(removeFromCart(item));
        return(
            <Popover
                placement="bottom"
                >
                <PopoverHeader>Remove From Cart</PopoverHeader>
                <PopoverBody>
                    Are you sure you want to remove <b>{item.title}</b> from Cart.
                </PopoverBody>
            </Popover>)
    }
        
    return(
        <>
            <div className="cart-icon" title="Cart" onClick={()=>setOpen(true)}><FaShoppingCart/><sup>{props.items.length}</sup></div>
            <Modal show={open} onHide={()=>setOpen(false)}>
                <Modal.Header closeButton> Cart Details</Modal.Header>
                <Modal.Body>
                    { props.items.length > 0 ? (<Table striped>
                        <thead>
                            <th>#</th>
                            <th>Item</th>
                            <th>Title</th>
                            <th>MRP</th>
                            <th>Discount</th>
                            <th>Price</th>
                            <th></th>
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
                                    <td>
                                        <RemoveProductBtn data={item}/>
                                    </td>
                                </tr>)
                                
                            })}
                            <tr  className="total-row">
                                <td></td>
                                <td></td>
                                <td>Total</td>
                                <td>{formatNumber(totalOrderPrice)}</td>
                                <td>{''}</td>
                                <td>{formatNumber(totalOrderPrice * 0.6)}</td>
                                <td>
                                <FaTrash onClick={()=>dispatch(clearCart())}/>
                                </td>
                            </tr>
                        </tbody>
                    </Table>): "You have Nothing in the Cart"}
                </Modal.Body>
                <Modal.Footer>
                    { props.items.length > 0 &&
                        <>
                            <div className="savedMsg">{`You have Saved $${formatNumber(totalOrderPrice*0.4)}`}</div>
                            <Button onClick={handlePlaceOrder}>Place Order</Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CartPopOver;