import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNav.css";

export const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <ul className="list-group admin-nav__list">
        <NavLink to="main">
          <li className="list-group-item admin-nav__item">Main</li>
        </NavLink>
        <NavLink to="gallery">
          <li className="list-group-item admin-nav__item">Gallery</li>
        </NavLink>

        <li className="list-group-item admin-nav__item">A second item</li>
        <li className="list-group-item admin-nav__item">A third item</li>
        <li className="list-group-item admin-nav__item">A fourth item</li>
        <li className="list-group-item admin-nav__item">And a fifth one</li>
      </ul>
    </nav>
  );
};
