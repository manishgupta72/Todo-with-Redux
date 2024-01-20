import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/action/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [utext, setText] = useState('');
  const handleEditTodo = (id) => {
    const existTodos = todos.filter((f) => f.id == id);
    console.log(existTodos);
    const { text } = existTodos[0];
    setText(text)
    dispatch(updateTodo({id:id,text:utext}))
  };

  return (
    <>
      <h2>Todos:</h2>
      <ol className="list-group list-group-numbered">
        {todos.map((todo) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={todo.id}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{todo.text}</div>
            </div>
            <button
              className="btn "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
              onClick={() => handleEditTodo(todo.id)}
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button
              className="btn"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </li>
        ))}
      </ol>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                New message
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Update Todos:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter title"
                    value={utext}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
