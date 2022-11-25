import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [userInfo, setUserInfo] = useState(false);
  const navigate = useNavigate();
  const logoutUser = () => {
    localStorage.removeItem("loginStatus");
    navigate("/");
  };
  useState(() => {
    let logginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    if (logginStatus) {
      setUserInfo(true);
    }
  }, []);
  return (
    <div className="header">
      <nav className="navbar navbar-light">
        <a className="navbar-brand" style={{ color: "green" }} href="/">
          <img
            src="http://159.89.163.128:7001/img/logo.png"
            className="header-logo w-100"
          />
          {/* Envitus */}
        </a>
        {userInfo && (
          <form className="form-inline">
            <div
              className="dropdown "
              style={{ Left: "-10px", position: "relative" }}
            >
              <img
                src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                className="thumb"
              />
              <i
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account
              </i>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Profile
                </a>
                <a className="dropdown-item" href="#" onClick={logoutUser}>
                  Logout
                </a>
                {/* <a className="dropdown-item" href="#">
                Profile
              </a> */}
              </div>
            </div>
          </form>
        )}
      </nav>
      <div>
        <div
          class="modal fade"
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              {/*  */}
              <div class="modal-body">
                <div className="text-center">
                  <img
                    src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                    className="profImg"
                  />
                </div>
                <div className="text-center">
                  <div className="row">
                    <div className="col-md-4">Username</div>
                    <div className="col-md-4">:</div>
                    <div className="col-md-4">envitus</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">Name</div>
                    <div className="col-md-4">:</div>
                    <div className="col-md-4">Envitus</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">Email</div>
                    <div className="col-md-4">:</div>
                    <div className="col-md-4">envitus@gmail.com</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">Role</div>
                    <div className="col-md-4">:</div>
                    <div className="col-md-4">Super Admin</div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
