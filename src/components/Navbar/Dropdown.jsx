import React from "react";
import styles from "./Dropdown.module.css";
import NavbarSharedStyles from "./NavbarShared.module.css";
import { Link } from "react-router-dom"


const Dropdown = ({ submenus, dropdown, changeDropdownStatus }) => {
    return (
        <ul className={`${styles.dropdown} ${dropdown ? styles.show : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className={NavbarSharedStyles.navbar_items}>
                    <Link onClick={() => changeDropdownStatus()} to={submenu.path}>{submenu.title}</Link>
                </li>
            ))}
        </ul>
    );
}
export default Dropdown;