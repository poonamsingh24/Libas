import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container";
import LoginPage from "./LoginPage";
import GoogleButton from "../GoogleButton";
import { toast } from "sonner";

export default function SignupPage() {
  const { signup, currentUser, logInWithGoogle } = useAuth();
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
      const res = await signup(email, password);
      if (res) {
        toast.success("Sign Up succes full");
      }

      nevigate("/");

      console.log(res);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <Container className="flex items-center justify-center my-20 ">
      <div className=" w-[400px] h-full mx-3  ">
        <h1 className="text-center py-4 text-2xl text-gray-700">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <label htmlFor="email" className="font-thin">
            {" "}
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
            className=" p-2 bg-white  border focus:outline-gray-500 focus:outline-1"
            placeholder="Email..."
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
                message: "Must be 20  characters",
              },
            })}
            className=" p-2 bg-white  border focus:outline-gray-500 focus:outline-1"
            placeholder="Password"
          />
          {errors.password && <span>{errors.password.message}</span>}
          <button
            type="submit"
            className="bg-fuchsia-900 px-4 py-2.5 text-white"
          >
            <Link to="/signup">SIGN IN</Link>
          </button>
          <button
            type="submit"
            className="bg-fuchsia-900 px-4 py-2.5 text-white"
          >
            <Link to="/login">LOG IN</Link>
          </button>
          <GoogleButton
            lable={"Signup With Google "}
            onClick={logInWithGoogle}
          />
        </form>
      </div>
    </Container>
  );
}
