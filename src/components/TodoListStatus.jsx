import React from "react";
import Message from "./Message";

const TodoListStatus = ({ todoList }) => {
  const allTodo = todoList.length;
  const completedTodo = todoList.filter((todo) => todo.completed).length;
  const openTodo = allTodo - completedTodo;

  if (!allTodo)
    return (
      <Message>
        ℹ️ <span>No Notes has already been added.</span> <span>🧐</span>
      </Message>
    );
  return (
    <ul className="flex justify-between mb-8 text-text400">
      <li className="">
        All
        <span className="rounded-[32px] inline-block bg-text400 py-1 px-3 text-base font-bold text-text700 ml-1">
          {allTodo}
        </span>
      </li>
      <li>
        Completed
        <span className="rounded-[32px] inline-block bg-text400 py-1 px-3 text-base font-bold text-text700 ml-1">
          {completedTodo}
        </span>
      </li>
      <li>
        Open
        <span className="rounded-[32px] inline-block bg-text400 py-1 px-3 text-base font-bold text-text700 ml-1">
          {openTodo}
        </span>
      </li>
    </ul>
  );
};

export default TodoListStatus;
