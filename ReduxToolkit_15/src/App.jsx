import { useState } from "react";
import "./App.css";
import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo.jsx";

function App() {
  return (
    <>
      <h1>Todo</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
