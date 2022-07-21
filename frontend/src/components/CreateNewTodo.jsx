import React from "react";
import Input from "./Input";

const CreateNewTodo = () => {
  return (
    <div className="w-full">
      <h3 className="font-bold text-2xl">Add a Todo</h3>
      <div className="flex justify-between items-center w-full py-4">
        <Input />
        <button className="bg-blue-700 py-3 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 ml-4">
          Add
        </button>
      </div>
    </div>
  );
};

export default CreateNewTodo;
