import React from "react";
import classes from "./HomePage.module.scss";
import { FormAuthorization } from "modules";
import { useSelector } from "react-redux";
import { userResponseSelector } from "store/global";

const HomePage = () => {
  const user = useSelector(userResponseSelector);

  return (
    <div className={classes.wrapper}>
      <h1>HomePage</h1>
      {user?.email ? <h2>{user.email}</h2> : <FormAuthorization />}
    </div>
  );
};
export default HomePage;
