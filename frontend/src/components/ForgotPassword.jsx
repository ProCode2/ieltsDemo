import React from "react";
import Input from "./Input";

const ForgotPassword = () => {
  return (
    <div className="grow px-4 h-full flex justify-center items-center">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="p-3 rounded-md shadow-md border w-full max-w-xl mx-2 flex flex-col items-center">
          <p className="text-2xl font-bold">Change Password</p>
          <div>
            <Input type="text" placeholder="Old Password" />
            <Input type="text" placeholder="New Password" />
          </div>
          <button className="bg-blue-700 py-3 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-3">
            Change
          </button>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
