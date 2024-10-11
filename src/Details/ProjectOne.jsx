import React from 'react';
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import AutoCAD from "../assets/AutoCAD.png";
import PhotoShop from "../assets/PhotoShop.png";
import Sheet from "../assets/sheet1.jpg";
import Elevation1 from "../assets/elevation1.png";
import Elevation2 from "../assets/elevation2.png";
import Elevation3 from "../assets/elevation3.png";
import Elevation4 from "../assets/elevation4.png";
import Gen1 from "../assets/gen1.jpg";
import Gen2 from "../assets/gen2.jpg";
import Gen3 from "../assets/gen3.jpg";
import Gen4 from "../assets/gen4.jpg";
import Ceiling from "../assets/ceiling.png";
import Model from "../assets/genModel.png";

const ProjectOne = () => {
  return (
    <div className="max-w-[1400px] bg-background mx-auto p-5 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <Link to="/">
          <IoHome className="text-4xl text-boldtext hover:text-accent transition-colors duration-300" />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-boldtext text-center mb-8">Generation Brand Model</h1>
      
      <div className="text-lg text-boldtext">
        <img src={Sheet} alt="Project 1" className="mx-auto mb-4 max-w-full h-auto" />
        
        <div className="text-accent text-center mb-4">
          <span className="font-bold">Tools Used:</span>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <img src={AutoCAD} alt="AutoCAD Logo" className="h-12 w-12" />
          <img src={PhotoShop} alt="Photoshop Logo" className="h-12 w-12" />
        </div>
        
        <div className="mt-8">
          <p>
            For the Proposed Generation Plan, I developed comprehensive detailed plans and elevations using AutoCAD, ensuring precision and clarity in the architectural layout. 
            To further enhance the project's visual presentation, I created 2D renderings in Photoshop, which contributed to a more impactful and engaging representation of the design. 
            This approach not only helped in effectively communicating the design concept but also resulted in visually engaging materials that resonate with the project's objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <img src={Elevation1} alt="Elevation 1" className="w-full h-auto" />
          <img src={Gen1} alt="Generation 1" className="w-full h-auto" />
          <img src={Elevation2} alt="Elevation 2" className="w-full h-[600px]" />
          <img src={Gen2} alt="Generation 2" className="w-full h-[600px]" />
          <img src={Elevation3} alt="Elevation 3" className="w-full h-auto" />
          <img src={Gen3} alt="Generation 3" className="w-full h-[500px]" />
          <img src={Elevation4} alt="Elevation 4" className="w-full h-auto" />     
          <img src={Gen4} alt="Generation 4" className="w-full h-[300px]" />
          <img src={Ceiling} alt="Elevation 4" className="w-full h-[500px]" />     
          <img src={Model} alt="Generation 4" className="w-full h-[500px]" />
        </div>
      </div>
    </div>
  );
}

export default ProjectOne;
