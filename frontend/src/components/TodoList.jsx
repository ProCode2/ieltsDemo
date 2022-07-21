import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="w-full">
      <h3 className="font-bold text-2xl">Your Todo List</h3>
      <div className="flex flex-col justify-center items-center space-y-4 py-4">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};

export default TodoList;
