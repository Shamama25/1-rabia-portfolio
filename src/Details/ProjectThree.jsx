import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import AutoCAD from "../assets/AutoCAD.png";
import Sketchup from "../assets/SketchUp.jpeg";
import Lumion from "../assets/Lumion.png";
import Sheet from "../assets/sheet3.jpg";
import R1 from "../assets/r1.jpg";
import R2 from "../assets/r2.jpg";
import R3 from "../assets/r3.jpg";
import R4 from "../assets/r4.jpg";
import R5 from "../assets/r5.jpg";
import R6 from "../assets/r6.jpg";
import R7 from "../assets/r7.jpg";
import R8 from "../assets/r8.jpg";
import R9 from "../assets/r9.jpg";
import R10 from "../assets/r10.jpg";
import R11 from "../assets/r11.jpg";
import R12 from "../assets/r12.jpg";
import R13 from "../assets/r13.jpg";
import R14 from "../assets/r14.jpg";
import R15 from "../assets/r15.jpg";
import R16 from "../assets/r16.jpg";
import OfficeAnimation from "../assets/OfficeAnimation.mp4"; 

const ProjectThree = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  return (
    <div className="max-w-[1400px] bg-background mx-auto p-5 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <Link to="/">
          <IoHome className="text-4xl text-boldtext hover:text-accent transition-colors duration-300" />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-boldtext text-center mb-8">
        Corporate Office Design
      </h1>

      <div className="text-lg text-boldtext">
        <img
          src={Sheet}
          alt="Project 2"
          className="mx-auto mb-4 max-w-full h-[600px]"
        />

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowAnimation(!showAnimation)}
            className="px-4 py-2 bg-accent text-white font-bold rounded-lg hover:bg-accent-dark transition-colors duration-300"
          >
            {showAnimation ? "Hide Animation" : "Show Office Animation"}
          </button>
        </div>

        {showAnimation && (
          <div className="flex justify-center mb-8">
            <video
              src={OfficeAnimation}
              controls
              className="max-w-full h-auto"
            ></video>
          </div>
        )}

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
            In the Corporate Office Design project, I utilized AutoCAD to create
            precise 2D plans and layouts for the office room, ensuring accuracy
            in every aspect of the design. To enhance the visualization of the
            workspace, I developed a detailed 3D model using SketchUp, which
            allowed for an effective representation of the office's spatial
            dynamics. Additionally, I rendered the design in Lumion,
            incorporating realistic lighting and textures that significantly
            enhanced the overall presentation. This comprehensive approach not
            only showcased the design's aesthetic qualities but also
            communicated the functionality of the workspace effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <img src={R1} alt="Elevation 1" className="w-full h-auto" />
          <img src={R2} alt="Generation 1" className="w-full h-auto" />
          <img src={R3} alt="Elevation 2" className="w-full h-auto" />
          <img src={R4} alt="Generation 2" className="w-full h-auto" />
          <img src={R5} alt="Elevation 1" className="w-full h-auto" />
          <img src={R6} alt="Generation 1" className="w-full h-auto" />
          <img src={R7} alt="Elevation 2" className="w-full h-auto" />
          <img src={R8} alt="Generation 2" className="w-full h-auto" />
          <img src={R9} alt="Elevation 1" className="w-full h-auto" />
          <img src={R10} alt="Generation 1" className="w-full h-auto" />
          <img src={R11} alt="Elevation 2" className="w-full h-auto" />
          <img src={R12} alt="Generation 2" className="w-full h-auto" />
          <img src={R13} alt="Elevation 1" className="w-full h-auto" />
          <img src={R14} alt="Generation 1" className="w-full h-auto" />
          <img src={R15} alt="Elevation 2" className="w-full h-auto" />
          <img src={R16} alt="Generation 2" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProjectThree;
