import React from "react";

function Header() {
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
        <form className="form-inline">
          <div className="dropdown " style={{Left:"-10px",position:"relative"}}>
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
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">
                Logout
              </a>
              <a className="dropdown-item" href="#">
                Profile
              </a>
              
            </div>
          </div>
        </form>
      </nav>
    </div>
  );
}

export default Header;
