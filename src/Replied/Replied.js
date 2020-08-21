import React, { useState, useEffect } from "react";
import { RepliedRow } from "./RepliedRow";

import { RepliedCreator } from "./RepliedCreator";

function Replied() {
  const [userNameR, setUserNameR] = useState("Usuario");
  const [repliedItems, setRepliedItems] = useState([
    {
      replica: "Primera replica ",
    },
  ]);

  useEffect(() => {
    let data = localStorage.getItem("replied");
    if (data != null) {
      setRepliedItems(JSON.parse(data));
    } else {
      setUserNameR("Usuario");
      setRepliedItems([
        {
          replica: "e",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("replied", JSON.stringify(repliedItems));
  }, [repliedItems]);

  const createNewReplied = (repliedReplica) => {
    if (!repliedItems.find((t) => t.replica === repliedReplica)) {
      setRepliedItems([...repliedItems, { replica: repliedReplica }]);
    }
  };

  const repliedTableRows = () =>
    repliedItems.map((replied) => (
      <RepliedRow replied={replied} key={replied.replica} />
    ));

  return (
    <div>
      {" "}
      <button type="button" className="btn btn-outline-primary">
        {repliedItems.length} Comentarios de {userNameR}
      </button>
      <RepliedCreator callback={createNewReplied} />
      <div> {repliedTableRows()} </div>
    </div>
  );
}

export default Replied;
