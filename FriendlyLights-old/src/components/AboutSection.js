import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";

const AboutSection = () => {
  return (
    <section id="about" className="container-fluid p-8">
        <div className="row justify-center items-center">
            <div className="col-md-4">
               <img src="2.png" alt="2.png" className='w-full h-96 object-contain' />
            </div>
            <div className="col-md-4">
                <h4 className='text-xl font-semibold'>About</h4>
                <h2 className='text-3xl font-bold'>The FriendlLights Wall Light</h2>
                <p>At FriendlyLights, we believe everyone deserves a cozy, well-lit space — without the hassle of complicated installations or risking your security deposit.</p>
                <p>Our renter-friendly wall lights are peel-and-stick, battery-operated, and wireless, giving you style and comfort in minutes.</p>
                <Link to="projects" smooth={true} duration={600} offset={-80}
                             className="px-6 py-2 bg-stone-600 text-white rounded-full shadow hover:bg-stone-900 cursor-pointer no-underline">Shop Now</Link>
            </div>
        </div>
       
    </section>
  )
}

export default AboutSection;
