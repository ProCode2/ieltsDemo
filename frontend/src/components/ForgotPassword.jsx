import React, { useEffect, useState } from "react";
import { todoFetch } from "../utils/fetch";
import Input from "./Input";

const ForgotPassword = () => {
  const [formState, setFormState] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const handleSubmit = () => {
    if (!formState.oldPassword || !formState.newPassword) return;

    // TODO: change password
    console.log(formState);
    todoFetch({
      method: "put",
      url: "/auth/password/edit",
      data: formState,
    }).then((data) => {
      if (data.status) window.location.href = "/dashboard";
    });
  };

  useEffect(() => {
    todoFetch({
      url: "/auth/",
      method: "get",
    });
  });
  return (
    <div className="grow px-4 h-full flex justify-center items-center">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="p-3 rounded-md shadow-md border w-full max-w-xl mx-2 flex flex-col items-center">
          <p className="text-2xl font-bold">Change Password</p>
          <div>
            <Input
              type="text"
              value={formState.email}
              placeholder="Old Password"
              handleChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  oldPassword: e.target.value,
                }))
              }
            />
            <Input
              type="text"
              value={formState.email}
              placeholder="New Password"
              handleChange={(e) =>
                setFormState((prev) => ({
                  ...prev,
                  newPassword: e.target.value,
                }))
              }
            />
          </div>
          <button
            className="bg-blue-700 py-3 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-3"
            onClick={handleSubmit}
          >
            Change
          </button>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
