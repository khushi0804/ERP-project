import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-4 pt-4 text-white min-vh-100">
            <Link
              to="/dashboard"
              className="d-flex align-items-center pb-4 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-4 fw-bolder d-none d-sm-inline mb-3">
                Home
              </span>
            </Link>

            <ul className="list-unstyled">
              <li className="w-100 mb-4">
                <Link
                  to="/dashboard/employee"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-people ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">
                    Manage Employees
                  </span>
                </Link>
              </li>
              <li className="w-100 mb-4">
                <Link
                  to="/dashboard/category"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-columns ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">Category</span>
                </Link>
              </li>

              <li className="w-100 mb-4">
                <Link
                  to="/dashboard/profile"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-person ms-2"></i>
                  <span className="ms-3 d-none  d-sm-inline">Profile</span>
                </Link>
              </li>
              <li className="w-100 mb-5">
                <Link className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-3 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
