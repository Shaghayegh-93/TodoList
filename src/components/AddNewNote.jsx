import React, { useState } from "react";

const AddNewNote = ({ onAddTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title && !description) return;
    const newTodo = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
      title,
      description,
    };
    onAddTodo(newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="w-[30%] ">
      <form className="grid gap-6" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="note"
          className="text-field "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="desc"
          className="text-field "
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddNewNote;
