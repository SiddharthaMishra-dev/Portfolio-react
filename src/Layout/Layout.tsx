import { Outlet } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Suspense } from "react";
import { useLocalStorage } from "usehooks-ts";

import type { Container, Engine } from "tsparticles-engine";

import Nav from "../components/Nav";
import Loading from "../components/Loading";
import particlesConfig from "../config/particlesConfig";
import { Switch } from "@headlessui/react";
import { SunIcon } from "@heroicons/react/24/solid";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Layout = () => {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   await loadFull(engine);
  // }, []);
  // const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      // console.log(clientX, clientY);

      setMousePosition({
        x: clientX,
        y: clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const [enabled, setEnabled] = useState(theme == "light");

  const handleThemeChange = (enabled: boolean) => {
    setTheme(enabled ? "light" : "dark");
    setEnabled(enabled);
  };

  return (
    <div
      className="relative bg-slate-100 dark:bg-slate-900 transition-colors duration-500 ease-in-out"
      style={{
        backgroundImage: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15) , transparent 100%)`,
      }}
    >
      <Nav />
      <Switch
        checked={enabled}
        onChange={handleThemeChange}
        className={classNames(
          enabled ? "bg-gray-400" : "bg-yellow-600",
          "fixed z-10 left-5 bottom-5 inline-flex h-20 w-10 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            enabled ? "translate-y-10" : "translate-y-0",
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
      </Switch>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
