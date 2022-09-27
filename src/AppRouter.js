import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./admin/pages/AdminPage.tsx";
import { PublicRoutes } from "./routes/PublicRoutes.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminPage />}></Route>
      <Route path="/*" element={<PublicRoutes />}></Route>
    </Routes>
  );
};
