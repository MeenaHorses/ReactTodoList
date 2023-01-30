import React from "react";
import Todo from "./Todo";

function TodoList({ todos, delet }) {
  return todos.map((todo) => {
    return <Todo key={todo.id} todo={todo} delet={delet} />;
  });
}

export default TodoList;
