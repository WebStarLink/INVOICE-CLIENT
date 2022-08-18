import { IProfile } from "interfaces";
import { FormClient } from "modules";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientsResponseSelector, createClient, getClients } from "store/global";
import classes from "./AddClientPage.module.scss";

const AddClientPage = () => {
  const dispatch = useDispatch();
  const clients = useSelector(clientsResponseSelector);

  const saveClientHandler = async (values: IProfile) => {
    if (!clients) {
      await dispatch(getClients());
    }
    await dispatch(createClient(values));
  };

  return (
    <div className={classes.wrapper}>
      <h1>Add client</h1>
      <FormClient onSubmit={saveClientHandler} />
    </div>
  );
};

export default AddClientPage;
