import React, { useEffect } from "react";
import STATUSES from "constants/statuses";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { loadingStatusSelector, getFakeData, globalResponseSelector } from "store/global";
import { useSelector, useDispatch } from "react-redux";

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
    <>
      <h1>HomePage</h1>
      {loadingStatus !== STATUSES.DONE ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <p>{JSON.stringify(fakeData)}</p>
      )}
    </>
  );
};
export default HomePage;
