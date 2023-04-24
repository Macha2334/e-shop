import NavigationBar from "../../components/NavigationBar";
import { useSelector } from "react-redux";
import { prodDataType } from "../../types/productDataType";
const Cart = () =>{
    const cartItems=useSelector((state:any)=>state.cart);
    //console.log(cartItems)
    return(
        <>
        <NavigationBar/>
        {cartItems?.map((item:prodDataType)=><div id={item.title.toString()}>{item.title}</div>)}
        </>
    )
}
export default Cart;