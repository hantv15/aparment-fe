import React from "react";
import { useHistory } from "react-router-dom";
import { isAuthenticate, logOut } from "../auth";
import Navbar from "./_part/Navbar";
import Sidebar from "./_part/Sidebar";

const Content = ({ title = "Dashboard", subTitle = "Dashboard", children }) => {
  const history = useHistory();
  const { data } = isAuthenticate();
  const logout = async () => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization: `Bearer ${data.token}`,
    };

    fetch("http://apartment-system.xyz/api/logout", {
      method: "POST",
      headers: headersList,
    })
      .then(function (response) {
        history.push("/");
      })
      .then(function (data) {
        console.log(data);
      });
  };
  return (
    <>
      <div>
        {/* Preloader */}
        {/* Navbar */}
        <Navbar />
        {/* /.navbar */}
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">
              Apartment Admin
            </span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            <Sidebar />
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">{title}</h1>
                </div>
                {/* /.col */}
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">{subTitle}</li>
                  </ol>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}

              {children}

              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        <footer className="main-footer">
          <strong>
            Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.2.0
          </div>
        </footer>
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    </>
  );
};
export default Content;