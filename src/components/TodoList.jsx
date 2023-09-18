import React from "react";
import Todo from "./Todo";

const TodoList = ({ todoList, onCompleted, removeHandler, sortBy }) => {
  let sortedTodoList = todoList;
  if (sortBy === "earliest")
    sortedTodoList = [...todoList].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  if (sortBy === "latest")
    sortedTodoList = [...todoList].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  if (sortBy === "completed")
    sortedTodoList = [...todoList].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );

  return (
    <div>
      <div>
        {sortedTodoList.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onCompleted={onCompleted}
            removeHandler={removeHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
