import React from "react";
import "./styles/TaskBannerStyle.css";

import Likes from "./LikesComponent";
import Profile from "../images/ico-profile.svg";
import Replied from "../Replied/Replied";

export const TaskRow = (props) => {
  return (
    <div className="row mt-4">
      <div className="col-md-8">
        <div className="container mb-4" key={props.task.comentario}>
          <div className="row">
            <div className="col-md-1 mr-3">
              <img src={Profile} alt="profile" />
            </div>
            <div className="col-md-9 TaskRow_fondo py-2">
              <h4 className="TaskRow_texto">Usuario</h4>
              <p>{props.task.comentario}</p>
              <Likes />
            </div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-9">
              {" "}
              <Replied />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-4"></div>
    </div>
  );
};
