import { useEffect,useState } from "react";
import './Home.scss';
import {prodDataType} from "../types/productDataType"
import { Alert } from "react-bootstrap";
import Product from './Product'
import {useSelector,useDispatch} from "react-redux"
import { getProducts,setProducts } from "../redux/productsSlice";
import { setFilterProducts } from "../redux/productsFilterSlice";
import Loading from "../components/Loading/Loading"
import {UserDetailT} from "../Login/loginSlice"

const Home = () =>{
const [data,setData] = useState<prodDataType[]>([]);
const prodItems=useSelector((state:any)=>state.productFilter);
const userDetail : UserDetailT=useSelector((state:any)=>state.login);
//console.log(prodItems)
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
            <Alert><h2>Super Summer Deals! up to 60% Off!!</h2></Alert>
            {userDetail.isLoggedIn && <Alert><h6>Welcome Back {userDetail.userName}</h6></Alert>}
            <div className="row prod-view">
            {data ?(data?.map((item:prodDataType,indx:any)=>{
                //console.log('in map',item);
                return(<>
                    <Product {...{data:item}}/>
                </>)
            }
            )) :
                <Loading/>
            }
            </div>
        </div>
    )
}
export default Home;