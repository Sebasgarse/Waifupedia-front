import React from "react";

export const AdminBar = () => {
  return (
    <div className="d-flex flex-wrap align-items-center justify-content-end justify-content-lg-end">
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div className="row">
        <i className="col fas fa-cog"></i>
        <div
          className="col"
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
