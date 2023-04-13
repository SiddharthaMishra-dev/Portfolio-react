import React, { useState } from "react";
import Profile from './assets/Profile.jpg'
import Nav from "./Nav";
import Footer from "./Footer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import experience from "./data";
import {FaTwitter ,FaLinkedin,FaInstagram,FaReact,FaBootstrap,FaNodeJs} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTailwindcss,SiExpress} from 'react-icons/si'
import 'react-tabs/style/react-tabs.css';

function About(){
    const [index,setIndex] =useState(0)
    const handleChange=(id)=>{
        setIndex(id)
    }
    return (
        <div className='m-0 w-full h-screen flex flex-col justify-between'>
            <Nav/>
            <div className="md:flex bg-slate-800 text-gray-200 lg:w-3/4 m-auto rounded-md shadow-sm items-center md:text-left p-10 md:pt-10">
                <img src={Profile} className="rounded-md m-auto" width="384" height="512" ></img>
                <div className="side-content p-10">
                    <h4 className="text-2xl">Hey!</h4>
                    <p className="text-sky-500 text-5xl mt-4">Siddhartha Mishra</p>
                    <p className="text-gray-500 text-3xl mt-4">Pre Final year student</p>
                    <div className="text-lg mt-4">
                        I am an undergraduate student with a passion for web development. Enjoy exploring new technologies 
                        and using them. Always eager to work and collaborate with senior and junior developers. Enthusiastic 
                        about learning and applying new technologies to provide the best solution.
                    </div>
                </div>
            </div>

            <div className="technologies text-gray-200 p-10 lg:w-3/4 m-auto mt-32 mb-32 bg-slate-800 rounded-md">
                <h3 className="text-5xl text-center m-5 ">Tech I use</h3>
                <div className="flex gap-36 w-1/2 m-auto p-10 justify-center">
                    <div>
                        <div className="p-3 text-4xl  hover:-translate-y-1 duration-300 hover:text-sky-500"><IoLogoJavascript/></div>
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

            <div className="experience text-gray-200 lg:w-3/4 m-auto  mb-32 rounded-md shadow-sm items-center md:text-left p-10 md:pt-10">
                <h1 className="text-5xl text-center m-5">Experience</h1>
                    <div className="flex gap-5 justify-center p-0 md:p-5">
                        {
                            experience.map((job,index1)=>{
                                return(
                                    <p key={index1} onClick={()=>handleChange(job.id)} className={`p-1 text-lg cursor-pointer hover:text-sky-500 ${job.id === index && 'active'}`}>
                                        {job.company}
                                    </p>
                                )
                            })
                        }
                    </div >
                    <div className="job-item p-5 bg-slate-800 rounded-md mt-5">
                        <p className="text-2xl text-sky-500 font-bold shadow-2xl"><span className="text-gray-200">{experience[index].designation}</span> @{experience[index].company}</p>
                        <p className="mt-2 text-gray-400">{experience[index].tenure}</p>
                        <article className="mt-2">
                            {experience[index].description}
                        </article>
                    </div>
            </div>

            <div className="connect text-gray-200 p-10  mb-32"> 
                <h3 className="text-5xl text-center m-5">Connect with me</h3>
                <div className="follow flex flex-col items-center">
                    <p className="p-5 text-slate-400">Follow me on </p>
                    <ul className="flex gap-5 p-5">
                        <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300"><FaTwitter/></li>
                        <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300"><FaLinkedin/></li>
                        <li className="text-6xl hover:text-sky-500 cursor-pointer hover:-translate-y-1 duration-300"><FaInstagram/></li>
                    </ul>
                    <div className="bg-sky-500 hover:bg-sky-600 p-4 m-5 rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                        <h4 className="text-xl ">Mail me</h4>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default About 