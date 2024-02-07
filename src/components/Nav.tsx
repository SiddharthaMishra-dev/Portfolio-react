import { useEffect, useState } from "react";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
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
      <ul className="flex gap-5 w-full md:w-2/3 mx-auto rounded-2xl text-slate-900 dark:text-slate-300 m-0  mb-5 p-5 justify-center text-2xl bg-sky-400  dark:bg-[#081d58] font-semibold">
        <li
          className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-700 ${
            pathname === "/" && "text-sky-700"
          }`}
          onClick={() => {
            navigate("/");
          }}
        >
          <AiFillHome size={25} />
          <span className="hidden md:inline">About</span>
        </li>
        <li
          className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-700 ${
            pathname === "/projects" && "text-sky-700"
          }`}
          onClick={() => {
            navigate("/projects");
          }}
        >
          <AiFillProject size={25} />
          <span className="hidden md:inline">Projects</span>
        </li>
        <li
          className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-700 ${
            pathname === "/blogs" && "text-sky-700"
          } `}
          onClick={() => {
            navigate("/blogs");
          }}
        >
          <FaDev size={25} />
          <span className="hidden md:inline">Blogs</span>
        </li>
        {/* <Switch
          checked={enabled}
          onChange={handleThemeChange}
          className={classNames(
            enabled ? "bg-gray-400" : "bg-yellow-600",
            "relative inline-flex h-10 w-20  flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            className={classNames(
              enabled ? "translate-x-10" : "translate-x-0",
              "pointer-events-none relative inline-block h-9 w-9 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
            )}
          >
            <span
              className={classNames(
                enabled ? "opacity-0 duration-100 ease-out" : "opacity-100 duration-200 ease-in",
                "absolute rounded-full inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <SunIcon className="h-8 w-8 text-gray-400" />
            </span>
            <span
              className={classNames(
                enabled ? "opacity-100 duration-200 ease-in" : "opacity-0 duration-100 ease-out",
                "absolute rounded-full  inset-0 flex h-full w-full items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <SunIcon className="h-8 w-8 text-yellow-600" />
            </span>
          </span>
        </Switch> */}
      </ul>
    </nav>
  );
}
export default Nav;
