function About() {
    return (
        <div id="about" className="w-full h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-primary">About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi. I'm Nico, nice to meet you. Please take a look arround</p>
                    </div>
                    <div>
                        <p>
                            I am an experienced front-end developer with a strong background in React, HTML, CSS and JavaScript. I have a
                            passion for creating visually appealing and responsive websites through personal projects, with a strong
                            problem-solving ability and a commitment to staying up to date with the latest web development trends.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
