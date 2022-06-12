import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";
function App() {
  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    return storageTodos ?? [];
  });
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Effect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);
  //function
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  //localStorage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  return (
    <div className="App bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-16">
      <h1 className="font-bold text-3xl text-gray-700 mb-4">Todo List</h1>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
