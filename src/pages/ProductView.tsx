
import './Home.scss'
import { useState,useEffect } from 'react';
import {FaStar} from "react-icons/fa"
import {useParams,useHref} from "react-router-dom"
import { prodDataType } from '../types/productDataType';
import NavigationBar from '../components/NavigationBar';
import Loading from '../components/Loading/Loading';
import AddProductBtn from './AddProductBtn';

type data_type= {
    data:prodDataType,
    loading:boolean
}
const initialState={
    loading:false,
    data: {
        id: 0,
        title: '',
        price: 0,
        description:'',
        category: '',
        image: '',
        rating: {
          rate:0,
          count: 0,
        }
    }
}

const ProductView = () =>{
    const [data,setData]=useState<data_type>(initialState);
    const params=useParams();
    //const data=useSelector((state:any)=>state.cart.find((item:any)=>item.id==params.id))
    //console.log(params.prodId)
    useEffect(()=>{
        setData({...data,loading:true})
        fetch(`https://fakestoreapi.com/products/${params.prodId}`)
        .then(res=>res.json())
        .then(json=>{
            setData({loading:false,data:json})
        })
    },[params])
    
    return(
        <>
        {!data.loading ? (<div className='prod-view'>
            <div className="prodview-item-detail row" >
                <img src={data.data.image} className="prodview-item-image col-sm-6" alt={data.data.title}/>
                <div className='col-sm-6 details'>
                    <h2>{data.data.title}</h2>
                    <div className="prodview-price">Price:${data.data.price}</div>
                    <div> {data.data.rating.rate} <FaStar/>  {`(${data.data.rating.count})`}</div>          
                    <AddProductBtn data={data.data}/>
                    <hr/>
                    <p>{data.data.description}</p>
                </div>
            </div>
        </div>): <Loading/>}
        </>
    )
}
export default ProductView;
