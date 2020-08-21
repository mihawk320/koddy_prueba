import React from "react";
import "../components/styles/TaskBannerStyle.css";

export const TaskBanner = (props) => (
  <div className="container">
    <a
      class="btn btn-primary plus-minus"
      data-toggle="collapse"
      href="#collapseExample1"
      aria-expanded="true"
      aria-controls="collapseExample1"
    >
      Discussion ( {props.taskItems.length} Comentarios)
    </a>

    <div className="collapse in" id="collapseExample1">
      me
    </div>
  </div>
);
