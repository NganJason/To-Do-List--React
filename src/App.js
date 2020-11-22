import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalStorage();
  }, [todos, status]);

  function getLocalStorage() {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setToDos(todoLocal);
    }
  }

  function saveLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function filterHandler() {
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
  }

  return (
    <div className="pageContainer">
      <header className="pageTitle">To Do List</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setToDos={setToDos}
        setStatus={setStatus}
      />
      <Todolist
        todos={todos}
        setToDos={setToDos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
