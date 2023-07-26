import React, { useEffect, useRef, useState,useCallback } from "react";
import Typed from "typed.js";
import Profile from '../assets/Profile.jpg'
import Nav from '../components/Nav'
import Footer from "../components/Footer";
import experience from "../utils/data";
import {FaTwitter ,FaLinkedin,FaInstagram,FaReact,FaBootstrap,FaNodeJs} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss,SiExpress} from 'react-icons/si'
import 'react-tabs/style/react-tabs.css';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesConfig from "../config/particlesConfig";
function About(){
    const [index,setIndex] =useState(0)
    const handleChange=(id)=>{
        setIndex(id)
    }
    const desc=useRef(null)
    useEffect(()=>{
     
        const typed=new Typed(desc.current,{
            strings:['Pre final student','Frontend web developer'],
            typeSpeed:30,
            loop: true,
            loopCount:1,
            backSpeed:20,
        })
        return ()=>{
            typed.destroy();
        }
    },[])
    const particlesInit=useCallback(async engine=>{
        console.log(engine)
        await loadFull(engine)
    })
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return (
        <>
            <div className='relative m-0 w-full h-screen flex flex-col justify-between '>
            <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={particlesConfig}/>
            <Nav/>
                <div style={{ zIndex: 10 }} className="md:flex text-gray-200 lg:w-3/4 m-auto rounded-md shadow-sm items-center md:text-left p-10 md:pt-10">
                    <img src={Profile} className="rounded-md m-auto" width="384" height="512" ></img>
                    <div className="side-content p-10">
                        <h4 className="text-2xl">Hey!</h4>
                        <p className="text-sky-500 text-5xl mt-4">Siddhartha Mishra</p>
                        <p className="text-gray-500 text-3xl mt-5" ref={desc}/>
                        <div className="text-lg mt-4">
                            I am an undergraduate student with a passion for web development. Enjoy exploring new technologies 
                            and using them. Always eager to work and collaborate with senior and junior developers. Enthusiastic 
                            about learning and applying new technologies to provide the best solution.
                        </div>
                    </div>
                </div>
            
                <div style={{ zIndex: 10 }} className="technologies text-gray-200 p-10 lg:w-3/4 m-auto mt-32 mb-32 rounded-md">
                    <h3 className="text-5xl text-center m-5"><span className="active">Tech I use</span></h3>
                    <div className="flex gap-36 w-1/2 m-auto p-10 justify-center">
                        <div>
                                <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500">
                                    <IoLogoJavascript/>
                                </div>
                                <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500"><FaBootstrap/></div>
                                <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500"><FaReact/></div>
                        </div>
                        <div>
                                <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500"><SiTailwindcss/></div>
                                <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500"><SiExpress/></div>
                                <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500"><FaNodeJs/></div>
                        </div>
                    </div>
                </div>
            
                <div style={{ zIndex: 10 }} className="experience text-gray-200 lg:w-3/4 m-auto  mb-32 rounded-md shadow-sm items-center md:text-left p-10 md:pt-10">
                    <h1 className="text-5xl text-center m-5">Experience</h1>
                        <div className="flex gap-5 justify-center p-0 md:p-5">
                            {
                                experience.map((job,index1)=>{
                                    return(
                                        <p key={index1} onClick={()=>handleChange(job.id)} className={`p-1 text-xl cursor-pointer hover:text-sky-500 ${job.id === index && 'active'}`}>
                                            {job.company}
                                        </p>
                                    )
                                })
                            }
                        </div >
                        <div className="job-item p-5 rounded-md mt-5">
                            <p className="text-2xl text-sky-500 font-bold"><span className="text-gray-200">{experience[index].designation}</span> @{experience[index].company}</p>
                            <p className="mt-2 text-gray-400">{experience[index].tenure}</p>
                            <article className="mt-2">
                                {experience[index].description}
                            </article>
                        </div>
                </div>
            
                <div style={{ zIndex: 10 }} className="connect text-gray-200 p-10  mb-32"> 
                    <h3 className="text-5xl text-center m-5"><span className="active">Connect with me</span></h3>
                    <div className="follow flex flex-col items-center">
                        <p className="p-5 text-slate-400">Follow me on </p>
                        <ul className="flex gap-5 p-5">
                            <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300"><a href="https://twitter.com/raiderfreed"><FaTwitter/></a></li>
                            <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300"><a href="https://www.linkedin.com/in/siddhartha-mishra-628282203/"><FaLinkedin/></a></li>
                            <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300"><a href="https://www.instagram.com/sid_mishra19/" target="_blank"><FaInstagram/></a></li>

                        </ul>
                        
                            <div className="bg-sky-500 hover:bg-sky-600 p-4 m-5 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                                <h4 className="text-xl "><a href="mailto:mailbox.siddharthamishra@gmail.com?body=Add your body here">Mail me</a></h4>
                            </div>
                        
                    </div>
                </div>
            
            <Footer/>
        </div>
        </>
    )
}

export default About 