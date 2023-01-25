import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Social from "./social/Social";

function Navbar() {
    const [nav, setNav] = useState<boolean>(false);

    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex md:justify-center justify-end items-center px-4">
            {/* Menu */}
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 left-0 w-full h-screen bg-gradient-to-l from-[#34016b] to-[#00215a] flex flex-col justify-center items-center"
                }
            >
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contact</li>
            </ul>

            {/* Social icons */}
            <Social />
        </div>
    );
}

export default Navbar;
