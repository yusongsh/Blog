import * as React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
