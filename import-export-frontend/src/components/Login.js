import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

export default function Login(){

    const navigate = useNavigate();
    const { http, setToken} = AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError]     = useState(null);

    const submitForm = () => {
        setLoading(true);
        http.post('api/auth/login', {email:email, password:password}).then((res) => {

            if(res.data.status == "error"){
               setLoading(false);
               setError(res.data.message)
            }else{
                setLoading(false);
                setToken(res.data.user,res.data.access_token);
            }
        });
    }

    return (
        <>

        <div className="row"> 
            <div  className="col-md-6">
                    <form method="POST">
                        
                        <div className="form-group">
                            <label >Email </label>
                            <input type="email" onChange={ e => setEmail(e.target.value)}className="form-control" placeholder="Enter email" id="email" />
                        </div>
                        <div className="form-group">
                            <label >Password:</label>
                            <input onChange={ e => setPassword(e.target.value)}  type="password" className="form-control" placeholder="Enter password" id="password" />
                        </div>
                    
                        <button type="button" onClick={submitForm} className="btn btn-primary">Submit</button>
                     </form>
                </div>
             </div>
        </>
    );
}