import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={classes.Container}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/jobs">Jobs</Link>
    </div>
  );
};

export default Navbar;
