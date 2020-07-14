import React from 'react';
import './Backdrop.css'

const backdrop = (props) => {
    return(
        <div className="backdrop" onClick={props.onClickHandler}>

        </div>
    );
};

export default backdrop;

