import React from "react";
import {Link} from 'react-router-dom';
import "./register.css"

const register = ()=>{
    return(
        <div class="loginpage">
            <div className="inputtask">
                <div className="header">
                    <h1>Sign Up</h1>
                </div>
                <form className="input-form">
                    <input type="text" className="input-field" name="username" placeholder="Name" required/>
                    <input type="email" className="input-field" name="usermail" placeholder="Email" required/>
                    <input type="password" className="input-field" name="password" placeholder="Password" required/>
                    <input type="password" className="input-field" name="confirmpassword" placeholder="Confirm Password" required/>
                    <button type="submit" className="submit-btn">Sign Up</button>
                    <div className="registertask">
                        <span>Already a User?<Link to="/" >Sign In</Link></span>
                    </div>
                </form>
            </div>  
        </div>
    )
}

export default register