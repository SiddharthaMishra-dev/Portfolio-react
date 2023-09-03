import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  return (
    <nav style={{ zIndex: 0 }}>
      <ul className="flex gap-5  w-full text-slate-300 m-0 mt-5 mb-5 p-5 justify-center text-2xl">
        <li
          className={`cursor-pointer hover:text-sky-500`}
          onClick={() => {
            navigate("/");
          }}
        >
          About
        </li>
        <li
          className={` cursor-pointer hover:text-sky-500`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          Projects
        </li>
        <li
          className={` cursor-pointer hover:text-sky-500`}
          onClick={() => {
            navigate("/blogs");
          }}
        >
          Blogs
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
