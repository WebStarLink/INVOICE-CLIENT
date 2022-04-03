import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFakeData, globalResponseSelector, loadingStatusSelector } from "store/global";
import STATUSES from "constants/statuses";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Header } from "modules";

const App = () => {
  const dispatch = useDispatch();
  const fakeData = useSelector(globalResponseSelector);
  const loadingStatus = useSelector(loadingStatusSelector);
  console.log("Hello");
  console.log(fakeData);

  useEffect(() => {
    dispatch(getFakeData());
  }, [dispatch]);

  return (
    <>
      <Header />
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

export default App;
