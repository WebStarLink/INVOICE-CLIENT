import React, { useEffect } from "react";
import STATUSES from "constants/statuses";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { loadingStatusSelector, getFakeData, globalResponseSelector } from "store/global";
import { useSelector, useDispatch } from "react-redux";
import classes from "./HomePage.module.scss";

const HomePage = () => {
  const loadingStatus = useSelector(loadingStatusSelector);
  const dispatch = useDispatch();
  const fakeData = useSelector(globalResponseSelector);
  console.log("Hello");
  console.log(fakeData);

  useEffect(() => {
    dispatch(getFakeData());
  }, [dispatch]);

  return (
    <div className={classes.wrapper}>
      <h1>HomePage</h1>
      {loadingStatus !== STATUSES.DONE ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <p>{JSON.stringify(fakeData)}</p>
      )}
    </div>
  );
};
export default HomePage;
