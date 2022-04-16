import React from "react";
import { Header } from "modules";
import "styles/global.scss";
import AppRouter from "routes/AppRouter";

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default App;
