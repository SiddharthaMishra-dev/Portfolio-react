import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/solid";
import { Menu } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const [enabled, setEnabled] = useState(theme === "light");

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? "light" : "dark");
    setEnabled(enabled);
  };

  return (
    <nav
      style={{ zIndex: 10 }}
      className="sticky top-0 bg-slate-100 dark:bg-slate-900"
    >
      <ul className="flex gap-5 w-4/5 mx-auto rounded-2xl text-slate-900 dark:text-slate-300 mb-5 px-5 py-6 justify-between  font-semibold">
        <h4 className="text-2xl">Sidme</h4>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden">
            <Menu className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <p
                className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-500  tracking-wider ${
                  pathname === "/" && "dark:text-sky-500 text-sky-700"
                }`}
                onClick={() => {
                  navigate("/");
                }}
              >
                <span className="text-sm">About</span>
              </p>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <p
                className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-500  tracking-wider ${
                  pathname === "/projects" && "dark:text-sky-500 text-sky-700"
                }`}
                onClick={() => {
                  navigate("/projects");
                }}
              >
                <span className="text-sm">Projects</span>
              </p>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <p
                className={`flex justify-center items-center gap-x-2 cursor-pointer hover:text-sky-500  tracking-wider ${
                  pathname === "/blogs" && "dark:text-sky-500 text-sky-700"
                }`}
                onClick={() => {
                  navigate("/blogs");
                }}
              >
                <span className="text-sm">Blogs</span>
              </p>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Switch
                checked={enabled}
                onChange={handleThemeChange}
                className={classNames(
                  enabled ? "bg-gray-400" : "bg-yellow-600",
                  " inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  className={classNames(
                    enabled ? "translate-x-6" : "translate-x-0",
                    "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                  )}
                >
                  <span
                    className={classNames(
                      enabled
                        ? "opacity-0 duration-100 ease-out"
                        : "opacity-100 duration-200 ease-in",
                      "absolute rounded-full inset-0 flex h-full w-full items-center justify-center transition-opacity",
                    )}
                    aria-hidden="true"
                  >
                    <SunIcon className="h-5 w-5 text-gray-400" />
                  </span>
                  <span
                    className={classNames(
                      enabled
                        ? "opacity-100 duration-200 ease-in"
                        : "opacity-0 duration-100 ease-out",
                      "absolute rounded-full  inset-0 flex h-full w-full items-center justify-center transition-opacity",
                    )}
                    aria-hidden="true"
                  >
                    <SunIcon className="h-5 w-5 text-yellow-600" />
                  </span>
                </span>
              </Switch>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="hidden md:flex gap-x-3 items-center">
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
          <Switch
            checked={enabled}
            onChange={handleThemeChange}
            className={classNames(
              enabled ? "bg-gray-400" : "bg-yellow-600",
              " inline-flex h-6 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
            )}
          >
            <span className="sr-only">Use setting</span>
            <span
              className={classNames(
                enabled ? "translate-x-6" : "translate-x-0",
                "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
              )}
            >
              <span
                className={classNames(
                  enabled
                    ? "opacity-0 duration-100 ease-out"
                    : "opacity-100 duration-200 ease-in",
                  "absolute rounded-full inset-0 flex h-full w-full items-center justify-center transition-opacity",
                )}
                aria-hidden="true"
              >
                <SunIcon className="h-5 w-5 text-gray-400" />
              </span>
              <span
                className={classNames(
                  enabled
                    ? "opacity-100 duration-200 ease-in"
                    : "opacity-0 duration-100 ease-out",
                  "absolute rounded-full  inset-0 flex h-full w-full items-center justify-center transition-opacity",
                )}
                aria-hidden="true"
              >
                <SunIcon className="h-5 w-5 text-yellow-600" />
              </span>
            </span>
          </Switch>
        </div>
      </ul>
    </nav>
  );
}
export default Nav;
