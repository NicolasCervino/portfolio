import { HiArrowNarrowRight } from "react-icons/hi";
import { Element, Link } from "react-scroll";

function Home() {
    return (
        <Element name="home">
            <div className="w-full h-screen">
                {/* Container */}
                <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                    <p className="text-primary text-2xl">Hi, my name is</p>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6fc]">Nicolas Cervino</h1>
                    <h2 className="text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-teal-500 to-primary animate-text">
                        I'm a Front-End Developer
                    </h2>
                    <p className="text-[#8892b0] py-4 max-w-[750px]">
                        I'm a front-end developer with a passion for creating web applications. Here, you'll find a collection of my
                        projects, showcasing my skills and development process. I am currently seeking for my first job opportunity and I am
                        excited to start my career in the field
                    </p>
                    <div>
                        <Link
                            to="work"
                            smooth={true}
                            className="w-fit cursor-pointer text-white group border-2 px-6 py-3 my-2 flex items-center transition-all duration-300 ease-out hover:bg-gradient-to-b from-teal-500  to-primary hover:border-primary"
                        >
                            View work
                            <span className="ml-3 group-hover:rotate-90 duration-300 p-0">
                                <HiArrowNarrowRight />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Home;
