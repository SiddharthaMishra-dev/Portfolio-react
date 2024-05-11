import { animated, useSpring } from "@react-spring/web";
import Atropos from "atropos/react";
import { useEffect, useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FaBootstrap, FaInstagram, FaLinkedin, FaNodeJs, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import "react-tabs/style/react-tabs.css";
import Typed from "typed.js";

import Profile from "../assets/Profile.jpg";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

// import "atropos/css";

function About() {
  const [isVisible, setVisible] = useState(false);
  const desc = useRef(null);
  const props = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  useEffect(() => {
    setTimeout(() => setVisible(true), 5000);
    const typed = new Typed(desc.current, {
      strings: ["Frontend web developer", "Tech Enthusiast"],
      typeSpeed: 25,
      loop: true,
      loopCount: Infinity,
      backSpeed: 20,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Fade duration={1000}>
      <div className="relative m-0 w-full h-full flex flex-col justify-between">
        <div className="lg:w-3/4 w-4/5 mx-auto ">
          <Atropos
            activeOffset={4}
            shadow={true}
            shadowScale={0}
            rotateXMax={3}
            rotateYMax={3}
            highlight={false}
            rotateTouch="scroll-y"
          >
            <div
              data-atropos-offset="0"
              className="md:flex text-gray-900 dark:text-gray-200 lg:w-full m-auto rounded-md shadow-sm items-center md:text-left md:pt-10"
            >
              <img
                src={Profile}
                className="rounded-md m-auto"
                width="384"
                height="512"
              ></img>
              <div className="side-content p-10">
                <h4 className="text-2xl">Hey!</h4>
                <p className="text-sky-500 text-5xl mt-4">Siddhartha Mishra</p>
                <p className="dark:text-gray-500 text-gray-900 text-3xl mt-5">
                  &lt;{" "}
                  <span
                    ref={desc}
                    className="text-sky-500 text-3xl md:text-4xl"
                  />{" "}
                  /&gt;
                </p>

                <div className="text-lg mt-4 tracking-normal">
                  I am an undergraduate student with a passion for web development. Enjoy exploring
                  new technologies and using them. Always eager to work and collaborate with senior
                  and junior developers. Enthusiastic about learning and applying new technologies
                  to provide the best solution.
                </div>
                <button className=" mt-4 mx-auto md:mx-0 md:mt-6 flex gap-x-3 text-2xl px-4 py-2 outline outline-sky-500 rounded-md hover:bg-blue-600 transition">
                  <a
                    href="https://drive.google.com/file/d/1LE6uvFEGpF66yH-rzDTtgj-dR4doeEiB/view?usp=sharing"
                    download="siddhartha_mishra.pdf"
                  >
                    Download Resume
                  </a>
                </button>
              </div>
            </div>
          </Atropos>
        </div>
        <Slide
          direction="up"
          triggerOnce
        >
          <div className="technologies  text-gray-200   lg:w-3/4 m-auto mt-32 mb-32 rounded-lg custom-bg">
            <div className="shadow-lg backdrop-blur-lg p-10 bg-white/5">
              <p className="text-4xl text-center m-5 font-semibold">Tech I use</p>
              <div className="flex gap-36 w-1/2 m-auto p-10 justify-center">
                <div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <IoLogoJavascript />
                  </div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <FaBootstrap />
                  </div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <FaReact />
                  </div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <TbBrandNextjs />
                  </div>
                </div>

                <div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <SiTailwindcss />
                  </div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <SiExpress />
                  </div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <FaNodeJs />
                  </div>
                  <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                    <SiMongodb />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide
          direction="up"
          triggerOnce
        >
          <animated.div
            className="w-full"
            style={props}
          >
            <Experience />
          </animated.div>
        </Slide>
        <Slide
          direction="up"
          triggerOnce
        >
          <div
            // style={{ zIndex: 10 }}
            className="connect dark:text-gray-200 text-gray-900 p-10  mb-32  sm:w-full"
          >
            <p className="text-3xl text-center m-5">Connect with me</p>
            <div className="follow flex flex-col items-center">
              <p className="p-5 dark:text-slate-400 text-slate-900 text-base">Follow me on </p>
              <ul className="flex gap-5 p-5">
                <li className="text-3xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300">
                  <a href="https://twitter.com/raiderfreed">
                    <FaXTwitter />
                  </a>
                </li>
                <li className="text-3xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300">
                  <a href="https://www.linkedin.com/in/siddhartha-mishra-628282203/">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="text-3xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300">
                  <a
                    href="https://www.instagram.com/sid_mishra19/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>

              <div className="bg-sky-500 hover:bg-sky-600 p-4 m-5 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <h4 className="text-xl font-semibold">
                  <a href="mailto:mailbox.siddharthamishra@gmail.com?body=Add your body here">
                    Mail me
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </Slide>

        <Footer />
      </div>
    </Fade>
  );
}

export default About;
