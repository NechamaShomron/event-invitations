import { Link } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import * as Icons from "react-icons/fa"
import styles from "./Header.module.css"


const Header = () => {
  return (
    <header>
      <div className={styles.nav_area}>
        <span className={styles.no_display}><Icons.FaBars /> </span>
        <Link to="/" className={styles.logo_container} >
          <div className={styles.logo_icon}><Icons.FaEnvelopeOpen />  </div>
          <span className={styles.logo_title}> הזמנות לאירועים </span>
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;