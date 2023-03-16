import React, { useState } from "react";
import Dropdown from './Dropdown';
import { Link } from "react-router-dom"
import sharedStyles from "./Shared.module.css";

const NavbarItems = ({ items }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className={sharedStyles.navbar_items}>
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{' '}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} changeDropdownStatus={() => setDropdown(false)}
                    />
                </>
            ) : (
                <Link to={items.path}>{items.title} </Link>
            )}
        </li>
    )
}
export default NavbarItems;