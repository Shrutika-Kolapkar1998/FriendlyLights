import React from "react";
import { Link } from "react-scroll";

const HeroSection = () => {
    return (
        <section id="home" className="mt-0 px-40 py-10 h-auto rounded-2xl flex flex-col justify-center items-center bg-zinc-200">
             <div className="row justify-center items-center">
            <div className="col-md-6">
              <h2 className="text-4xl font-bold mb-4">Transform Your Space with Renter-Friendly Wall Lights</h2>
            <p className="text-lg mb-6">No drills, no damage, no stress — just beautiful lighting that moves with you. Perfect for apartments, rentals, and small spaces.</p>
            <Link to="projects" smooth={true} duration={600} offset={-80}
             className="px-6 py-2 bg-stone-600 text-white rounded-full shadow hover:bg-stone-900 cursor-pointer no-underline">Shop Now</Link>
            </div>
            <div className="col-md-6">
                <img src="1.png" alt="1.png" className='w-full h-96 object-contain' />
            </div>
        </div>
            </section>
    )
}


export default HeroSection;