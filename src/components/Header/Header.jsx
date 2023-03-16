import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import * as Icons from "react-icons/fa"
import styles from "./Header.module.css"


const Header = () => {
  return (
    <header>
      <div className={styles.nav_area}>
        <Link to="/"  className={styles.logo} >
           <span className={styles.title}> הזמנות לאירועים </span>
            <Icons.FaEnvelopeOpen />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;