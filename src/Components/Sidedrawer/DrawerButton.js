import React from 'react';
import './DrawerButton.css'

const drawerToogleButton = (props) => {
    return (<button className="toggle-button" onClick={props.clickHandler}>  
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
        <div className="toggle-button-line"></div>
    </button>
    );
};

export default drawerToogleButton;
