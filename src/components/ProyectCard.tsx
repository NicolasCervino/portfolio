function ProyectCard({ name, background, links }: { name: string; background: string; links: any }) {
    return (
        <div
            style={{ backgroundImage: `url(${background})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div"
        >
            <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font bold text-white tracking-wider">{name}</span>
                <div className="pt-8 text-center ">
                    <a href={links.github} target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                    </a>
                    <a href={links.live} target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Live</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProyectCard;
