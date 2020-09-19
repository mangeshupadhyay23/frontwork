import React from 'react';
import './BackDrop.css';

const backDrop=props=>{
    return(
        <div className="backdrop" onClick={props.drawerToggler}>
        </div>
    )
}

export default backDrop;