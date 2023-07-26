import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Nav(){
    const navigate=useNavigate()
    return(
        <nav style={{ zIndex: 10 }} className="">
        <ul className='flex gap-5 bg-slate-900 w-full text-slate-300 m-0 mt-5 mb-5 p-5 justify-center text-2xl'>
          <li className={`'highlight'} cursor-pointer hover:text-sky-500`} onClick={()=>{
            navigate('/')
            setIndex(0)
            }}>About</li>
          <li className={` 'highlight'} cursor-pointer hover:text-sky-500`} onClick={()=>{
            navigate('/projects')
            setIndex(1)
            }}>Projects</li>
        </ul>
      </nav>
    )
}
export default Nav;