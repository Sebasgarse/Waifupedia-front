import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "./admin/pages/AdminPage.tsx";
import { HomePage } from "./home/HomePage.tsx";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />}></Route>
      <Route path="/admin/*" element={<AdminPage />}></Route>
    </Routes>
  );
};
