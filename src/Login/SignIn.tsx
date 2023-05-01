import { Button, Col, Form, Row } from "react-bootstrap";
import "./commonLogin.scss"
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";

const SignIn= ()=>{
    const handleSubmit=(e:any)=>{
        const form=e.currentTarget;
        e.preventDefault();
        console.log('inside')
        const user=form.username.value;
        const pwd=form.password.value;
        //validate the username 
        

    }
        return(
            <div className="sign-up mb-20">
                <h2>Sign In</h2>
                <Form name="signup" onSubmit={handleSubmit}>
                    <Form.Group className="row">
                        <Form.Label  className="col-3">
                        <FaUser/>
                        </Form.Label>
                        <Form.Control
                            className="col-8"
                            name="username"
                            type="email"
                            placeholder="Email"
                        />
                    </Form.Group>
                    <Form.Group className="row">
                        <Form.Label  className="col-3">
                            <FaLock/>
                        </Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Password"
                        />      
                    </Form.Group>
                    <Form.Group>
                        <Button className="btn btn-primary" type="submit">Log In</Button>
                    </Form.Group>
                    
                  
                    
                </Form>
                <div>If you are not a registed user, Please <Link to={"/signup"}>Sign Up</Link> here</div>
            </div>
        )
}
export default SignIn;