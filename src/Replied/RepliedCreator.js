import React, { useState } from "react";

export const RepliedCreator = (props) => {
  const [newRepliedReplica, setNewRepliedReplica] = useState("");
  const updateNewRepliedValue = (e) => setNewRepliedReplica(e.target.value);
  const createNewReplied = () => {
    props.callback(newRepliedReplica);
    setNewRepliedReplica("");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={newRepliedReplica}
            onChange={updateNewRepliedValue}
            placeholder="agrega tu comentario"
          />
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary mt-1" onClick={createNewReplied}>
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
};
