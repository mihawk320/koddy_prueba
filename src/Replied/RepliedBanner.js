import React from "react";

export const RepliedBanner = (props) => (
  <h4 className="bg-primary text-white text-center p-4">
    {props.userNameR} ({props.repliedItems.length})
  </h4>
);
