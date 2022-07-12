import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthService } from "../../api";
import { PlainInputText } from "../../components";
import { useAuth } from "../../hooks";

const LoginForm = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [password, setPassword] = useState<string | undefined>(undefined);
  const { user, login, isLoading } = useAuth();

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Invalid Credentials", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return false;
    }

    await login(email, password);
  };

  return (
    <form
      onSubmit={onSubmit}
      method="post"
      className="form-container h-full flex flex-col justify-center gap-y-4"
    >
      <h3 className="font-medium text-4xl">Sign In</h3>
      <PlainInputText
        classNames="md:w-96"
        type="email"
        placeholder="Enter email or username"
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />
      <PlainInputText
        classNames="md:w-96"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />
      <div className="flex justify-end">
        <span className="cursor-pointer text-gray-400">
          Don't have an account?{" "}
          <Link to="sign-up" className="text-blue-800">
            register
          </Link>
        </span>
      </div>
      <div className="flex flex-col justify-center gap-y-8">
        <div className="relative">
          <input
            type="submit"
            value="Login"
            onClick={onSubmit}
            className={`w-full bg-blue-800 hover:bg-opacity-80 shadow-2xl py-4 rounded-md  ${
              isLoading
                ? "text-blue-800 cursor-progress"
                : "text-white cursor-pointer"
            }`}
          />
          {isLoading && (
            <div className="absolute flex items-center justify-center h-full w-full top-0 left-0">
              <CgSpinner className={`animate-spin text-5xl text-white`} />
            </div>
          )}
        </div>
        {/* <Button
          title="Login"
          color="#4d47c3"
          className="flex items-center justify-center h-14"
        /> */}
        <div></div>
      </div>
    </form>
  );
};

export default LoginForm;
