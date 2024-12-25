import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { backend } from "../axios";

function Register() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const rePasswordRef = useRef("");
  const navigate = useNavigate();
  function handleRegister(e) {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    backend
      .post("signup", user, {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        if (response.status == 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        if (error.status == 400) {
          alert(error.message);
          return;
        }
      });
  }
  return (
    <div>
      <form className="flex flex-col mx-auto rounded-md mt-[100px] w-[350px] gap-2 border p-[15px] text-white">
        <input
          className="w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white"
          type="text"
          placeholder="Enter username"
          ref={nameRef}
        />
        <input
          className="w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white"
          type="email"
          placeholder="Enter email"
          ref={emailRef}
        />
        <input
          className="w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white"
          type="password"
          placeholder="Enter password"
          ref={passwordRef}
        />
        <input
          className="w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white"
          type="password"
          placeholder="Enter rePassword"
          ref={rePasswordRef}
        />
        <button
          className="btn p-[12px] w-full bg-blue-500 rounded-md"
          onClick={handleRegister}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
