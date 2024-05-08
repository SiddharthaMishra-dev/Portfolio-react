import { Fade } from "react-awesome-reveal";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

import shopKaro from "../assets/ShopKaro.png";
import spotifyClone from "../assets/spotify-clone.png";
import bloggers from "../assets/blog-g-gers.png";
import indiaAround from "../assets/india-around.png";
import Footer from "../components/Footer";

function Project() {
  return (
    <Fade duration={1000}>
      <div className="relative m-0 w-full  flex flex-col justify-between">
        <div className="text-gray-900 dark:text-gray-200">
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-md mt-10 m-10 shadow-2xl  md:flex flex-row items-center md:w-3/4 ">
              <div className="bg-sky-500 md:max-w-lg">
                <img
                  src={bloggers}
                  alt=""
                  className="w-full opacity-60 hover:opacity-100 transition"
                />
              </div>
              <div className="pt-2 p-4 md:text-left">
                <h5 className="text-sky-600 font-bold text-2xl items-center">Blog-g-ers</h5>
                <span className="pt-5 ">
                  It is micro blogging website build using Nextjs 13. All API's are developed with
                  nextjs.It has functionalities like authentication, authorization , edit by owner,
                  like and delete of Blogs. It uses NextUI library for modular components and
                  zustand for state management.
                </span>

                <div className="flex gap-x-5">
                  <a
                    href="https://github.com/SiddharthaMishra-dev/blog-g-gers"
                    target="_blank"
                  >
                    <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                  </a>

                  <a
                    href="https://blog-g-gers.vercel.app/"
                    target="_black"
                  >
                    <CgWebsite className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-md mt-10 m-10 shadow-2xl md:flex  items-center md:w-3/4">
              <div className="bg-sky-500 md:max-w-lg">
                <img
                  src={spotifyClone}
                  alt=""
                  className="w-full opacity-60 hover:opacity-100 transition"
                />
              </div>
              <div className="pt-2 w-full p-4 md:text-left">
                <h5 className="text-sky-600 font-bold text-2xl items-center">Spotify clone</h5>
                <span className="pt-5">
                  Full stack spotify clone, build using nextjs and supabase. You can upload , like ,
                  and play song. User authentication for accessing all features.
                </span>
                <div className="flex gap-x-5">
                  <a
                    href="https://github.com/SiddharthaMishra-dev/spotify-clone"
                    className=""
                    target="_blank"
                  >
                    <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                  </a>
                  <a
                    href="https://spotify-clone-snowy-xi.vercel.app/"
                    target="_black"
                  >
                    <CgWebsite className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-md mt-10 m-10 shadow-2xl  md:flex  items-center md:w-3/4 ">
              <div className="bg-sky-500 md:max-w-lg">
                <img
                  src={shopKaro}
                  alt=""
                  className="w-full  opacity-60 hover:opacity-100 transition"
                />
              </div>
              <div className="pt-2 p-4 md:text-left">
                <h5 className="text-sky-600 font-bold text-2xl items-center">ShopKaro</h5>
                <span className="pt-5 ">
                  It is the E-commerce website build using reactjs , redux and material-ui. For
                  products ,I use dummy-json API . I has home page, product showcase , cart page ,
                  cart state to store cart items.
                </span>

                <a
                  href="https://github.com/SiddharthaMishra-dev/class-based-ecommerce"
                  target="_blank"
                >
                  <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                </a>
              </div>
            </div>
            <div className="rounded-md mt-10 m-10 shadow-2xl  md:flex items-center md:w-3/4 ">
              <div className="bg-sky-500 md:max-w-lg">
                <img
                  src={indiaAround}
                  alt=""
                  className="w-full opacity-60 hover:opacity-100 transition"
                />
              </div>
              <div className="pt-2 p-4 md:text-left">
                <h5 className="text-sky-600 font-bold text-2xl items-center">India Around</h5>
                <span className="pt-5">
                  It is news website which fetches data from newsapi.org for news content. There are
                  different categories of news category like india-tech,india-business etc
                </span>

                <a
                  href="https://github.com/SiddharthaMishra-dev/india-around"
                  target="_blank"
                >
                  <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fade>
  );
}
export default Project;
