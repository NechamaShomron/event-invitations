import React, { useState } from "react";
import sharedStyles from "./Shared.module.css";
import { navbarItemsList } from "./NavbarItemsList"
import NavbarItems from './NavbarItems';
import * as Icons from "react-icons/fa"


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <div className={`${sharedStyles.bars_menu} ${navbarOpen ? sharedStyles.active : ""}`} onClick={() => setNavbarOpen((prev) => !prev)}> <Icons.FaBars /> </div>
      <ul className={`${sharedStyles.navbar_container} ${navbarOpen ? sharedStyles.active : sharedStyles.disabled}`}>
        {navbarItemsList.map((navItem, index) => {
          return <NavbarItems items={navItem} key={index} />;
        })}
      </ul>
    </nav>
  );

}

export default Navbar;