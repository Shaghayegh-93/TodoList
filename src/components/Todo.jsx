import React from "react";

const Todo = ({ todo, onCompleted, removeHandler }) => {
  return (
    <div
      className={`bg-white p-4 rounded-xl mb-6 ${
        todo.completed ? "opacity-80" : ""
      }`}
    >
      <div className="flex items-center justify-between pb-1 mb-1 border-b border-solid border-text-700">
        <div>
          <p
            className={`mb-6 text-text700 text-2xl font-bold ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.title}
          </p>
          <p className="text-text400 mb-2 font-light">{todo.description}</p>
        </div>

        <div className="flex items-center gap-6">
          <button className="w-6 h-6 text-rose500 bg-none" onClick={() => removeHandler(todo.id)}> ❌</button>
          <input
            type="checkbox"
            checked={todo.completed}
            id={todo.id}
            value={todo.id}
            className="scale-150"
            onChange={onCompleted}
          />
        </div>
      </div>
      <div>
        <p className="text-text300">
          {new Date(todo.createdAt).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
};

export default Todo;
