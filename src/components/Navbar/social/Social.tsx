import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import SocialIcon from "./SocialIcon";

function Social() {
    return (
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <SocialIcon
                    name={"Linkedin"}
                    icon={<FaLinkedin size={30} />}
                    background="bg-blue-600"
                    link="https://www.linkedin.com/in/nicolas-cervino/"
                />
                <SocialIcon
                    name={"GitHub"}
                    icon={<FaGithub size={30} />}
                    background="bg-[#333333]"
                    link="https://github.com/NicolasCervino"
                />
                <SocialIcon
                    name={"Email"}
                    icon={<HiOutlineMail size={30} />}
                    background="bg-[#6fc2b0]"
                    link="mailto:nicolascervino2@gmail.com"
                />
                <SocialIcon
                    name={"Resume"}
                    icon={<BsFillPersonLinesFill size={30} />}
                    background="bg-[#565f69]"
                    /* Link pendiente  */
                    link="/" 
                />
            </ul>
        </div>
    );
}

export default Social;
