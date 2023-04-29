import "./commonStyles.scss"
import {Form,Button} from "react-bootstrap"
import { FaBuromobelexperte, FaSearch } from "react-icons/fa";
import CartPopOver from "../pages/Cart/CartPopOver";
import { prodDataType } from "../types/productDataType";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterProducts } from "../redux/productsFilterSlice";
import { useSelector } from "react-redux";

const Search = () =>{
    const dispatch=useDispatch();
    const prods=useSelector((state:any)=>state.products)
    const [filteredData,setFilteredData]=useState(prods);
    const [filter,setFilter]=useState(false);
        
    const handleSubmit=(event:any)=>{
        //console.log('inside handle submit');
        const form=document.forms[0];
        event.preventDefault();
        if(form.search.value){
            //filter
            dispatch(setFilterProducts([...filteredData]));
        }else{
            //reset filter
            dispatch(setFilterProducts([...prods]));
        }
        setFilter(false)
    }
    const handleChange=(e:any)=>{   
        if(!e.target.value){
            //reset filter
            setFilter(false);
            dispatch(setFilterProducts([...prods]));
            return;
        }
        setFilter(true);
        setFilteredData(
            prods.filter(
                (item:any)=>item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            )
        )
    }
    const handleSelection=(e:any)=>{
        //filter the selected item alone
        dispatch(setFilterProducts([...filteredData.filter(
            (item:any)=>item.id==e.target.id)]));
        setFilter(false);
    }
    //get the list of products filtered trhough search
    const getListOfProducts = () =>{
        return (
            filteredData.length && <ul className="search-list">
                {filteredData.map(
                    (item:prodDataType)=><li id={item.id.toString()} className="search-ls-item" onClick={handleSelection}>{item.title}</li>
                )}
            </ul>
        )
    }
    return(
        <Form className="search-bar" onSubmit={handleSubmit} name="searchForm">
                    
            <Form.Control
                name="search"
                type="search"
                placeholder="Search"
                className="me-10"
                onChange={handleChange}
            />
            {filter && getListOfProducts()}
            <FaSearch className="search-btn" onClick={handleSubmit}/>
        </Form>
    )
}
export default Search;