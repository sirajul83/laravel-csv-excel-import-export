import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

export default function Registration(){

    const navigate = useNavigate();
    const { http, getToken} = AuthUser();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError]     = useState(null);


    const submitForm = () =>  {
        setLoading(true);
        if(name === '' && email === '' &&  password === '' ){
            alert("You must fill all the field");
        }else if (password != confirmPassword) {
            alert("Passwords don't match");
        }
        
         http.post('/api/auth/register', {name:name,
                                email:email,
                                password:password, 
                                password_confirmation:confirmPassword}).then((res) => {
                                    setLoading(false);
                                    setSuccess(res.data.message);
                                    setTimeout(() => {
                                        navigate('/login');
                                      }, 3000);
                                //console.log(res.data);
                                     
        });
    }


    function randerElementRegister(){
        if(!getToken()){
            return <> 
                 <div className="row"> 
                    <div  className="col-md-6">
                            <form method="POST">
                                <div className="form-group">
                                    <label>Name </label>
                                    <input type="text" onChange={ e => setName(e.target.value)} className="form-control" placeholder="Enter Name" id="name" />
                                </div>
                                <div className="form-group">
                                    <label >Email </label>
                                    <input type="email" onChange={ e => setEmail(e.target.value)}className="form-control" placeholder="Enter email" id="email" />
                                </div>
                                <div className="form-group">
                                    <label >Password:</label>
                                    <input onChange={ e => setPassword(e.target.value)}  type="password" className="form-control" placeholder="Enter password" id="password" />
                                </div>
                                <div className="form-group">
                                    <label >Confirm Password :</label>
                                    <input onChange={ e => setConfirmPassword(e.target.value)} type="password" className="form-control" placeholder="Enter Confirm password" id="password_confirmation" />
                                </div>
                            
                                <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
            </>
        }else{
            return <>
                 <h2 className="text-center "> Welcome to Excel or a CSV File Import and export Portal </h2> 
            </> 
        }
    }

    return (
        <>
            {randerElementRegister()}
        
        </>
    );
}