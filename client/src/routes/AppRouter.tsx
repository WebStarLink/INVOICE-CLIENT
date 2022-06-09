import React from "react";
import {
  HomePage,
  AddInvoicePage,
  AddContractPage,
  AddClientPage,
  ManageClientsPage,
  ProfilePage,
  NotFoundPage,
} from "pages";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/routes";

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<HomePage />} />
    <Route path={ROUTES.ADD_INVOICE} element={<AddInvoicePage />} />
    <Route path={ROUTES.ADD_CONTRACT} element={<AddContractPage />} />
    <Route path={ROUTES.ADD_CLIENT} element={<AddClientPage />} />
    <Route path={ROUTES.CLIENTS} element={<ManageClientsPage />} />
    <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
    <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
);

export default AppRouter;
