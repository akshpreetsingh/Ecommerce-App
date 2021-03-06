import React from 'react';
import "./Sidedrawer.css";
import DrawerButton from "./DrawerButton"
import {Link} from 'react-router-dom'
const sideDrawer = (props) => {

    let sideDrawerClassName = 'side-drawer';
    if(props.sideDrawerState) {
        sideDrawerClassName ='side-drawer open';
    }
     


    return (<nav className = {sideDrawerClassName}> 
        <div className="side-drawer-header">
            <div className= "side-drawer-button">
                <DrawerButton clickHandler={props.onClickHandler}></DrawerButton>
            </div>
            <div className="side-drawer-logo"><a href="/">POPITO.COM</a></div>
        </div> 
        <div className="side-drawer-user">
            <ul>
                <li className="side-drawer-user-items"><Link to = "/signin">Sign In</Link></li>
                <li className="side-drawer-user-items">|</li>
                <li className="side-drawer-user-items"><Link to = "/signup">Registration</Link></li>
            </ul>
        </div>
        <div className="side-drawer-items">
            <ul>
                <li className="side-drawer-items-each"><a href="/">Home</a></li>
                <li className="side-drawer-items-each"><a href="/">Shop Now</a></li>
                <li className="side-drawer-items-each"><a href="/">Trending Deals</a></li>
                <li className="side-drawer-items-each"><a href="/">Custom Orders</a></li>
                <li className="side-drawer-items-each"><a href="/">How it works</a></li>
                <li className="side-drawer-items-each"><a href="/">Contact Us</a></li>
                <li className="side-drawer-items-each"><a href="/">Blogs</a></li>
            </ul>
        </div>
    </nav>);

};

export default sideDrawer;


