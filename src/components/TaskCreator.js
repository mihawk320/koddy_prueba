import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");
  const updateNewTaskValue = (e) => setNewTaskName(e.target.value);
  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={newTaskName}
            onChange={updateNewTaskValue}
            placeholder="agrega tu comentario"
          />
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary mt-1" onClick={createNewTask}>
            Comentar
          </button>
        </div>
      </div>
    </div>
  );
};
