import { Fragment } from "react";

import Nav from "./Nav";

function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      {children}
    </Fragment>
  );
}

export default Layout;
