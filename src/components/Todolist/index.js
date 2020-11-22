import React from "react";
import "./Todolist.css";
import Todo from "../Todo";

function Todolist({ todos, setToDos, filteredTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((filteredTodo) => {
          return (
            <Todo
              filteredTodo={filteredTodo}
              todos={todos}
              setToDos={setToDos}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Todolist;
