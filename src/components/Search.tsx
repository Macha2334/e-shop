import "./commonStyles.scss"
import {Form,Button} from "react-bootstrap"
import { FaSearch } from "react-icons/fa";
import CartPopOver from "../pages/Cart/CartPopOver";
import { prodDataType } from "../types/productDataType";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetProducts,setProducts } from "../redux/productsSlice";
interface Props{
    prods:prodDataType[];
}
const Search = (props:Props) =>{
    const dispatch=useDispatch();
    const [filteredData,setFilteredData]=useState(props.prods);
    const [filter,setFilter]=useState(false);
    console.log({filter})
    
    const handleSubmit=(event:any)=>{
        const form=event.currentTarget;
        event.preventDefault();
        setFilter(true);
        dispatch(setProducts([...filteredData]));
        //console.log(form.search)
    }
    console.log('filteredData',filteredData);
    const handleChange=(e:any)=>{
        console.log(e.target.value);
        if(!e.target.value){
            //clear
            setFilter(false);
            return;
        }
        setFilter(true);
        setFilteredData(
            props.prods.filter(
                (item:any)=>item.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            )
        )
    }
    const getListOfProducts = () =>{
        console.log('making list');
        return (
            <ul className="search-list">
                {filteredData.map(
                    (item:any)=><option className="search-ls-item">{item.title}</option>
                )}
            </ul>
        )
    }
    return(
        <Form className="search-bar" onSubmit={handleSubmit}>
                    
            <Form.Control
                name="search"
                type="search"
                placeholder="Search"
                className="me-10"
                onChange={handleChange}
            />
            {filter && getListOfProducts()}
            <FaSearch className="search-btn" type="submit"/>
        </Form>
    )
}
export default Search;