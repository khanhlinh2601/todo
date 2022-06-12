import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className=" flex flex-wrap ">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input w-4/5 bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        placeholder="Enter todo..."
        spellCheck="false"
      />
      <button
        onClick={submitTodoHandler}
        className="todo-button ml-2 w-1/6 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded"
        type="submit"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
      <div className="mt-2 mb-4">
        <select
          onChange={statusHandler}
          name="todos"
          className="form-select block w-full
          px-3
          py-1.5
          text-base
          text-gray-700
          bg-white bg-clip-padding bg-no-repeat
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-purple-500 focus:outline-none"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
