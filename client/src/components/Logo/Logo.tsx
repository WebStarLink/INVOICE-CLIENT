import classes from "./Logo.module.scss";
import React from "react";
import { ReactComponent as LogoIcon } from "assets/icons/invoice-icon.svg";

const Logo = () => <LogoIcon className={classes.logo} />;

export default Logo;
