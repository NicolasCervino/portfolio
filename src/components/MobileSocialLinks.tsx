import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Resume from "../assets/Resume English V2.pdf";

const MobileSocialLinks = () => {
  return (
    <div className="flex justify-center bottom-0 w-full lg:hidden">
      <a href="https://www.linkedin.com/in/nicolas-cervino/" className="bg-blue-600 p-2" target="_blank">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/NicolasCervino" className="bg-[#333333] p-2" target={"_blank"}>
        <FaGithub size={30} />
      </a>
      <a href="mailto:nicolascervino2@gmail.com" className="bg-[#6fc2b0] p-2" target="_blank">
        <HiOutlineMail size={30} />
      </a>
      <a href={Resume} download="Resume" className="bg-[#565f69] p-2">
        <BsFillPersonLinesFill size={30} />
      </a>
    </div>
  );
};

export default MobileSocialLinks;
