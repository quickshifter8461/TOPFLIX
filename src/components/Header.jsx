import React from "react";

function Header({ industry }) {
  return (
    <>
      <div className="navbar bg-color sticky-top" data-bs-theme="dark">
        <div className="container ">
          <nav className="navbar navbar-expand-lg container py-2">
            <div className="container d-flex flex-row justify-content-between align-items center">
              <a className="navbar-brand m-0 fs-3 rubik" href="/">
                <img src="/Images/topflix.jpg" alt="TOPFLIX logo"
                  className="logo"
                />
              </a>
              <button
                className="navbar-toggler border-0 fs-6"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon text-primary" />
              </button>
              <div
                className="offcanvas offcanvas-end colored w-50"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                    MENU
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav  flex-grow-1 mb-0 gap-3 justify-content-end rubik">
                    <li className="nav-item">
                      <a
                        className="nav-link fw-bolder fs-6 "
                        aria-current="page"
                        href="#Hollywood"
                      >
                        Hollywood
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bolder " href="#Bollywood">
                        Bollywood
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bolder" href="#Malayalam">
                        Mollywood
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bolder" href="#Tamil">
                        Kollywood
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bolder " href="#Telugu">
                        Tollywood
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
