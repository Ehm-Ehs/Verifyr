import React, { useState } from "react";
import CreateCompany from "./createCompany";
import Login from "./login";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex justify-center items-center overflow-scroll py-10">
      <div className="bg-white p-8 shadow-md rounded-md">
        <div className="flex mb-4">
          <button
            className={`flex-1 py-2 rounded-tl-md rounded-bl-md ${
              isLogin ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-tr-md rounded-br-md ${
              !isLogin ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Create Company
          </button>
        </div>
        {isLogin ? (
          <Login toggleForm={toggleForm} />
        ) : (
          <CreateCompany toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
