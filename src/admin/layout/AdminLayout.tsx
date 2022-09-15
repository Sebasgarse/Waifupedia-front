import React from "react";
import { AdminNav } from "../components/AdminNav.tsx";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-2">
            <AdminNav />
          </div>
          <div className="col">{children}</div>
        </div>
      </div>
    </div>
  );
};
