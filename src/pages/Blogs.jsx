import React, { useCallback, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particlesConfig";
import { PiDevToLogoFill } from "react-icons/pi";

const Blog = () => {
  const [fetchingArticles, setFetchingArticles] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  });
  const particlesLoaded = useCallback(async (container) => {}, []);
  const fetchArticles = async () => {
    try {
      setFetchingArticles(true);
      const response = await fetch(
        "https://dev.to/api/articles?username=sidddharthamishra",
        {
          method: "GET",
        }
      );
      const json = await response.json();
      setFetchingArticles(false);
      setBlogs(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <>
      <div className="relative m-0 w-full h-screen flex flex-col justify-between ">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particlesConfig}
        />
        <Nav />
        <div className="w-full p-4 flex flex-col justify-center items-center">
          {fetchingArticles ? (
            <span>Loading ... </span>
          ) : (
            <ul className="">
              {blogs.map((blog) => (
                <li key={blog.id}>
                  <div className="rounded-md mt-10 m-10 shadow-2xl  md:flex flex-row-reverse items-center md:w-3/4 mx-auto">
                    <div className="md:w-4/5">
                      <img src={blog.social_image} alt="" className="w-full " />
                    </div>
                    <div className="pt-2 p-4 md:text-left">
                      <h5 className="text-sky-600 font-bold text-2xl items-center">
                        {blog.title}
                      </h5>
                      <span className="pt-5 text-white">
                        {blog.description}
                      </span>

                      <a href={blog.url} target="_blank">
                        <PiDevToLogoFill className="mt-5 text-3xl text-white hover:text-sky-200 md:me-auto" />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Blog;