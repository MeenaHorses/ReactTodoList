import React, { useRef, useState } from "react";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const inputNameRef = useRef();

  function addTask() {
    const input = inputNameRef.current.value;
    if (!input) return;
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: new Date().getTime().toString(),
          name: input,
        },
      ];
    });

    inputNameRef.current.value = null;
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function delet(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <>
      <h1 className="header-one"> Task List 2023</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="main-input"
          ref={inputNameRef}
          type="text"
          placeholder="What do you have planned?"
          autoFocus
        ></input>
        <button className="add-task-button" onClick={addTask}>
          Add task
        </button>
      </form>

      <h2 className="header-two">Tasks</h2>
      <TodoList todos={todos} delet={delet} />
      <div className="todo-left">
        {todos.filter((todo) => todo).length} left to do
      </div>
    </>
  );
}
export default App;
