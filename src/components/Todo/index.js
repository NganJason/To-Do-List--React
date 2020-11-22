import React from "react";
import "./Todo.css";

function Todo({ filteredTodo, todos, setToDos }) {
  function deleteHandler() {
    todos = todos.filter((item) => item.id !== filteredTodo.id);
    setToDos(todos);
  }

  function completeHandler() {
    todos = todos.map((item) => {
      if (item.id === filteredTodo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    setToDos(todos);
  }
  return (
    <div className="todo">
      <li className={`todo-item ${filteredTodo.completed ? "completed" : ""}`}>
        {filteredTodo.text}
      </li>
      <button className="todo-completed complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="todo-delete trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
