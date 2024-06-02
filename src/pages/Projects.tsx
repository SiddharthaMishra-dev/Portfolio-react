import { Fade } from "react-awesome-reveal";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

import shopKaro from "../assets/ShopKaro.png";
import bloggers from "../assets/blog-g-gers.png";
import spotifyClone from "../assets/spotify-clone.png";
// import indiaAround from "../assets/india-around.png";
import createParcelReact from "../assets/create-parcel-react.png";
import Footer from "../components/Footer";

function Project() {
  return (
    <Fade duration={1000}>
      <div className="relative m-0 w-full h-[88vh]  flex flex-col justify-between">
        <div className="text-gray-900 dark:text-gray-200 max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-4 ">Featured Works</h1>
          <div className="flex items-center justify-center flex-wrap gap-y-9 gap-x-5">
            <div className="w-[500px] h-[300px] bg-blue-950 rounded-lg overflow-hidden group relative">
              <img
                src={bloggers}
                alt=""
                className="group w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-blue-600/75 translate-y-full  group-hover:translate-y-0 transition-transform duration-300 p-3">
                <h5 className="text-gray-200 font-bold text-2xl mb-2">Bloggers</h5>
                <p className="text-base font-semibold text-gray-300">
                  It is micro blogging website build using Nextjs 13. All API's are developed with
                  nextjs.It has functionalities like authentication, authorization , edit by owner,
                  like and delete of Blogs. It uses NextUI library for modular components and
                  zustand for state management.
                </p>
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
            <div className="w-[500px] h-[300px] bg-blue-950 rounded-lg  overflow-hidden group relative">
              <img
                src={spotifyClone}
                alt=""
                className="group w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-blue-600/75 translate-y-full  group-hover:translate-y-0 transition-transform duration-300 p-3">
                <h5 className="text-gray-200 font-bold text-2xl mb-2">Spotify Clone</h5>
                <p className="text-base font-semibold text-gray-300">
                  Full stack spotify clone, build using nextjs and supabase. You can upload , like ,
                  and play song. User authentication for accessing all features.
                </p>
                <div className="flex gap-x-5">
                  <a
                    href="https://github.com/SiddharthaMishra-dev/spotify-clone"
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
            <div className="w-[500px] h-[300px] bg-blue-950 rounded-lg overflow-hidden group relative">
              <img
                src={shopKaro}
                alt=""
                className="group w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-blue-600/75 translate-y-full  group-hover:translate-y-0 transition-transform duration-300 p-3">
                <h5 className="text-gray-200 font-bold text-2xl mb-2">ShopKaro</h5>
                <p className="text-base font-semibold text-gray-300">
                  It is the E-commerce website build using reactjs , redux and material-ui. For
                  products ,Uses dummy-json API . It has home page, product showcase , cart page ,
                  cart state to store cart items.
                </p>
                <div className="flex gap-x-5">
                  <a
                    href="https://github.com/SiddharthaMishra-dev/class-based-ecommerce"
                    target="_blank"
                  >
                    <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[500px] h-[300px] bg-blue-950 rounded-lg overflow-hidden group relative">
              <img
                src={createParcelReact}
                alt=""
                className="group w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-blue-600/75 translate-y-full  group-hover:translate-y-0 transition-transform duration-300 p-3">
                <h5 className="text-gray-200 font-bold text-2xl mb-2">
                  create-parcel-react-template
                </h5>
                <p className="text-base font-semibold text-gray-300">
                  Command line tool to setup react application using Parcel bundler. In built
                  support for tailwind css, jest and TypeScript.Parcel is blazing fast, zero
                  configuration web application bundler.
                </p>
                <div className="flex gap-x-5">
                  <a
                    href="https://github.com/SiddharthaMishra-dev/create-parcel-react-template"
                    target="_blank"
                  >
                    <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                  </a>

                  <a
                    href="https://www.npmjs.com/package/create-parcel-react-template"
                    target="_black"
                  >
                    <CgWebsite className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="rounded-md mt-10 m-10 shadow-2xl md:flex  items-center md:w-3/4">
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
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    </Fade>
  );
}
export default Project;
