import styles from "./Navigation.module.css";

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className={styles.navi}>
        <Link to="/">Home</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}
