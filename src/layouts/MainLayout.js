import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-layout-base">{children}</main>
      <Footer />
    </>
  );
};
