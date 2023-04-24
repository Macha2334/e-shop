import { Navbar,Container,Nav } from "react-bootstrap";
import {Form,Button} from "react-bootstrap"
import './commonStyles.scss'
import { useSelector } from "react-redux";
import CartPopOver from "../pages/Cart/CartPopOver";
import { useNavigate } from "react-router";
const NavigationBar=()=>{
    
    const navigate=useNavigate();
    const handleNavigation=(nav:string)=>{
        navigate(nav);
    }
    const cartItems=useSelector((state:any)=>state.cart);
    return(
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect id="nav-bar">
            <Container className="row">
                <Navbar.Brand className="col-sm-3">
                    <Nav.Link onClick={()=>handleNavigation("/home")}>
                    <img className="brand-img" src={process.env.PUBLIC_URL+'brand.png'}/>
                    E - Shop
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="col-sm-1" />
                <Navbar.Collapse className="col-sm-5">
                    <Nav>
                        <Nav.Link onClick={()=>handleNavigation("/home")} >Home</Nav.Link>
                        <Nav.Link onClick={()=>handleNavigation("/orders")}>Orders</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex col-sm-3 justify-content-around">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-10"
                    />
                    <Button variant="outline-success" className="search-btn">Search</Button>
                </Form>
                <div className="col-sm-1">
                    <CartPopOver items={cartItems}/>
                </div>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;