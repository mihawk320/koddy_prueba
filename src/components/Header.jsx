import React from "react";
import "./styles/HeaderStyle.css";
import { Modal } from "./Modal";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header sticky-top">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand mr-3" href="#dad">
              <h2>Prueba técnica</h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link nav" href="#home">
                    Inicio
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <button
                  className="btn btn-outline-info my-2 my-sm-0"
                  type="button"
                  data-toggle="modal"
                  data-target="#modal1"
                >
                  Iniciar Sesión
                </button>
              </form>
            </div>
          </nav>
        </header>
        <Modal />
      </div>
    );
  }
}

export default Header;
