import React from "react";
import "./Form.css";

function Form({ inputText, setInputText, todos, setToDos, setStatus }) {
  function inputTextHandler(event) {
    setInputText(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    todos = [
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 100 },
    ];
    setToDos(todos);
    setInputText("");
  }

  function statusHandler(event) {
    setStatus(event.target.value);
  }
  return (
    <form>
      <input type="text" onChange={inputTextHandler} value={inputText}></input>
      <button type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
