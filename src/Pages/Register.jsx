import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Iltimos, barcha maydonlarni to'ldiring.");
      return;
    }

    const user = { username, password };

    axios
      .post(
        "https://json-api.uz/api/project/my-books/auth/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error("Registration failed:", err);
        alert("Ro'yxatdan o'tishda xatolik yuz berdi.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleRegister}
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
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
