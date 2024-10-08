import styles from "./Navigation.module.css";

import { Link } from "react-router-dom";
import UserNav from "./UserNav";
import AuthNav from "./AuthNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <nav className={styles.navi}>
        <Link to="/">Home</Link>
        {isLoggedIn && <Link to="/contacts">Contacts</Link>}
        {isLoggedIn ? <UserNav /> : <AuthNav />}
      </nav>
    </div>
  );
}
