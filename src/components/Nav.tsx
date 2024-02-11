import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useLocalStorage } from "usehooks-ts";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  const navigate = useNavigate();
  let location = useLocation();
  let pathname = location.pathname;

  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme == "light");

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? "light" : "dark");
    setEnabled(enabled);
  };

  return (
    <nav
      style={{ zIndex: 10 }}
      className="sticky top-1 "
    >
      <ul className="flex gap-5 w-fit mx-auto rounded-2xl text-slate-900 dark:text-slate-300 mb-5 px-5 py-2 justify-center bg-sky-400  dark:bg-[#081d58] font-semibold">
        <li
          className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-500  tracking-wider ${
            pathname === "/" && "dark:text-sky-500 text-sky-700"
          }`}
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <AiFillHome size={25} /> */}
          <span className="text-sm">About</span>
        </li>
        <li
          className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-500  tracking-wider ${
            pathname === "/projects" && "dark:text-sky-500 text-sky-700"
          }`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          {/* <AiFillProject size={25} /> */}
          <span className="text-sm">Projects</span>
        </li>
        <li
          className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-500  tracking-wider ${
            pathname === "/blogs" && "dark:text-sky-500 text-sky-700"
          } `}
          onClick={() => {
            navigate("/blogs");
          }}
        >
          {/* <FaDev size={25} /> */}
          <span className="text-sm">Blogs</span>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
