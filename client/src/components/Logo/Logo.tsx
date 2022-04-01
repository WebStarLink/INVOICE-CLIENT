import classes from "./Logo.module.scss";
import React from "react";

const Logo = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
    alt="Logo"
    className={classes.logo}
  />
);

export default Logo;
