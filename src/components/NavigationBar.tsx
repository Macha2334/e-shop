import { Navbar,Container,Nav } from "react-bootstrap";
import './commonStyles.scss'
import { useSelector,useDispatch } from "react-redux";
import { useNavigate,useLocation } from "react-router";
import  SearchItems  from "../components/Search"
import CartPopOver from "../pages/Cart/CartPopOver";
import { useState,useEffect,useLayoutEffect } from "react";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { loggedOut } from "../Login/loginSlice";
import { UserDetailT } from "../Login/loginSlice";
import Logo from "../Utils/Logos/Logo";

const NavigationBar=()=>{
    const [menu,setMenu]=useState<any>('0');
    const navigate=useNavigate();
    const location=useLocation();
    const dispatch=useDispatch();
    const isLogin:UserDetailT=useSelector((state:any)=>state.login);
    const cartItems=useSelector((state:any)=>state.cart);
    
    console.log(isLogin)
    
    const handleNavigation=(e:any,nav:string,isLoggedOut:boolean=false)=>{
         //log out
        
        navigate(nav);
        console.log({isLoggedOut})
        if(isLoggedOut)   {
          // console.log('dispatching logout')
           dispatch(loggedOut(true));            
       }
        if(e.target.id === "brand")
        {
            setMenu('0');
            return;
        }
        setMenu(e.target.id); 
       
    }
    //console.log({menu});
    const NavObj =[
        {
            id:0,
            route:'/home',
            link:'Home'
        },
        {
            id:1,
            route:'/orders',
            link:'Orders'
        },
        {
            id:2,
            route:'/signup',
            link:'Register'
        },
        {
            id:3,
            route:'/signin',
            link:'Log In'
        }
    ]

    useEffect(
        ()=>{
            let curNav=NavObj.find( (item:any)=>item.route === location.pathname)
            if(curNav)
                setMenu(curNav.id);
        },[location]
    )
    /*useEffect(
        ()=>{   
            console.log('login changed')  
            console.log(isLogin)  
            if(!isLogin.isLoggedIn){
                dispatch(loggedOut);
            }
        },[isLogin]
    )*/
    useLayoutEffect(
        ()=>{
            const path=location.pathname;
            const allEles:NodeListOf<Element>=document.querySelectorAll(".nav-link");
            for(let el=0;el<=allEles.length-1 ; el++){
                if(allEles[el].id===menu){
                    if(! (allEles[el].id=='brand'))
                        allEles[el].classList.add("current-nav")
                }else{
                    let curNav=NavObj.find( (item:any)=>item.route === path)
                    if(curNav?.id.toString() === allEles[el].id){
                        allEles[el].classList.add("current-nav");
                    }else{
                        allEles[el].classList.remove("current-nav")
                        allEles[el].classList.remove("active")
                    }
                }
            
        }
    },[menu]
    )
    return(
        <Navbar bg="dark" expand="md" variant="dark" collapseOnSelect id="nav-bar">
            <Container className="row nav-container">
                <Navbar.Brand className="col-sm-3 navBar">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav.Link id="brand" onClick={(e:any)=>handleNavigation(e,"/home")}>
                        <Logo size={50} className="me-10"/>
                        E - Shop
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Collapse className="col-sm-5 ">
                    <Nav>
                        {NavObj.map(

                            (item,indx)=>{
                                if(item.link==="Log In")
                                    return false;
                                if(isLogin.isLoggedIn){
                                    if(item.link==="Register")
                                        return false;
                                }else{
                                    if(item.link==="Orders")
                                        return false;
                                }
                                    
                                   
                                    return(
                                        <Nav.Link id={item.id.toString()}
                                            onClick={(e:any)=>handleNavigation(e,item.route)}
                                            eventKey={(item.id+1).toString()}
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
                {isLogin.isLoggedIn ? 
                    <div className="LogInOut col-sm-1" onClick={(e)=>handleNavigation(e,'/signin',true)} title="Log Out"><FiLogOut color="white"/></div>
                    :
                    <div className="LogInOut col-sm-1" onClick={(e)=>handleNavigation(e,'/signin')} title="Log In"><FiLogIn color="white"/></div>
                }
            </Container>
        </Navbar>
    )
}
export default NavigationBar;
/*<polygon points="5,0 25,25 45,0 45,40 25,25 5,40 5,0"
                                style={{fill:"aquamarine",stroke:"white",strokeWidth:"2px"}}
                                />
                                <line x1="5" y1="50" x2="45" y2="50"
                                style={{fill:"aquamarine",stroke:"white",strokeWidth:"2px"}}
                                />
                                <circle cx="5" cy="45" r="5"
                                style={{fill:"yellow",stroke:"white",strokeWidth:"2px"}} />
                                <circle cx="45" cy="45" r="5"
                                style={{fill:"yellow",stroke:"white",strokeWidth:"2px"}} />*/