import { useEffect, useState } from "react";
import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import TodoListStatus from "./components/TodoListStatus";

function App() {
  const [todoList, setTodoList] = useState(
    () => JSON.parse(localStorage.getItem("TODOLIST")) || []
  );
  const [sortBy, setSortBy] = useState("earliest");

  const onAddTodo = (newTodo) => {
    setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
  };
  const onCompleted = (e) => {
    const todoId = Number(e.target.value);

    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const removeHandler = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  
  useEffect(() => {
    localStorage.setItem("TODOLIST", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="container ">
      <Navbar
        todoList={todoList}
        sortBy={sortBy}
        sortHandler={(e) => setSortBy(e.target.value)}
      />

      <div className="flex justify-between gap-8">
        <AddNewNote onAddTodo={onAddTodo} />
        <div className="w-[60%]">
          <TodoListStatus todoList={todoList} />
          <TodoList
            todoList={todoList}
            onCompleted={onCompleted}
            removeHandler={removeHandler}
            sortBy={sortBy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
