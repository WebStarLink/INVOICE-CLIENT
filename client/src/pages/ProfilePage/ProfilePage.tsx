import { Box, Skeleton } from "@mui/material";
import { IUser } from "interfaces";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clientResponseSelector, getClients } from "store/global";
import classes from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const clients = useSelector(clientResponseSelector);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <h1>My Profile</h1>
      {clients.length ? (
        clients.map((el: IUser) => JSON.stringify(el, null, 2))
      ) : (
        <Box>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" />
        </Box>
      )}
    </div>
  );
};
export default ProfilePage;
