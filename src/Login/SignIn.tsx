import { Button, Col, Form, Row } from "react-bootstrap";
import "./commonLogin.scss"
import { Link } from "react-router-dom";
import { FaLock, FaSearch, FaUser } from "react-icons/fa";
import { validateUser } from "../Utils/Utils";
import { Alert } from "react-bootstrap";
import {useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { loggedIn } from "./loginSlice";
import { UserDetailT } from "../Login/loginSlice"

const SignIn= ()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const userDetail:UserDetailT = useSelector((state:any)=>state.login);
    const [logInStatus,setLogInStatus] = useState<UserDetailT | undefined>(userDetail);
    const handleSubmit=(e:any)=>{
        const form=e.currentTarget;   
        e.preventDefault();
        //console.log('inside')
        const user=form.username.value;
        const pwd=form.password.value;
        //validate the username 
        let status= validateUser(user,pwd);  
        //console.log({status})
        setLogInStatus(status); 
    }
    //console.log({logInStatus});
    useEffect(
        ()=>{
            console.log('inside useeffect')
            if(logInStatus?.userName && logInStatus.isLoggedIn)
            { 
                navigate(`/home`);
                //update the state
                dispatch(loggedIn(logInStatus))
                //alert("you have logged in")
            }   
        },[logInStatus]
    )
    
        return(
            <div className="sign-up mb-20">
                <h2>Sign In</h2>
                {(!(logInStatus?.isLoggedIn) && logInStatus?.userName!=='') && 
                    <Alert variant="danger"><h6>{"Login Failed!!"}</h6></Alert>
                } 
                {
                    (userDetail.userName !== '' && !logInStatus?.isLoggedIn) &&
                    <Alert variant="danger"><h6>{userDetail.userName} Login Back!!</h6></Alert>
                }
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