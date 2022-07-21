import React from "react";
import { MdDelete, MdDone } from "react-icons/md";

const TodoItem = () => {
  return (
    <div className="shadow-md rounded-md w-full px-2 py-3 flex flex-wrap justify-between items-center border border-slate-300">
      <span className="text-base">Fire Peter Griffin from work today.</span>
      <div className="flex space-x-3 mt-2 md:mt-0 ml-4">
        <button className="w-8 h-8 rounded-full flex justify-center items-center bg-slate-800 shadow-md">
          <MdDone color="#fff" />
        </button>
        <button className="w-8 h-8 rounded-full flex justify-center items-center bg-red-700 shadow-md">
          <MdDelete color="#fff" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
