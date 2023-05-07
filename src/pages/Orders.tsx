import NavigationBar from "../components/NavigationBar";
import { useSelector } from "react-redux";
const Orders=()=>{
    const data=useSelector((state:any)=>state.cart)
    //console.log(data)
    return(
        <>
        <h1>Orders</h1>
        </>
    )
}
export default Orders;