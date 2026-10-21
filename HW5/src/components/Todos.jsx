import React from "react";

export const Todos = ({ listOfTodos, markTodoAsDone, deleteTodo }) => {
  return (
    <ol>
      {listOfTodos.map((todo) => (
        <li key={todo.id}>
          {todo.text}

          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => markTodoAsDone(todo)}
          />

          <button type="button" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
};
