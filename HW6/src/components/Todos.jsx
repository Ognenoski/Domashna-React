import React from "react";

export const Todos = ({
  listOfTodos,
  deleteTodo,
  markTodoAsDone,
  edit,
  editObject,
  startEdit,
  changeEditText,
  saveEdit,
  cancelEdit,
}) => {
  //Cekor 2. definiram komponenta za prikaz so props listOfTodos

  return (
    <div>
      {listOfTodos.length > 0 ? (
        //   Cekor 4 definiram tabela za prikaz na elementi
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Item</th>
              <th>Completed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Cekor 4.1 mapiram vo tbody elemenite od array-ot */}
            {listOfTodos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>
                    {edit && editObject.id === todo.id ? (
                      <input
                        type="text"
                        value={editObject.text}
                        onChange={changeEditText}
                      />
                    ) : (
                      todo.text
                    )}
                  </td>
                  <td>
                    <input
                      type={"checkbox"}
                      checked={todo.completed}
                      onChange={() => {
                        markTodoAsDone(todo);
                      }}
                    ></input>
                  </td>
                  <td>
                    {edit && editObject.id === todo.id ? (
                      <span>
                        <button onClick={saveEdit}>Save</button>
                        <button onClick={cancelEdit}>Cancel</button>
                      </span>
                    ) : (
                      <span>
                        <button onClick={() => startEdit(todo)}>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)}>
                          Delete
                        </button>
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>No items added in array yet!!!</h2>
      )}
    </div>
  );
};
