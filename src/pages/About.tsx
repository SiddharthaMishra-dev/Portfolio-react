import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { useSpring, animated } from "@react-spring/web";
import { Slide, Fade } from "react-awesome-reveal";
import { FaTwitter, FaLinkedin, FaInstagram, FaReact, FaBootstrap, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import Atropos from "atropos/react";
import "react-tabs/style/react-tabs.css";

import Profile from "../assets/Profile.jpg";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

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
      <div className="relative m-0 w-full h-full flex flex-col justify-between ">
        <div className="lg:w-3/4 mx-auto ">
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
              className="md:flex text-gray-200 lg:w-full m-auto rounded-md shadow-sm items-center md:text-left md:pt-10"
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
                <p className="text-gray-500 text-3xl mt-5">
                  &lt;{" "}
                  <span
                    ref={desc}
                    className="text-sky-500 text-xl md:text-3xl"
                  />{" "}
                  /&gt;
                </p>

                <div className="text-lg mt-4">
                  I am an undergraduate student with a passion for web development. Enjoy exploring
                  new technologies and using them. Always eager to work and collaborate with senior
                  and junior developers. Enthusiastic about learning and applying new technologies
                  to provide the best solution.
                </div>
              </div>
            </div>
          </Atropos>
        </div>
        <Slide
          direction="up"
          triggerOnce
        >
          <div className="technologies text-gray-200 p-10 lg:w-3/4 m-auto mt-32 mb-32 rounded-md">
            <h3 className="text-5xl text-center m-5">
              <span className="active">Tech I use</span>
            </h3>
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
            className="connect text-gray-200 p-10  mb-32  sm:w-full"
          >
            <h3 className="text-5xl text-center m-5">
              <span className="active">Connect with me</span>
            </h3>
            <div className="follow flex flex-col items-center">
              <p className="p-5 text-slate-400">Follow me on </p>
              <ul className="flex gap-5 p-5">
                <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300">
                  <a href="https://twitter.com/raiderfreed">
                    <FaTwitter />
                  </a>
                </li>
                <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300">
                  <a href="https://www.linkedin.com/in/siddhartha-mishra-628282203/">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300">
                  <a
                    href="https://www.instagram.com/sid_mishra19/"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>

              <div className="bg-sky-500 hover:bg-sky-600 p-4 m-5 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                <h4 className="text-xl ">
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
