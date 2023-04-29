import { Navbar,Container,Nav } from "react-bootstrap";
import './commonStyles.scss'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import  SearchItems  from "../components/Search"
import CartPopOver from "../pages/Cart/CartPopOver";
const NavigationBar=()=>{
    
    const navigate=useNavigate();
    const handleNavigation=(nav:string)=>{
        navigate(nav);
    }
    const allItems=useSelector((state:any)=>state.products);
    const cartItems=useSelector((state:any)=>state.cart);

    return(
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect id="nav-bar">
            <Container className="row nav-container">
                <Navbar.Brand className="col-sm-4 navBar">
                    <Nav.Link onClick={()=>handleNavigation("/home")}>
                    <img className="brand-img" src={process.env.PUBLIC_URL+'brand.png'}/>
                    E - Shop
                    </Nav.Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Navbar.Brand>
                <Navbar.Collapse className="col-sm-3">
                    <Nav>
                        <Nav.Link onClick={()=>handleNavigation("/home")} >Home</Nav.Link>
                        <Nav.Link onClick={()=>handleNavigation("/orders")}>Orders</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <div className="col-sm-5 sc-container">
                    <SearchItems/>
                    <CartPopOver items={cartItems}/>
                </div>
                
            </Container>
        </Navbar>
    )
}
export default NavigationBar;