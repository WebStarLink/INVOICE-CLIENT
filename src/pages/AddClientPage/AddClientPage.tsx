import { IProfile } from "interfaces";
import { FormProfile } from "modules";
import React from "react";
import classes from "./AddClientPage.module.scss";

const AddClientPage = () => {
  const saveClientHandler = (values: IProfile) => {
    console.log(values);
  };
  return (
    <div className={classes.wrapper}>
      <h1>Add client</h1>
      <FormProfile onSubmit={saveClientHandler} />
    </div>
  );
};

export default AddClientPage;
