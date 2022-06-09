import React, { useEffect } from "react";
import { Header } from "modules";
import "styles/global.scss";
import AppRouter from "routes/AppRouter";
import { useDispatch } from "react-redux";
import { authCheck } from "store/global";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(authCheck());
    }
  }, [dispatch]);

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
