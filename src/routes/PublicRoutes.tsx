import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { MainLayout } from "../layouts/MainLayout";

export const PublicRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </MainLayout>
  );
};
