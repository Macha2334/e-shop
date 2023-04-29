import NavigationBar from "../components/NavigationBar";
import withRoutLayout from "../components/withRouteLayout";
import { useEffect,useState } from "react";
import './Home.scss';
import {prodDataType} from "../types/productDataType"
import { Alert } from "react-bootstrap";
import Product from './Product'
import {useSelector,useDispatch} from "react-redux"
import { getProducts,setProducts } from "../redux/productsSlice";
import { setFilterProducts } from "../redux/productsFilterSlice";

const Home = () =>{
const [data,setData] = useState<prodDataType[]>([]);
const prodItems=useSelector((state:any)=>state.productFilter);
console.log(prodItems)
const dispatch=useDispatch();
useEffect(()=>{
    //call the products API
    //console.log('inside [] useEffect');
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                dispatch(setProducts(json));
                dispatch(setFilterProducts(json));
            });
        
    },[])
useEffect(
    ()=>{
      /*  console.log('inside [prodItems] useEffect');
        console.log({prodItems});
        console.log({data});*/
        if(prodItems)
            setData(prodItems);
    },[prodItems]
)
    
    return(
        <div className="home-page">
            <NavigationBar/>
            <Alert><h2>Super Summer Deals! up to 60% Off!!</h2></Alert>
            <div className="row prod-view">
            {data ?(data?.map((item:prodDataType,indx:any)=>{
                //console.log('in map',item);
                return(<>
                    <Product {...{data:item}}/>
                </>)
            }
            )) :
                "loading..."
            }
            </div>
        </div>
    )
}
export default Home;