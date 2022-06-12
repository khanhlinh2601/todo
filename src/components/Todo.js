import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo flex flex-wrap justify-between mb-2">
      <li className={`todo-item ${todo.completed ? "completed" : ""} w-4/5 bg-gray-200 appearance-none border-2 border-gray-200 rounded  py-2 px-4 text-gray-700`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn ">
        <FontAwesomeIcon icon={faCheck} className="text-blue-400 hover:text-blue-700"/>
      </button>
      <button onClick={deleteHandler}>
        <FontAwesomeIcon icon={faTrash} className="text-red-400 hover:text-red-700"/>
      </button>
    </div>
  );
};

export default Todo;
