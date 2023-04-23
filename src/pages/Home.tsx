import NavigationBar from "../components/NavigationBar";
import withRoutLayout from "../components/withRouteLayout";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { prodData } from "../redux/productSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './Home.scss';
import {prodDataType} from "../types/productDataType"
import { Alert } from "react-bootstrap";


const Home = () =>{
const dispatch=useDispatch();
const [data,setData] = useState<prodDataType[]>([]);
const products=useSelector((state:any)=>state.prodData);

useEffect(()=>{
    //call the products API
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                setData(json)
            })
        
    },[])
    
    return(
        <>
            <NavigationBar/>
            <Alert><h2>Super Summer Deals! up to 60% Off!!</h2></Alert>
            <div className="row prod-view">
            {data?.map((item:prodDataType,indx:any)=>
                <>
                    <div className="col-sm-4">
                        <div className="item-detail">
                            <img src={item.image} className="item-image" alt={item.title}/>
                            <div>{item.title}</div>
                            <div className="price">Price:${item.price}</div>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </>
            )}
            </div>
        </>
    )
}
export default Home;