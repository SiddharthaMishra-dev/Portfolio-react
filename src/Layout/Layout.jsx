import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { useCallback } from "react";
import Nav from "../components/Nav";
import Particles from "react-particles";
import particlesConfig from "../config/particlesConfig";
import { loadFull } from "tsparticles";

import { Suspense } from "react";

const Layout = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  });
  const particlesLoaded = useCallback(async (container) => {}, []);
  // console.log("render");
  return (
    <>
      <div>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
          />
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default Layout;
