import React from "react";

export const Modal = (props) => (
  <div>
    <div
      className="modal fade"
      id="modal1"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Inicia sesión
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <h4 className="text-center mb-3">Inicia sesión con tu correo</h4>
              <form action="" method="POST">
                <input
                  className="form-control caja_correo"
                  type="text"
                  name="user"
                  placeholder="Ingresa tu correo"
                  required
                />
                <input
                  className="form-control caja_correo"
                  type="password"
                  name="pass"
                  placeholder="Ingresa tu contraseña"
                  required
                />
                <button type="submit" className="btn btn-lg btn-block btn2">
                  Iniciar sesión
                </button>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              data-toggle="modal"
              data-target="#modal2"
            >
              Crear una cuenta
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      className="modal fade"
      id="modal2"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Crea una nueva cuenta
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Ingresa tu nombre"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="correo"
                  placeholder="Ingresa tu email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  name="user"
                  placeholder="Ingresa tu usuario"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="pass"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">
                  Repite la contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="passr"
                  placeholder="Ingresa nuevamente tu contraseña"
                />
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#modal1"
                  data-dismiss="modal"
                >
                  Regresar al login
                </button>
                <button
                  type="submit"
                  name="registrar"
                  className="btn btn-primary"
                >
                  Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);
