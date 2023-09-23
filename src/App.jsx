// import About from "./pages/About";
// import Project from "./pages/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useState } from "react";
import Layout from "./Layout/Layout";

const About = lazy(() => import("./pages/About"));
const Project = lazy(() => import("./pages/Projects"));
const Blog = lazy(() => import("./pages/Blogs"));

function App() {
  const [i, setI] = useState(0);
  const handleChangeI = (input) => {
    setI(input);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blogs" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
