import { Navbar,Container,Nav } from "react-bootstrap";
import {Form,Button} from "react-bootstrap"
import './commonStyles.scss'
const NavigationBar=()=>{
    return(
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect id="nav-bar">
            <Container className="row">
                <Navbar.Brand className="col-sm-3">
                    <Nav.Link href="home">
                    <img className="brand-img" src={process.env.PUBLIC_URL+'brand.png'}/>
                    E - Shop
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="col-sm-1" />
                <Navbar.Collapse className="col-sm-6">
                    <Nav>
                        <Nav.Link href="home" >Home</Nav.Link>
                        <Nav.Link href="cart">Cart</Nav.Link>
                        <Nav.Link href="orders">Orders</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex col-sm-3">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-10"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;