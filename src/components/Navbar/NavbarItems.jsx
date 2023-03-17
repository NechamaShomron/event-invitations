import React, { useState } from "react";
import Dropdown from './Dropdown';
import { Link } from "react-router-dom"
import NavbarSharedStyles from "./NavbarShared.module.css";

const NavbarItems = ({ items , close_menu}) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className={NavbarSharedStyles.navbar_items}>
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{' '}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} changeDropdownStatus={() => {close_menu(); setDropdown(false); }}
                    />
                </>
            ) : (
                <Link onClick={()=>{close_menu(); setDropdown(false)}} to={items.path}>{items.title} </Link>
            )}
        </li>
    )
}
export default NavbarItems;