import { useState } from "react";
import { BoltIcon, AcademicCapIcon, HeartIcon, ArrowTrendingUpIcon, HomeIcon } from "@heroicons/react/24/outline";
import imgurl from "../assets/logoSBM.png";
import logoC from "../assets/logoContact.png";
import Home from "./Home";
import Sgpac from './Sgpac';
import Cgpac from './Cgpac';
import Cgpap from './Cgpap';
import Bmic from './Bmic';
import Notes from './Notes';
import './Sideb.css'
function Sidebar({ setmp }) {
    return (
        <>
            <div className="w-1/5 shadow-xl/50 flex flex-col items-center justify-evenly fixed" style={{ height: "100vh", backgroundColor: "#171717" }}>
                <img src={imgurl} alt="Logo" className="w-14 mx-auto logoImgSB" />
                <div className="w-full gap-2 flex flex-col items-center">
                    <div className="flex divhover justify-start items-center w-36 p-1 rounded">
                        <HomeIcon className="w-5 h-5 mr-1 text-white" />
                        <button onClick={() => setmp(<Home />)}
                            className="text-xl ml-5 text-white font-bold text-start">Home</button>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <div className="flex justify-start items-center hbtnwh w-36 p-1 rounded">
                            <AcademicCapIcon className="w-5 h-5 mr-1 text-white" />
                            <button className="text-xl ml-1 text-white font-bold text-start">Academic</button>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="h-full w-0.5 bg-white" style={{ backgroundColor: "#262626" }}>
                            </div>
                            <div className="flex flex-col items-center gap-1 ml-1 mt-1 max-h-60 opacity-100 ">
                                <button
                                    onClick={() => setmp(<Sgpac />)}
                                    className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">Sgpa Calculator</button>
                                <button
                                    onClick={() => setmp(<Cgpac />)}
                                    className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">Cgpa Calculator</button>
                                <button
                                    onClick={() => setmp(<Cgpap />)}
                                    className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">Cgpa predic</button>
                                <button
                                    onClick={()=>{setmp(<Notes/>)}}
                                    className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">Notes Area</button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        <div className="flex justify-start items-center hbtnwh w-36 p-1 rounded">
                            <BoltIcon className="w-5 h-5 mr-1 text-white" />
                            <button className="text-xl ml-4 text-white font-bold text-start">Fitness</button>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="h-full w-0.5 bg-white" style={{ backgroundColor: "#262626" }}>
                            </div>
                            <div className="flex flex-col items-center gap-1 ml-1 mt-1 transition-all duration-30 max-h-60 opacity-100 ">
                                <button
                                    onClick={() => setmp(<Bmic />)}
                                    className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">BMI Calculator</button>
                                <button className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">
                                    Coming Soon
                                </button>
                                <button className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">
                                    Coming Soon
                                </button>
                                <button className="p-2 w-30 hbtn rounded text-xs font-semibold text-white transition-all duration-200 ease-in-out">
                                    Coming Soon
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CONTACT */}
                <div className="hbtnwh p-2 w-52 h-14 text-sm rounded-xl flex items-center justify-start gap-2">
                    <a href="https://www.instagram.com/garvcodes29/" className="relative group inline-block">
                        <img src={logoC} alt="" className="w-10 h-10 rounded-full" />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 bg-linear-to-r from-pink-500 to-purple-700 text-white text-xs p-1 rounded transition-all duration-200 whitespace-nowrap font-semibold">
                            Instagram
                        </span>
                    </a>
                    <div className="flex flex-col">
                        <a href="https://www.linkedin.com/in/garvit-goyal-00073733a/" className="relative group text-white font-medium">Garvit Goyal
                            <span className="absolute -top-0.5 left-30 -translate-x-1/2 scale-0 group-hover:scale-100 text-white text-xs p-1 rounded transition-all duration-200 whitespace-nowrap lnk">
                                LinkedIn
                            </span>
                        </a>
                        <a href="https://github.com/Garvit-Goyal29" className="relative group text-purple-400 font-mono">github.com
                            <span className="absolute -top-0.5 left-30 -translate-x-1/2 scale-0 group-hover:scale-100 text-black bg-white text-xs p-1 rounded transition-all duration-200 whitespace-nowrap">
                                Github
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
