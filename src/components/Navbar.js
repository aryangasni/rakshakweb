import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img
            src="/images/logo4.gif"
            style={{ width: "10%" }}
            alt="rakshak logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/planes">
                  Planes
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/competition">
                  Competition
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/subsystems">
                  Subsystems
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/team">
                  Team
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
