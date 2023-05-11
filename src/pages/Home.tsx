import { useEffect,useState } from "react";
import './Home.scss';
import {prodDataType} from "../types/productDataType"
import { Alert, Form } from "react-bootstrap";
import Product from './Product'
import {useSelector,useDispatch} from "react-redux"
import { getProducts,setProducts } from "../redux/productsSlice";
import { setFilterProducts } from "../redux/productsFilterSlice";
import Loading from "../components/Loading/Loading"
import {UserDetailT} from "../Login/loginSlice"

const Home = () =>{
const [data,setData] = useState<prodDataType[]>([]);
const [categories,setCategories]=useState([]);
const [catFilter,setCatFilter]=useState<any>([]);
const [isVisibleCatOptions,setIsVisibleCatOptions]=useState(false);
const prodItems=useSelector((state:any)=>state.productFilter);
const userDetail : UserDetailT=useSelector((state:any)=>state.login);
const allProducts : prodDataType[]=useSelector((state:any)=>state.products);
//console.log(catFilter)
const dispatch=useDispatch();
useEffect(()=>{
    //call the products API
    //console.log('inside [] useEffect');
             
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>{
            setCategories(json)
        });
        
    },[])

useEffect(
    ()=>{
        if(catFilter.length===0 )
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                dispatch(setProducts(json));
                dispatch(setFilterProducts(json));
            });
        else{
            let filteredThroughCat=allProducts.filter(
                (item)=> {
                    console.log(catFilter);
                    console.log(item.category)
                    if(catFilter.length===0){
                        return true;
                    }
                    return catFilter?.includes(item.category)}
            );
            console.log(filteredThroughCat)
            dispatch(setFilterProducts(filteredThroughCat))
        }
    },[catFilter]
)
useEffect(
    ()=>{
        if(prodItems)
            setData(prodItems);
    },[prodItems]
)
    const handleSelection=(e:any)=>{
        //console.log(e.target?.selectedOptions);
        let catOptions=[];
       for(let i=0;i<e.target.selectedOptions.length;i++)
        {
            catOptions.push(e.target.selectedOptions[i].value);
        }
        setCatFilter(catOptions)
    }
    return(
        <div className="home-page">
            <Alert><h5>Super Summer Deals! up to 60% Off!!</h5></Alert>
            {userDetail.isLoggedIn && <Alert><h6>Welcome Back {userDetail.userName}</h6></Alert>}
            <div className="categoryFilter">
                <div>
                    <button className="btn btn-primary" 
                    onMouseOver={()=>setIsVisibleCatOptions(true)}
                    onClick={()=>setIsVisibleCatOptions(!isVisibleCatOptions)}
                    >
                        Select Category</button>
                    <select name="cat-select" id="cat-select" className={isVisibleCatOptions ? "show" : "hide"} multiple onChange={handleSelection}>
                        {
                            categories.map(
                            (item,indx)=><option value={item}>{item}</option>
                            )
                        }
                    </select>
                </div>
            </div>
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
