import React, { useEffect, useState } from "react";
import { PlainInputText } from "../../components";
import banner from "../../assets/backgrounds/auth-bg.svg";
import { Link } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
import { toast } from "react-toastify";
import { useAuth } from "../../hooks";
import { LoginForm } from "../../pageComponents";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { user } = useAuth();

  if (user) {
    // user is authenticated
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="h-full w-full bg-white">
      <div
        className="auth-container h-full w-10/12 grid mx-auto gap-x-7"
        style={{
          gridTemplateColumns: "1fr max-content",
        }}
      >
        <div className="h-full hidden md:flex md:flex-col md:justify-center gap-y-8">
          {/* <div className="flex flex-col gap-y-4">
            <h3 className="text-6xl font-medium">Sign in to</h3>
            <p className="text-2xl">Lorem Ipsum is simply</p>
          </div>
          <div>
            <p>
              If you don't have an account register <br />
              You can Register here
            </p>
          </div> */}
          <img src={banner} />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
