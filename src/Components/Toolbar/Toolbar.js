import React from 'react';
import './Toolbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, NavLink} from 'react-router-dom';
// import logo from 'public/logo_transparent.png'
import DrawerToggleButton from '../Sidedrawer/DrawerButton.js'



const toolbar = props => {

    return (
        
        <React.Fragment>
            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div className="toolbar-left"> 
                        <div className="button-status">
                            <DrawerToggleButton clickHandler ={props.drawerHandler}></DrawerToggleButton>
                        </div>
                    </div>
                    <div className = "toolbar-right">
                        <div className="toolbar_logo"><a href="/"><img src='/' alt='logo'
                        ></img></a></div>
                        <div className="spacer"></div>
                        <div className="toolbar_items">
                            <ul>
                                <li><Link to = "/products">Products</Link></li>
                                <li><Link to = "/signin">SignIn</Link></li>
                                <li><Link to = "/contactus">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </React.Fragment>
        
    );
}

export default toolbar;

