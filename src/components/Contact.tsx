import { Element } from "react-scroll";

function Contact() {
    return (
        <Element name="contact">
            <div className="w-full md:h-screen">
                <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                    <div className="pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-primary">Contact</p>
                        <p className="py-4">// Submit the form below</p>
                    </div>
                    <form
                        method="POST"
                        action="https://getform.io/f/31e23400-c2ad-4f05-a599-f7e58f28b8f2"
                        className="flex flex-col max-w-[600px] w-full text-black self-center"
                    >
                        <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" required />
                        <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" required />
                        <textarea className="bg-[#ccd6f6] p-2" name="message" rows={10} placeholder="Message" required></textarea>
                        <button className="text-white border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-gradient-to-b from-teal-500  to-primary hover:border-primary">
                            Let's Collaborate
                        </button>
                    </form>
                </div>
            </div>
        </Element>
    );
}

export default Contact;
