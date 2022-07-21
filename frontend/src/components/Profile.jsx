import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="grow px-4 h-full flex justify-center items-center">
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="p-3 rounded-md shadow-md border w-full max-w-xl mx-2 flex flex-col items-center justify-center">
          <div className="w-full mb-4">
            <Link
              className="text-blue-700 underline hover:text-blue-500"
              to="/forgot"
            >
              Change password
            </Link>
          </div>

          <div className="flex justify-center items-center w-32 h-32 rounded-full shadow-md bg-slate-500 text-white">
            <span className="font-bold text-3xl tracking-widest">PG</span>
          </div>
          <p className="text-xl w-full text-center mt-3 mb-1">
            Pradipta Ghoshal
          </p>
          <p className="font-mono text-slate-500 text-center">
            solongemailthisone@email.com
          </p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
