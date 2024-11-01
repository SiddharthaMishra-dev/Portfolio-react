import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { PiDevToLogoFill } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

import "react-lazy-load-image-component/src/effects/blur.css";

const Blog = () => {
  const [fetchingArticles, setFetchingArticles] = useState(false);
  const [blogs, setBlogs] = useState([]);

  const fetchArticles = async () => {
    try {
      setFetchingArticles(true);
      const response = await fetch(
        "https://dev.to/api/articles?username=sidddharthamishra",
        {
          method: "GET",
        },
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
    <Fade duration={1000}>
      <div className="relative m-0 w-full flex flex-col justify-between ">
        <div className="w-full p-4 flex flex-col justify-center items-center">
          {fetchingArticles ? (
            <Loading />
          ) : (
            <ul className="">
              {blogs.map((blog: any) => (
                <li key={blog.id}>
                  <div className="rounded-md mt-10 m-10 shadow-2xl  md:flex flex-row-reverse items-center md:w-3/4 mx-auto">
                    <div className="max-w-lg min-h-full h-full">
                      <LazyLoadImage
                        src={blog.social_image}
                        effect="blur"
                        style={{ height: "100%" }}
                      />
                    </div>
                    <div className="pt-2 p-4 md:text-left">
                      <h5 className="text-sky-600 font-bold text-2xl items-center">
                        {blog.title}
                      </h5>
                      <span className="pt-5 text-gray-800 dark:text-white">
                        {blog.description}
                      </span>

                      <a href={blog.url} target="_blank" rel="noreferrer">
                        <PiDevToLogoFill className="mt-5 text-3xl text-gray-800 dark:text-white dark:hover:text-sky-200 hover:text-sky-500 md:me-auto" />
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
    </Fade>
  );
};
export default Blog;
