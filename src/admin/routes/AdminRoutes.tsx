import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GalleryPage } from "../pages/GalleryPage";
import { MainPage } from "../pages/MainPage";

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/gallery" element={<GalleryPage />}></Route>
      <Route path="/*" element={<Navigate to={"/admin/main"} />}></Route>
    </Routes>
  );
};
