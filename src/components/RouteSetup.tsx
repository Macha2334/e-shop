import {Route,Routes} from "react-router-dom"
import Home from "../pages/Home"
//import Cart from "../pages/Cart/Cart"
import Orders from "../pages/Orders"
import NotFound from "../pages/NotFound"
import withRoutLayout from "./withRouteLayout"
import ProductView from "../pages/ProductView"
const RouteSetp = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="product/:prodId" element={<ProductView/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes> 
    )
}
export default RouteSetp;
/* <Route path="/" element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="orders" element={<Orders/>}/>
            <Route path="*" element={<NotFound/>}/>*/