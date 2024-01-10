import { Outlet } from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Suspense } from "react";
import type { Container, Engine } from "tsparticles-engine";

import Nav from "../components/Nav";
import Loading from "../components/Loading";
import particlesConfig from "../config/particlesConfig";

const Layout = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container: Container | undefined) => {}, []);
  return (
    <>
      <Nav />
      <Suspense fallback={<Loading />}>
        {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
          /> */}
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
