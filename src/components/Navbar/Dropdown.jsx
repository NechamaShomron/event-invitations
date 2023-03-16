import React from "react";
import styles from "./Dropdown.module.css";
import sharedStyles from "./Shared.module.css";
import {Link} from "react-router-dom"


const Dropdown = ({ submenus, dropdown }) => {
    return (
        <ul className={`${styles.dropdown} ${dropdown ? styles.show : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className={sharedStyles.navbar_items}>
                    <Link to={submenu.path}>{submenu.title}</Link>
                </li>
            ))}
        </ul>
    );
}
export default Dropdown;