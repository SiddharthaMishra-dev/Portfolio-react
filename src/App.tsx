// import About from "./pages/About";
// import Project from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useState } from "react";
import Layout from "./Layout/Layout.tsx";

const About = lazy(() => import("./pages/About.tsx"));
const Project = lazy(() => import("./pages/Projects.tsx"));
const Blog = lazy(() => import("./pages/Blogs.tsx"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Layout />}
          >
            <Route
              path="/"
              element={<About />}
            />
            <Route
              path="/projects"
              element={<Project />}
            />
            <Route
              path="/blogs"
              element={<Blog />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
