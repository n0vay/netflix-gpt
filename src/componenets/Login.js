import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dd4dfce3-1a39-4b1a-8e19-b7242da17e68/ebc5214b-a695-4ff0-8772-959861962325/US-en-20240527-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="w-4/12 p-12 bg-black absolute mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Adress"
          className="p-4 mt-4 w-full bg-gray-700 rounded-md"
        />
        <input
          type="text"
          placeholder="Password "
          className="p-4 mt-4 w-full bg-gray-700 rounded-md"
        />
        <button className="p-4 mt-6 bg-red-600 w-full font-bold rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In Now"}
        </div>
      </form>
    </div>
  );
};

export default Login;
