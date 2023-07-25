import React from "react";
import indiaAround from '../assets/india-around.png'
import sticky from '../assets/sticky.png'
import urlshortner from  '../assets/URL-shortner.png'
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {FaGithub} from 'react-icons/fa'
import Fade from 'react-reveal/Fade';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particlesConfig";

function Project(){
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    return (
        <div className='relative m-0 w-full h-screen flex flex-col justify-between'>
        <Particles id="tsparticles" init={particlesInit} options={particlesConfig}/>

            <Nav/>
            <div className="text-gray-200">
                <h2 className=" text-3xl text-center m-10"><span className="active p-1">I have built these</span></h2>
                <div className="flex flex-col justify-center items-center">
                    <Fade left>
                        <div className="rounded-md mt-10 m-10 shadow-2xl  md:flex items-center md:w-3/4 ">
                            <div className="bg-sky-500 md:w-4/5">
                                <img src={indiaAround} alt="" className="w-full opacity-60 hover:opacity-100"/>
                            </div>
                            <div className="pt-2 p-4 md:text-right">
                                <h5 className="text-sky-600 font-bold text-2xl items-center">India Around</h5>
                                <span className="pt-5">It is news website which fetches data from newsapi.org for news content. There are different categories of news category like india-tech,india-business etc</span>

                                <a href="https://github.com/SiddharthaMishra-dev/india-around" target="_blank">
                                    <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:ms-auto" />
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="rounded-md mt-10 m-10  shadow-2xl    md:flex flex-row-reverse items-center md:w-3/4">
                            <div className="bg-sky-500 md:w-4/5">
                                <img src={urlshortner} alt="" className="w-full opacity-60 hover:opacity-100" />
                            </div>
                            <div className="pt-2 p-4 md:text-left">
                                <h5 className="text-sky-600 font-bold text-2xl items-center">URL shortner</h5>
                                <span>URL shortner build using expressjs and uses gotiny shortner API to convert the link to short links.</span>

                                <a href="https://github.com/SiddharthaMishra-dev/URL-Shortnerd" className="" target="_blank">
                                    <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:me-auto" />
                                </a>
                            </div>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className="rounded-md mt-10 m-10  shadow-2xl  md:flex items-center md:w-3/4 ">
                            <div className="bg-sky-500 md:w-4/5">
                                <img src={sticky} alt="" className="w-full opacity-60 hover:opacity-100" />
                            </div>
                            <div className="pt-2 p-4 md:text-right">
                                <h5 className="text-sky-600 font-bold text-2xl items-center">Sticky</h5>
                                <span>Sticky is note taking webapp with user authentication and database.Build using reactjs and firebase for backend.</span>

                                <a href="https://github.com/SiddharthaMishra-dev/todo-firebase-react" target="_blank">
                                    <FaGithub className="mt-5 text-3xl hover:text-sky-200 md:ms-auto" />
                                </a>
                            </div>
                        </div>                   
                    </Fade>
                </div>
            </div>
            <Footer/>
        </div>
    )
}   
export default Project