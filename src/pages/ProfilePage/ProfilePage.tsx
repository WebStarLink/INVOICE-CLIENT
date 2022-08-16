import { Box, CircularProgress } from "@mui/material";
import COLORS from "constants/colors";
import STATUSES from "constants/statuses";
import { IProfile } from "interfaces";
import { FormAuthorization, FormProfile } from "modules";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadingStatusSelector, updateProfile, userResponseSelector } from "store/global";
import classes from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const user = useSelector(userResponseSelector);
  const loading = useSelector(loadingStatusSelector);
  const dispatch = useDispatch();
  const profile = user?.profile;
  const saveProfileHandler = (values: IProfile) => {
    dispatch(updateProfile(values));

    console.log(values);
  };

  return (
    <div className={classes.wrapper}>
      <h1>My Profile</h1>
      {loading === STATUSES.LOADING ? (
        <Box sx={{ display: "flex", justifyContent: "center", color: "#000" }}>
          <CircularProgress sx={{ color: COLORS.LIGHTGRAY }} />
        </Box>
      ) : profile ? (
        <FormProfile profile={profile} onSubmit={saveProfileHandler} />
      ) : (
        <FormAuthorization />
      )}
    </div>
  );
};
export default ProfilePage;
