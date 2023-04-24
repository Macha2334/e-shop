import NavigationBar from "../components/NavigationBar";
import withRoutLayout from "../components/withRouteLayout";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import './Home.scss';
import {prodDataType} from "../types/productDataType"
import { Alert } from "react-bootstrap";
import Product from './Product'


const Home = () =>{
const [data,setData] = useState<prodDataType[]>([]);


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
                    <Product {...item}/>
                </>
            )}
            </div>
        </>
    )
}
export default Home;