import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="nav-logo">
      <img src={props.src} className="nav--icon" alt="logo-image" />
      <h3 className="nav--logo_text">Expense Tracker</h3>
    </nav>
  );
};
export default Navbar;
