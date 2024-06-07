import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkLoginData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { DEFAULTPROFILEICON } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleFormButton = () => {
    const message = checkLoginData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    // Sign In - Sign Up
    if (!isSignInForm) {
      // Sign up form
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: { DEFAULTPROFILEICON },
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-4/12 p-12 bg-black absolute mt-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 mt-4 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Adress"
          className="p-4 mt-4 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password "
          className="p-4 mt-4 w-full bg-gray-700 rounded-md"
        />
        <div className="mt-4 text-red-600 font-bold">{errorMessage}</div>
        <button
          className="p-4 mt-6 bg-red-600 w-full font-bold rounded-md"
          onClick={handleFormButton}
        >
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
