import { FormAddClient } from "modules";
import React from "react";
import classes from "./AddClientPage.module.scss";

const AddClientPage = () => {
  return (
    <div className={classes.wrapper}>
      <h1>Add client</h1>
      <FormAddClient />
    </div>
  );
};

export default AddClientPage;
