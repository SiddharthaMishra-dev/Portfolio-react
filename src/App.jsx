// import About from "./pages/About";
// import Project from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout/Layout";

const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Projects"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
