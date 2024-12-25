import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between p-5 bg-white items-center">
      <div className="logo">
        <h1 className="text-4xl p-3 bg-blue-800 text-white rounded-md">Logo</h1>
      </div>
      <ul className="flex gap-[20px] text-2xl ">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/products'}>Products</Link>
        </li>
      </ul>
      <button className="p-[15px] bg-red-500 rounded-md text-2xl text-white">Logout</button>
    </div>
  );
}

export default Header;
