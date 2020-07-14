import React from 'react';
import './Toolbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from 'public/logo_transparent.png'
import DrawerToggleButton from '../Sidedrawer/DrawerButton.js'

const toolbar = props => {

    return (
        
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div className="toolbar-left"> 
                    <div className="button-status">
                        <DrawerToggleButton clickHandler ={props.drawerHandler}></DrawerToggleButton>
                    </div>
                </div>
                <div className = "toolbar-right">
                    <div className="toolbar_logo"><a href="/"><img src='/logo_transparent.png' alt='logo'
                    ></img></a></div>
                    <div className="spacer"></div>
                    <div className="toolbar_items">
                        <ul>
                            <li><a href="/">Products</a></li>
                            <li><a href="/signin">Contact Us</a></li>
                            <li><a href="/">Sign In</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        
    );
}

export default toolbar;

