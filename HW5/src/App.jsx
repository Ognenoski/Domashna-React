import React, { useState } from "react";
import { Todos } from "./components/Todos";

export function App() {
  const [newTodo, setNewTodo] = useState("");

  const [todos, setTodos] = useState(() => [
    { id: Math.random(), text: "Learn React", done: false },
    { id: Math.random(), text: "Eat Dinner", done: false },
    { id: Math.random(), text: "Go to Sleep", done: false }
  ]);

  function addNewTodo() {
    const text = newTodo.trim();

    if (text === "") {
      alert("Please enter a todo!");
      return;
    }

    const newObject = {
      id: Math.random(),
      text: text,
      done: false
    };

    setTodos([...todos, newObject]);
    setNewTodo("");
  }

  function markTodoAsDone(todo) {
    setTodos(
      todos.map(item =>
        item.id === todo.id
          ? { ...item, done: !item.done }
          : item
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div id="app">
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter TODO"
        value={newTodo}
        onChange={e => setNewTodo(e.target.value)}
      />

      <button type="button" onClick={addNewTodo}>
        Add Todo
      </button>

      <Todos
        listOfTodos={todos}
        markTodoAsDone={markTodoAsDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}