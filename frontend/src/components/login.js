import React from "react";
import {Link} from 'react-router-dom';
import "./login.css"

const login = ()=>{
    return(
        <div class="loginpage">
            <div className="inputtask">
            <div className="header">
                    <h1>Sign In</h1>
                </div>
                <form className="input-form">
                    <h2>Hi, Welcome..!</h2>
                    <input type="email" className="input-field" name="username" placeholder="User Email" required/>
                    <input type="password" className="input-field" name="password" placeholder="Password" required/>
                    <input type="checkbox" className="check-box"/><span>Remember Password</span>
                    <button type="submit" className="submit-btn">Sign In</button>
                    <div className="registertask">
                        <span><a href="/" target="_blank">Forgot Password?</a></span>
                        <span>Not a User?<Link to="/register" >Sign Up</Link></span>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default login