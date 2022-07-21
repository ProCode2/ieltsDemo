import React from "react";
import CreateNewTodo from "./CreateNewTodo";
import TodoList from "./TodoList";

const Dashboard = () => {
  return (
    <div className="px-4 w-full min-h-screen">
      <main className="w-full h-full flex justify-center items-center">
        <div className="w-full h-full flex flex-col max-w-4xl mx-2 md:mx-4 mt-20">
          <CreateNewTodo />
          <TodoList />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
