import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";

import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <div>
        <Suspense fallback={<Loading/>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default Layout;
