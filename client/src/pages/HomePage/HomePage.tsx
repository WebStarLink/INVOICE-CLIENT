import React from "react";
import classes from "./HomePage.module.scss";
import { FormAuthorization } from "modules";
import { useSelector } from "react-redux";
import { loadingStatusSelector } from "store/global";
import STATUSES from "constants/statuses";
import { Box, CircularProgress } from "@mui/material";
import COLORS from "constants/colors";

const HomePage = () => {
  const loading = useSelector(loadingStatusSelector);

  return (
    <div className={classes.wrapper}>
      <h1>HomePage</h1>
      {loading === STATUSES.LOADING ? (
        <Box sx={{ display: "flex", justifyContent: "center", color: "#000" }}>
          <CircularProgress sx={{ color: COLORS.LIGHTGRAY }} />
        </Box>
      ) : (
        <FormAuthorization />
      )}
    </div>
  );
};
export default HomePage;
