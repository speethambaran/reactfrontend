import React from "react";

function Header() {
  return (
    <div className="header">
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" style={{ color: "green" }}>
          <img
            src="http://159.89.163.128:7001/img/logo.png"
            className="header-logo w-100"
          />
          {/* Envitus */}
        </a>
        <form class="form-inline">
          <div class="dropdown " style={{Left:"-10px",position:"relative"}}>
            <i
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Account
            </i>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">
                Logout
              </a>
              <a class="dropdown-item" href="#">
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
