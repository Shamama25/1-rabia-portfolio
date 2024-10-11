import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import AutoCAD from "../assets/AutoCAD.png";
import PhotoShop from "../assets/PhotoShop.png";
import Sheet from "../assets/Project-4.png";
import Ground from "../assets/groundsheet.jpg";
import Floor from "../assets/floorsheet.jpg";

const ProjectFour = () => {
  return (
    <div className="max-w-[1400px] bg-background mx-auto p-5 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <Link to="/">
          <IoHome className="text-4xl text-boldtext hover:text-accent transition-colors duration-300" />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-boldtext text-center mb-8">
        2D Patio Rendering Plan
      </h1>

      <div className="text-lg text-boldtext">
        <img
          src={Sheet}
          alt="2D Patio Rendering Plan"
          className="mx-auto mb-4 max-w-full h-[400px]"
        />

        <div className="text-accent text-center mb-4">
          <span className="font-bold">Tools Used:</span>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <img src={AutoCAD} alt="AutoCAD Logo" className="h-12 w-12" />
          <img src={PhotoShop} alt="Photoshop Logo" className="h-12 w-12" />
        </div>

        <div className="mt-8">
          <p>
            For the 2D Patio Rendering Plan, I designed an outdoor patio
            covering a 70'x50' area, drawing inspiration from hexagonal shapes
            to create a unique and modern layout. The design emphasized
            contemporary geometric patterns, resulting in a visually striking
            and engaging space. By creating detailed 2D renderings using AutoCAD
            and Photoshop, I effectively communicated the design concept,
            enhancing the overall aesthetic appeal and showcasing the modern,
            innovative approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <img src={Ground} alt="Elevation 1" className="w-full h-auto" />
          <img src={Floor} alt="Elevation 1" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProjectFour;
