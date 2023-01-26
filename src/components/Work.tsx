import { data } from "../data/data.js";
import ProyectCard from "./ProyectCard";

function Work() {
    return (
        <div id="work" className="w-full md:h-screen">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-primary">Work</p>
                    <p className="py-4">// Check out some of my recent work</p>
                </div>
                {/* Proyects */}
                <div className="grid md:grid-cols-2 gap-4">
                    {data.map((p) => (
                        <ProyectCard key={p.id} name={p.name} background={p.image} links={p.links} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Work;
