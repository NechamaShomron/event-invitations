import React, { useState } from "react";
import { navbarItemsList } from "./NavbarItemsList"
import NavbarItems from './NavbarItems';
import * as Icons from "react-icons/fa"
import NavbarSharedStyles from "./NavbarShared.module.css";



const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  document.addEventListener("click", function (event) {
    event.preventDefault();
    event.stopPropagation();
    if (navbarOpen && event.target.ariaHasPopup !== "menu") {
      setNavbarOpen(false)
    }
  });

  const preventRendering = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  return (
    <nav>
      <div className={`${NavbarSharedStyles.bars_menu} ${navbarOpen ? NavbarSharedStyles.active : ""}`} onClick={(event) => { setNavbarOpen((prev) => !prev); preventRendering(event) }}> <Icons.FaBars /> </div>
      <ul className={`${NavbarSharedStyles.navbar_container} ${navbarOpen ? NavbarSharedStyles.active : NavbarSharedStyles.disabled}`}>
        {navbarItemsList.map((navItem, index) => {
          return <NavbarItems items={navItem} key={index} close_menu={(event) => { setNavbarOpen(false); preventRendering(event) }} />;
        })}
      </ul>
    </nav>
  );

}

export default Navbar;