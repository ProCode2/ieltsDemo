import React, { useState } from "react";
import { todoFetch } from "../utils/fetch";
import Input from "./Input";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    if (!formState.email || !formState.password) return;

    // TODO: login user
    console.log(formState);
    todoFetch({
      method: "post",
      url: "/auth/login",
      data: formState,
    }).then((data) => {
      if (data.status) window.location.href = "/dashboard";
    });
  };
  return (
    <div className="grow px-4 h-full flex justify-center items-center">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="p-3 rounded-md shadow-md border w-full max-w-xl mx-2 flex flex-col items-center">
          <p className="text-2xl font-bold">Login</p>
          <div>
            <Input
              type="email"
              value={formState.email}
              placeholder="example@mail.com"
              handleChange={(e) =>
                setFormState((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <Input
              type="password"
              value={formState.password}
              placeholder="******"
              handleChange={(e) =>
                setFormState((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </div>
          <button
            className="bg-blue-700 py-3 px-8 text-base text-white rounded-md shadow-md hover:bg-blue-600 mt-3"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
