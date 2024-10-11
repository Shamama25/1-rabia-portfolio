import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import AutoCAD from "../assets/AutoCAD.png";
import Sketchup from "../assets/SketchUp.jpeg";
import Lumion from "../assets/Lumion.png";
import Sheet from "../assets/sheet2.png";
import MD1 from "../assets/md1.jpg";
import MD2 from "../assets/md2.jpg";
import MD3 from "../assets/md3.jpg";
import MD4 from "../assets/md4.jpg";
import MD5 from "../assets/md5.png";
import MD6 from "../assets/md6.png";
import MD7 from "../assets/md7.png";
import MD8 from "../assets/md8.png";

const ProjectTwo = () => {
  return (
    <div className="max-w-[1400px] bg-background mx-auto p-5 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <Link to="/">
          <IoHome className="text-4xl text-boldtext hover:text-accent transition-colors duration-300" />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-boldtext text-center mb-8">
        Master Bedroom Design
      </h1>

      <div className="text-lg text-boldtext">
        <img
          src={Sheet}
          alt="Project 2"
          className="mx-auto mb-4 max-w-full h-auto"
        />

        <div className="text-accent text-center mb-4">
          <span className="font-bold">Tools Used:</span>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <img src={AutoCAD} alt="AutoCAD Logo" className="h-12 w-12" />
          <img src={Sketchup} alt="Sketchup Logo" className="h-12 w-12" />
          <img src={Lumion} alt="Lumion Logo" className="h-12 w-12" />
        </div>

        <div className="mt-8">
          <p>
            For the Master Bedroom Design project, I utilized AutoCAD to create
            precise 2D plans and layouts, ensuring accuracy in every detail.
            Following the planning phase, I developed a comprehensive 3D model
            in SketchUp, which allowed for effective visualization of the space.
            To enhance the presentation further, I rendered the design in
            Lumion, producing realistic visualizations that effectively
            showcased the project concept. This approach not only highlighted
            the aesthetic aspects of the master bedroom but also facilitated
            better communication of the design intentions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <img src={MD5} alt="Elevation 1" className="w-full h-auto" />
          <img src={MD6} alt="Generation 1" className="w-full h-[430px]" />
          <img src={MD7} alt="Elevation 2" className="w-full h-[600px]"/>
          <img src={MD8} alt="Generation 2" className="w-full h-[600px]" />
          <img src={MD1} alt="Elevation 1" className="w-full h-auto" />
          <img src={MD2} alt="Generation 1" className="w-full h-auto" />
          <img src={MD3} alt="Elevation 2" className="w-full h-[600px]"/>
          <img src={MD4} alt="Generation 2" className="w-full h-[600px]" />
          
        </div>
      </div>
    </div>
  );
};

export default ProjectTwo;
