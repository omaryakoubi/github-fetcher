import Link from "next/link";
import { Navbar } from "react-bootstrap";

function Nav() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Link href="/">
          <a
            style={{
              color: "white",
              fontSize: "30px",
              textDecoration: "none",
            }}
          >
            GITHUB FETCHER
          </a>
        </Link>
      </Navbar>
    </div>
  );
}

export default Nav;
