import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
    return (
        <div className="w-full h-screen">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-primary">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6fc]">Nicolas Cervino</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Front-End Developer</h2>
                <p className="text-[#8892b0] py-4 max-w-[750px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolor doloremque impedit voluptatum nesciunt a
                    repellat praesentium provident numquam dicta quibusdam quo alias accusantium laboriosam distinctio natus, illum saepe
                    adipisci.
                </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-primary hover:border-primary">
                        View work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
