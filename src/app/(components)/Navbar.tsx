"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch, FaTicketAlt, FaHome } from "react-icons/fa";
import { BiLogIn, BiLogOut } from "react-icons/bi"

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "Home",
            path: "/",
            icon: <FaHome />
        },
        {
            id: 2,
            link: "CreateNewTicket",
            path: "/Complaints/new",
            icon: <FaTicketAlt />
        },
        {
            id: 3,
            link: "Login",
            path: "/login",
            icon: <BiLogIn />
        },
        {
            id: 4,
            link: "Signup",
            path: "/signup",
            icon: <BiLogOut />
        },
    ];

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white nav bg-black">
            <div>
                <h1 className="text-4xl italic font-extrabold font-signature text-white">
                    <Link
                        className="link-underline link-underline-black"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="flex m-0"><FaTicketAlt size={30} />COMPLAINT FORUM</div>
                    </Link>
                </h1>
            </div>

            <div className="flex items-center space-x-2 m-4">
                <div className="text-lg text-gray-800">
                    <FaSearch />
                </div>

                <input
                    className="border border-gray-500 p-2 rounded-md focus:outline-none focus:border-blue-500 text-gray-800 w-80"
                    type="text"
                    placeholder="Search for relevant complaints..."
                />
            </div>


            <ul className="hidden md:flex">
      {links.map(({ id, link, path , icon }) => (
        <li
          key={id}
          className="nav-links mr-10 px-4 cursor-pointer capitalize text-lg text-gray-500 hover:scale-105 hover:text-yellow-600 duration-200 link-underline"
        >
          <div className="text-lg text-white">{icon}</div>
           <Link href={path}>{link}</Link>
        </li>
      ))}
    </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link onClick={() => setNav(!nav)} href={link}>
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Navbar;