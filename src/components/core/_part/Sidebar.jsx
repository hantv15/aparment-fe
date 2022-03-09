import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img
            src="dist/img/user2-160x160.jpg"
            className="img-circle elevation-2"
            alt="User Image"
          />
        </div>
        <div className="info">
          <a href="#" className="d-block">
            Alexander Pierce
          </a>
        </div>
      </div>
      {/* SidebarSearch Form */}
      <div className="form-inline">
        <div className="input-group" data-widget="sidebar-search">
          <input
            className="form-control form-control-sidebar"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="input-group-append">
            <button className="btn btn-sidebar">
              <i className="fas fa-search fa-fw" />
            </button>
          </div>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul
          className="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          {/* Add icons to the links using the .nav-icon class
 with font-awesome or any other icon font library */}
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>Dashboard</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/apartment" className="nav-link">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>Căn hộ</p>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
