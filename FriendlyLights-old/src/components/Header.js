import React from "react";
import  { Link } from "react-scroll";


const Header  = () => {
    const menuItems  = [
        {name: "Home" , id: "home"},
         {name: "Projects" , id: "projects"}, 
         {name: "Portfolio" , id: "portfolio"},
          {name: "Contact" , id: "contact"},
    ];

    return (
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white fixed top-0 w-full shadow z-50">
            <h1 className="text-2xl font-bold cursor-pointer">My WebSite</h1>
            <nav>
                <ul className="flex space-x-4">
                    {menuItems.map((item)=> (
                        <li key={item.id}>
                            <Link to={item.id}
                            smooth={true}
                            duration={600}
                            offset={-80}
                            className="cursor-pointer hover:underline">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )

}


export default Header;