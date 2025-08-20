import React from "react";
import  { Link } from "react-scroll";
import { FaSearch , FaRegUserCircle, FaShoppingCart  } from "react-icons/fa";

const Header  = () => {
    const menuItems  = [
        {name: "Home" , id: "home"},
         {name: "Projects" , id: "projects"}, 
         {name: "Products" , id: "products"},
          {name: "Contact" , id: "contact"},
          {name: "About" , id: "about"},
          {name: "Product Detail" , id: "prod_detail"},
          {name: "Testimonial" , id: "testimonial"},
          {name: "FAQ" , id: "FAQ"}
    ];

    return (
        <header className="flex flex-col justify-center items-center p-2 bg-white text-stone-700 w-full">
           <div className="container flex justify-between items-center ">
                <FaSearch />
                <h1 className="text-3xl font-bold cursor-pointer mb-0">FriendlLights</h1>
                <div className="flex justify-between items-center gap-2">
                  <FaRegUserCircle />
                  <FaShoppingCart />
                </div>
           </div>
            <div className='mt-2'>
            <nav>
                <ul className="flex space-x-8 mb-0 p-0">
                    {menuItems.map((item)=> (
                        <li key={item.id}>
                            <Link to={item.id}
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="cursor-pointer hover:underline no-underline text-stone-800">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
           </div>
        </header>
    )

}


export default Header;