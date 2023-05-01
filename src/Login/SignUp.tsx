import { Button, Col, Form, Row,Alert } from "react-bootstrap";
import "./commonLogin.scss"
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";
import { saveUser } from "../Utils/Utils";
import { useState } from "react";

const SignUp= ()=>{
    const [regStatus,setRegStatus]=useState<any>();
    const handleSubmit=(e:any)=>{
        const form=e.currentTarget;
        e.preventDefault();
        console.log('inside')
        const user=form.username.value;
        //validate user
        if(user){
            let a=new RegExp(/[a-zA-Z]+[0-9.]*[a-zA-Z]*@[a-zA-Z]+.com/g)
            let valid=a.exec(user);
            if(valid?.length !==1){
                setRegStatus({status:false,msg: "user name is not a valid email"});
                form.username.focus();
                return;
            }            
        }else{
            setRegStatus({status:false,msg: "user name field should not be empty"});
            return;
        }
        const pwd=form.password.value;
        //password validation
        if(pwd){
            /*let smallValP=new RegExp(/[a-z]{2,}+/g)
            let smallVal=smallValP.exec(pwd)
            let capsValP=new RegExp(/[A-Z]{2,}+/g)
            let capsVal=capsValP.exec(pwd)
            let numValP=new RegExp(/[0-9]{2,}+/g)
            let numVal=numValP.exec(pwd)
            
            if(!(smallVal!= null&&
            capsVal !=null &&
            numVal!=null)
            ){
                setRegStatus({status:false,msg: "password length should have atleast 1 cap,1 small and 1 num of characters"});
                form.password.focus();
                return;
            }  */          
        }else{
            setRegStatus({status:false,msg: "password field should not be empty"});
            return;
        }
        
        const res:any=saveUser(user,pwd);
        console.log(res)
        setRegStatus(res);
    }
        return(
            <div className="sign-up mb-20">
                {regStatus != null && 
                    (
                        regStatus.status ? <Alert variant="success"><h6>{regStatus.msg}</h6></Alert> 
                        : <Alert variant="danger"><h6>{regStatus.msg}</h6></Alert>
                    )
                }
                <h2>Sign Up</h2>
                <Form name="signup" onSubmit={handleSubmit} >
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
                            minLength={4}
                        />      
                    </Form.Group>
                    <Form.Group>
                        <Form.Check
                            name="desclimer"
                            label="I agree to all statements in Terms of service."
                        />
                        <Button className="btn btn-primary" type="submit">REGISTER</Button>
                    </Form.Group>
                    
                  
                    
                </Form>
                <div>If you are a registed user, Please click <Link to={"/signin"}>Login</Link></div>
            </div>
        )
}
export default SignUp;