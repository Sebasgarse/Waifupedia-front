import React from "react";
import "./AdminBar.css";

export const AdminBar = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-end justify-content-lg-end">
      <form
        className="admin-bar__search-bar d-flex align-items-center"
        role="search"
      >
        <i className="fas fa-search"></i>
        <input type="search" placeholder="Search..." aria-label="Search" />
      </form>
      <div
        className="d-flex justify-content-around align-items-center"
        style={{ width: "6em" }}
      >
        <i className="fas fa-cog"></i>
        <div
          className=""
          style={{
            borderRadius: "100%",
            background: "gray",
            height: "25px",
            width: "25px",
            padding: 0,
            textAlign: "center",
          }}
        >
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
};
