import React from "react";
import "../components/styles/TaskBannerStyle.css";

import Likes from "../components/LikesComponent.jsx";
import Profile from "../images/ico-profile-2.svg";

export const RepliedRow = (props) => (
  <div className="row mt-4">
    <div className="container mb-4" key={props.replied.replica}>
      <div className="row">
        <div className="col-md-1 mr-4">
          <img src={Profile} alt="profile" />
        </div>
        <div className="col-md-9 TaskRow_fondo py-2">
          <h4 className="TaskRow_texto">Usuario</h4>
          <p>{props.replied.replica}</p>
          <Likes />
        </div>
      </div>
    </div>
  </div>
);
