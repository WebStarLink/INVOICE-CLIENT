import { Box, CircularProgress } from "@mui/material";
import COLORS from "constants/colors";
import STATUSES from "constants/statuses";
import { FormAuthorization, FormManageProfile } from "modules";
import React from "react";
import { useSelector } from "react-redux";
import { loadingStatusSelector, userResponseSelector } from "store/global";
import classes from "./ProfilePage.module.scss";

const ProfilePage = () => {
  const user = useSelector(userResponseSelector);
  const loading = useSelector(loadingStatusSelector);

  return (
    <div className={classes.wrapper}>
      <h1>My Profile</h1>
      {loading === STATUSES.LOADING ? (
        <Box sx={{ display: "flex", justifyContent: "center", color: "#000" }}>
          <CircularProgress sx={{ color: COLORS.LIGHTGRAY }} />
        </Box>
      ) : user ? (
        <FormManageProfile />
      ) : (
        <FormAuthorization />
      )}
    </div>
  );
};
export default ProfilePage;
