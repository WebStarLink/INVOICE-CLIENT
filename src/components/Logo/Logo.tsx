import classes from "./Logo.module.scss";
import React from "react";
import { ReactComponent as LogoIcon } from "assets/icons/invoice-icon.svg";
import { ILogo } from "./interface";

const Logo = ({ onClick }: ILogo) => <LogoIcon className={classes.logo} onClick={onClick} />;

export default Logo;
