import React, { useState, useEffect } from "react";

import "./components/styles/TaskBannerStyle.css";
import { TaskRow } from "./components/TaskRow";
import { TaskCreator } from "./components/TaskCreator";
import Main from "./components/Main";
import Header from "./components/Header";
import Contacto from "./components/Contacto";

function App() {
  const [userName, setUserName] = useState("Usuario");
  const [taskItems, setTaskItems] = useState([
    {
      comentario: "Ejemplo 1 de comentario 1",
    },
  ]);

  useEffect(() => {
    let data = localStorage.getItem("task");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("Usuario");
      setTaskItems([
        {
          comentario: "Ejemplo número 1",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems));
  }, [taskItems]);

  const CreateNewTask = (taskName) => {
    setTaskItems([...taskItems, { comentario: taskName }]);
  };

  const taskTableRows = () =>
    taskItems.map((task) => <TaskRow task={task} key={task.comentario} />);

  return (
    <div>
      <Header />
      <Main />

      <div className="container">
        <a
          className="btn btn-primary plus-minus btn-lg"
          data-toggle="collapse"
          href="#collapseExample1"
          aria-expanded="true"
          aria-controls="collapseExample1"
        >
          Discussion {userName} ( {taskItems.length} Comentarios)
        </a>

        <div className="collapse in" id="collapseExample1">
          <TaskCreator callback={CreateNewTask} />
          <div>{taskTableRows()}</div>
        </div>
        <Contacto className="mt-3" />
      </div>
    </div>
  );
}

export default App;
