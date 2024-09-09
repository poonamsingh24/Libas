import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import GoogleButton from "../GoogleButton";
import { toast } from "sonner";

export default function LoginPage() {
  const { login, currentUser, logInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const email = data.email;
      const password = data.password;
      const user = login(email, password);
      toast.success("Login success full");
      navigate("/");
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, []);
  return (
    <Container className="flex items-center justify-center my-20 ">
      <div className=" w-[400px] h-full mx-3  ">
        <h1 className="text-center py-4 text-2xl text-gray-700">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <label htmlFor="email" className="font-thin">
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email Address is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid Email Address",
              },
            })}
            placeholder="Email..."
            className=" p-2 bg-white  border focus:outline-gray-500 focus:outline-1"
          />
          {errors.email && <span>{errors.email.message}</span>}
          <label htmlFor="password" className="font-thin">
            {" "}
            Password
          </label>
          <input
            id="password"
            type="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Must be 5 or more characters long",
              },
              maxLength: {
                value: 20,
                message: "Must be 20 or more characters long",
              },
            })}
            placeholder="Password"
            className=" p-2 bg-white  border focus:outline-gray-500 focus:outline-1"
          />
          {errors.password && <span>{errors.password.message}</span>}
          <button
            type="submit"
            className="bg-fuchsia-900 px-4 py-2.5 text-white"
          >
            SIGN IN
          </button>
          <div className="flex gap-2 justify-center items-center">
            <h4 className="text-xl ">Don’t have an accunt? </h4>
            <Link
              to="/signup"
              className="text-lg font-bold hover:text-blue-500 hover:underline"
            >
              {" "}
              Create Account
            </Link>
          </div>
          <GoogleButton label={"Sigin With Google"} onClick={logInWithGoogle} />
        </form>
      </div>
    </Container>
  );
}
