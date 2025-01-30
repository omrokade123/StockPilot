import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token"); // Or use cookies
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token on logout
    setIsLoggedIn(false);
  };


  return (
    <nav
      class="navbar navbar-expand-lg border-bottom sticky-top"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-1">
        <Link class="navbar-brand" to="/">
          <img
            style={{ width: "25%" }}
            src="Media/images/logo.svg"
            alt="Logo"
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {!isLoggedIn?(
              <>
                  <li class="nav-item">
                  <Link class="nav-link active"  to="/signup">
                  SignUp
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active"  to="/login">
                    Login
                  </Link>
                </li>
            </>
            ):(
              <>
                 <li class="nav-item">
                  <Link class="nav-link active"  to="/Home" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </>
            )
            }
            
            <li class="nav-item ">
              <Link class="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item ">
              <Link class="nav-link active" to="support">
                Supports
              </Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
