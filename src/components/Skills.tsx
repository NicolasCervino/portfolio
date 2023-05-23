import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import React from "../assets/react.png";
import Bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import Firebase from "../assets/firebase.png";
import Git from "../assets/git.png";
import Vue from "../assets/vue.png";
import { Element } from "react-scroll";

function Skills() {
  return (
    <Element name="skills">
      <div className="w-full h-screen">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-primary">Skills</p>
            <p className="py-4">// These are the technologies I've worked with</p>
          </div>
          {/* Technologies Imgs*/}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={HTML} alt="HTML icon"></img>
              <p className="my-3">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={CSS} alt="CSS icon"></img>
              <p className="my-3">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Javascript} alt="JS icon"></img>
              <p className="my-3">Javascript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={React} alt="React icon"></img>
              <p className="my-3">React</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Vue} alt="Vue icon"></img>
              <p className="my-3">Vue</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Bootstrap} alt="Bootstrap icon"></img>
              <p className="my-3">Bootstrap</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon"></img>
              <p className="my-3">Tailwind</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Git} alt="Git icon"></img>
              <p className="my-3">Git</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={Firebase} alt="Firebase icon"></img>
              <p className="my-3">Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;
