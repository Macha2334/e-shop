import { Navbar,Container,Nav } from "react-bootstrap";
import './commonStyles.scss'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import  SearchItems  from "../components/Search"
import CartPopOver from "../pages/Cart/CartPopOver";
import { useState,useEffect,useLayoutEffect } from "react";
const NavigationBar=()=>{
    const [menu,setMenu]=useState<any>(0);
    const navigate=useNavigate();
    const handleNavigation=(e:any,nav:string)=>{
        //e.target.style.background="red";
        navigate(nav);
        setMenu(e.target.id);    
        console.log(e.target.id);  
    }
    console.log({menu});
    const NavObj =[
        {
            route:'/home',
            link:'Home'
        },
        {
            route:'/orders',
            link:'Orders'
        },
        {
            route:'/signup',
            link:'Register'
        },
        {
            route:'/signin',
            link:'Log In'
        }
    ]
    const allItems=useSelector((state:any)=>state.products);
    const cartItems=useSelector((state:any)=>state.cart);
    useLayoutEffect(
        ()=>{
            const allEles:NodeListOf<Element>=document.querySelectorAll(".nav-link");
            for(let el=0;el<=allEles.length-1 ; el++){
                if(allEles[el].id===menu){
                    if(! (allEles[el].id=='brand'))
                    allEles[el].classList.add("current-nav")
                }else{
                    allEles[el].classList.remove("current-nav")
                }
            
        }},[menu]
    )
    return(
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect id="nav-bar">
            <Container className="row nav-container">
                <Navbar.Brand className="col-sm-4 navBar">
                    <Nav.Link id="brand" onClick={(e:any)=>handleNavigation(e,"/home")}>
                    <img className="brand-img" src={process.env.PUBLIC_URL+'brand.png'}/>
                    E - Shop
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar.Brand>
                <Navbar.Collapse className="col-sm-5">
                    <Nav>
                        {NavObj.map(

                            (item,indx)=>{
                            return(
                                <Nav.Link id={indx.toString()}
                                    onClick={(e:any)=>handleNavigation(e,item.route)}
                                    //active={menu === indx}
                                     >
                                        {item.link}
                                </Nav.Link>
                            )
                        }
                        )}
                    </Nav>
                </Navbar.Collapse>
                <div className="col-sm-3 sc-container">
                    <SearchItems/>
                    <CartPopOver items={cartItems}/>
                </div>
                
            </Container>
        </Navbar>
    )
}
export default NavigationBar;