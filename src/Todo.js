import React from "react";
import "./Todo.css";

function Todo({ todo, delet }) {
  return (
    <div className="div">
      <input
        className="entry-field"
        value={todo.name}
        type="readOnly"
        onChange={(e) => e.target.value}
      ></input>
      <button className="btn-delete" onClick={() => delet(todo.id)}>
        Delete
      </button>
    </div>
  );
}

export default Todo;
