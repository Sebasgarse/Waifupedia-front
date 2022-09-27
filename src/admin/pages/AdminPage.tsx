import React from "react";
import { AdminLayout } from "../layout/AdminLayout";
import { AdminRoutes } from "../routes/AdminRoutes";

export const AdminPage = () => {
  return (
    <AdminLayout>
      <AdminRoutes></AdminRoutes>
    </AdminLayout>
  );
};
