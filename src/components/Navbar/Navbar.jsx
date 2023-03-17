import React, { useState } from "react";
import { navbarItemsList } from "./NavbarItemsList"
import NavbarItems from './NavbarItems';
import * as Icons from "react-icons/fa"
import NavbarSharedStyles from "./NavbarShared.module.css";



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav>
      <div className={`${NavbarSharedStyles.bars_menu} ${navbarOpen ? NavbarSharedStyles.active : ""}`} onClick={() => setNavbarOpen((prev) => !prev)}> <Icons.FaBars /> </div>
      <ul className={`${NavbarSharedStyles.navbar_container} ${navbarOpen ? NavbarSharedStyles.active : NavbarSharedStyles.disabled}`}>
        {navbarItemsList.map((navItem, index) => {
          return <NavbarItems items={navItem} key={index} close_menu={()=>setNavbarOpen(false)}/>;
        })}
      </ul>
    </nav>
  );

}

export default Navbar;