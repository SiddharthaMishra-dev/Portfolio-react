import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Loading from "../components/Loading";
import Nav from "../components/Nav";

const Layout = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      console.log(clientX, clientY);

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

  return (
    <div
      className="relative bg-slate-100 dark:bg-slate-900 transition-colors duration-500 ease-in-out"
      style={{
        backgroundImage: `radial-gradient(400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15) , transparent 100%)`,
      }}
    >
      <div className="h-screen overflow-auto">
        <Nav />
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default Layout;
