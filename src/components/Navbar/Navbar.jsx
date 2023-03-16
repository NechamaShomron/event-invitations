import React from "react";
import sharedStyles from "./Shared.module.css";
import { navbarItemsList } from "./NavbarItemsList"
import NavbarItems from './NavbarItems';


const Navbar = () => {
    return (
        <nav>
        <ul className={sharedStyles.navbar_container}>
          {navbarItemsList.map((navItem, index) => {
            return <NavbarItems items={navItem} key={index} />;
          })}
        </ul>
      </nav>
      );
    
}

export default Navbar;