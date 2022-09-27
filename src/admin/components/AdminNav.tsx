import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNav.css";

export const AdminNav = () => {
  const activeNavLinkHandler = ({ isActive }) => {
    return isActive ? "admin-nav__item--active" : "";
  };
  return (
    <nav className="admin-nav">
      <div className="admin-nav__options">
        <div></div>
        <div className="admin-nav__options-menu">
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <ul className="list-group admin-nav__list">
        <NavLink to="main" className={activeNavLinkHandler}>
          <li className="list-group-item admin-nav__item">
            <i className="fas fa-home"></i>Main
          </li>
        </NavLink>
        <NavLink to="gallery" className={activeNavLinkHandler}>
          <li className="list-group-item admin-nav__item">
            <i className="fas fa-images"></i>Gallery
          </li>
        </NavLink>
        <NavLink to="users" className={activeNavLinkHandler}>
          <li className="list-group-item admin-nav__item">
            <i className="fas fa-user"></i>Users
          </li>
        </NavLink>
        <NavLink to="management" className={activeNavLinkHandler}>
          <li className="list-group-item admin-nav__item">
            <i className="fas fa-edit"></i>Management
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};
