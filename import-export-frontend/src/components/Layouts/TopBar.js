import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthUser from "../AuthUser";

export default function TopBar(){
    const {http, getToken, token, logout, user} = AuthUser();
    const [userDetails, setUserDetails] = useState('');
    const [userId, setUserId] = useState(0);
    
    //console.log(userId);
    const logoutUser = () =>{
        if(token != undefined){
          logout();
        }
    }
    function randerElement(){
        if(!getToken()){
            return <> 
                 <li className="nav-item">
                  <Link className="nav-link" to="/registration"> Registration </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/login"> Login </Link>
                </li>
            </>
        }else{
            return <>
                <li className="nav-item ">
                    <Link className="nav-link" to="/home"> Home </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/import"> Import </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">export</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" onClick={logoutUser}> Logout </a>
                </li>

            </> 
        }
    }

    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menuArea" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {randerElement()}
              </ul>
            </div>
          </nav>
        </>
    );
}