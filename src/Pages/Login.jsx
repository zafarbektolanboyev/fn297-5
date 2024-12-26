import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const user = { username, password };

    axios
      .post(
        "https://json-api.uz/api/project/my-books/auth/login",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const token = response.data?.access_token;

        if (!token) {
          alert("Token serverdan kelmadi.");
          return;
        }

        localStorage.setItem("access_token", token);
        alert("Tizimga muvaffaqiyatli kirdingiz!");
        navigate("/");
      })
      .catch((err) => {
        console.error("Login failed:", err);
        alert("Tizimga kirishda xatolik yuz berdi.");
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className="flex flex-col rounded-md w-[350px] gap-2 border p-[15px] text-white"
      >
        <input
          className="w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="w-full p-[12px] rounded-md border bg-transparent text-gray-100 placeholder-white focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="btn p-[12px] w-full bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <button
          onClick={handleRegister}
          className="btn p-[12px] w-full bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
        >
          Registerga qaytish
        </button>
      </form>
    </div>
  );
}

export default Login;
