import Link from "next/link";
import { Navbar } from "react-bootstrap";

import styles from "../styles/navbar.module.css";

function Nav() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Link href="/">
          <a className={styles.navbar}>GITHUB FETCHER</a>
        </Link>
      </Navbar>
    </div>
  );
}

export default Nav;
