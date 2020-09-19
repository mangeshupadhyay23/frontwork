import React from 'react';
import "./SideDrawer.css";

const sideDrawer=props=>{
    let sideDrawerClass=["side_drawer"];
    if(props.show){
        sideDrawerClass=["side_drawer","open"]
    }
    return(
        <nav className={sideDrawerClass.join(" ")} onClick={props.click}>
            <ul>
                <li><a href="/">Option 1</a></li>
                <li><a href="/">Option 2</a></li>
            </ul>
        </nav>
    );
}

export default sideDrawer;