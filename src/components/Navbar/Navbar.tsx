import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Social from "./social/Social";
import { Link } from "react-scroll";

function Navbar() {
    const [nav, setNav] = useState<boolean>(false);

    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-[80px] flex md:justify-center justify-end items-center px-4">
            {/* Menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true}>
                        Contact
                    </Link>
                </li>
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
                <li className="py-6 text-4xl">
                    <Link to="home" smooth={true} onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="about" smooth={true} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="skills" smooth={true} onClick={handleClick}>
                        Skills
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="work" smooth={true} onClick={handleClick}>
                        Work
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link to="contact" smooth={true} onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <Social />
        </div>
    );
}

export default Navbar;
