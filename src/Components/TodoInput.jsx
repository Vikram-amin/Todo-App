import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoInput() {
  const [query, setQuery] = useState("");
  const [task, setTask] = useState("");

  const handleAdd = () => {
    const payLoad = {
      query,
      status: false,
      id: uuid()
    };
    const upodateTask = [...task, payLoad];
    setTask(upodateTask);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleAdd}> ADD </button>

      {/* {
   task.map(({query}) => (
     <div>{query}</div>
   ))
 } */}
    </div>
  );
}

export default TodoInput;
