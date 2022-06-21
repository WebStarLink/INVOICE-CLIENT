import React from "react";
import classes from "./HomePage.module.scss";
import { FormAuthorization } from "modules";

const HomePage = () => {
  return (
    <div className={classes.wrapper}>
      <h1>HomePage</h1>
      <FormAuthorization />
    </div>
  );
};
export default HomePage;
