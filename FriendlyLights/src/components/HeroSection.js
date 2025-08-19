import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
    return (
        <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-lg mb-6">I build modern web application with react</p>
            <Link to="projects" smooth={true} duration={600} offset={-80}
             className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 cursor-pointer"> View My Work</Link>
        </section>
    )
}


export default HeroSection;