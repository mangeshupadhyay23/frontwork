import React from "react";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { NavLink } from "react-router-dom";
import "./toolbar.css";

const Toolbar = (props) => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div>
          <DrawerToggleButton click={props.drawerToggler} />
        </div>
        <div className="toolbar_logo">
          <NavLink to="/" exact>
            THE LOGO
          </NavLink>
        </div>
        <div className="space"></div>
        <div className="toolbar_navigation-items">
          <ul>
            <li className="navigation_item_op">
              <NavLink to="/" exact>
                Option 1
              </NavLink>
            </li>
            <li className="navigation_item_op">
              <NavLink to="/" exact>
                Option 2
              </NavLink>
            </li>
            <li className="login_btn">
              <NavLink to="/" exact>
                Log In
              </NavLink>
            </li>
            <li>
              <button className="signup_button">
                <NavLink to="/form/" exact>
                  Sign Up
                </NavLink>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
