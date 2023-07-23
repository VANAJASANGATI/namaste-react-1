import {LOGO_URL} from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router-dom"
const Header=()=>{
    const [isLogin,setIsLogin]=useState(false)
    const btnTxt= isLogin? "LogOut": "Login"
    onClickLogInOrLogoutBtn=()=>{
        setIsLogin(!isLogin)
    }
    return(
        <div className="nav-header">
            <div >
                 <img src={LOGO_URL} className="logo"/>
            </div>
            <div>
                <ul className="nav-links">
                    <li className="nav-item"><Link to="/home">Home</Link></li>
                    <li className="nav-item"><Link to="/about">About Us</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                    <li className="nav-item"><Link to="/cart">Cart</Link></li>
                    <li className="nav-item"><button type="submit" className="login-logout-btn" onClick={onClickLogInOrLogoutBtn}>{btnTxt}</button></li>
                    
                </ul>
                
            </div>
        </div>
    )
}
export default Header;