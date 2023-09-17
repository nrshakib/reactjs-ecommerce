import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";

const LogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;

  if (googleError || error) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message}|| {googleError?.message}
        </small>
      </p>
    );
  }
  if (googleUser || user) {
    console.log(user);
  }
  if (loading || googleLoading) {
    return <Loading />;
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center rounded-lg text-white bg-gray-900">
          <h2 className="card-title">Log In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "patern" && (
                <span className="label-text-alt text-red-600">
                  {errors.email.message}
                </span>
              )}
            </label>

            {/* password */}
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be of 6 or more characters",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-600">
                  {errors.password.message}
                </span>
              )}
            </label>
            {signInError}
            {/* submit */}
            <input
              className="btn w-full max-w-xs bg-blue-500 text-black hover:bg-blue-300"
              type="submit"
              value="Log In"
            />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
