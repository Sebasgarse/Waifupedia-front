import React from "react";
import { AdminNav } from "../components/AdminNav";
import CSS from "csstype";
import { AdminBar } from "../components/AdminBar";

export const AdminLayout = ({ children }) => {
  const BaseCss: CSS.Properties = {
    backgroundColor: "#ffffff",
    backgroundImage: `url("${process.env.PUBLIC_URL}/subtle-prism.svg")`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    height: "100vh",
  };
  const templateCss: CSS.Properties = {
    backgroundColor: "#EAEEF4",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    padding: "20px 20px 20px 16em",
  };

  return (
    <div style={BaseCss}>
      <div style={{ padding: "50px", height: "100%" }}>
        <div style={{ height: "100%" }}>
          <div style={{ height: "100%", position: "relative" }}>
            <AdminNav />
            <div style={templateCss}>
              <AdminBar />
              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
