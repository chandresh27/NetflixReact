import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidationData from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { USER_AVATAR } from "../utils/contants.js";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignup = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitForm = () => {
    const msg = checkValidationData(
      email.current.value,
      password.current.value
    );
    setErrorMsg(msg);
    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMsg(`${error.code} - ${error.message}`);
        });
    }
  };

  return (
    <>
      <Header />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/36a4db5b-dec2-458a-a1c0-662fa60e7473/1115a02b-3062-4dcc-aae0-94028a0dcdff/IN-en-20240820-TRIFECTA-perspective_WEB_eeff8a6e-0384-4791-a703-31368aeac39f_large.jpg')",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/50"></div> */}
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full max-w-md p-6 sm:p-10 bg-black/80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-md"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            className="p-2 my-4 w-full bg-slate-800 rounded border-gray-400 placeholder-gray-300"
            type="text"
            required
            ref={name}
            placeholder="Enter your Name"
          />
        )}

        <input
          ref={email}
          className="p-2 my-4 w-full bg-slate-800 rounded border-gray-400 placeholder-gray-300"
          type="email"
          placeholder="Enter your email"
          required
        />
        <input
          ref={password}
          type="password"
          className="p-2 my-4 w-full bg-slate-800 rounded border-gray-400 placeholder-gray-300"
          placeholder="Enter your Password"
          required
        />
        {errorMsg && (
          <p className="p-2 font-semibold text-red-500">{errorMsg}</p>
        )}
        <button
          onClick={handleSubmitForm}
          className="p-2 my-4 bg-red-600 w-full rounded hover:bg-red-700 transition duration-200 ease-in-out"
          type="submit"
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4">
          {isSignIn ? "New to Netflix?" : "Already have an account?"}
          <span
            onClick={toggleSignup}
            className="cursor-pointer font-semibold px-1 hover:underline"
          >
            {isSignIn ? "Sign Up Now." : "Sign In Now."}
          </span>
        </p>
      </form>
    </>
  );
};

export default Login;
