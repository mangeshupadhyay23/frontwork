import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './toolbar.css';

const Toolbar=(props)=>{
    
    return(
        <header className="toolbar">
            <nav className="toolbar_navigation">
                <div><DrawerToggleButton click={props.drawerToggler}/></div>
                <div className="toolbar_logo"><a href="/">THE LOGO</a></div>
                <div className="space"></div>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li className="navigation_item_op"><a href="/">Option 1</a></li>
                        <li className="navigation_item_op"><a href="/">Option 2</a></li>
                        <li><a href="/">Log In</a></li>
                        <li><button className="signup_button"><a href="/form">Sign Up</a></button></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;