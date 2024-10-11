import React from "react";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import AutoCAD from "../assets/AutoCAD.png";
import Sheet from "../assets/sheet4.png";
import C1 from "../assets/cafe1.png";
import C2 from "../assets/cafe2.png";
import C3 from "../assets/cafe3.png";
import C4 from "../assets/cafe4.png";

const ProjectFive = () => {
  return (
    <div className="max-w-[1400px] bg-background mx-auto p-5 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <Link to="/">
          <IoHome className="text-4xl text-boldtext hover:text-accent transition-colors duration-300" />
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-boldtext text-center mb-8">
        Outdoor Cafe Plan
      </h1>

      <div className="text-lg text-boldtext">
        <img
          src={Sheet}
          alt="Outdoor Cafe Plan"
          className="mx-auto mb-4 max-w-full h-[550px]"
        />

        <div className="text-accent text-center mb-4">
          <span className="font-bold">Tools Used:</span>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <img src={AutoCAD} alt="AutoCAD Logo" className="h-12 w-12" />
        </div>

        <div className="mt-8">
          <p>
            For the Outdoor Cafe Plan, I utilized AutoCAD to develop a
            comprehensive layout that included detailed 2D plans and elevations.
            The design thoughtfully incorporated entertaining spaces aimed at
            enhancing the guest experience, ensuring the café was both
            functional and inviting. By carefully visualizing the layout and
            design elements, the project successfully captured the essence of a
            welcoming and aesthetically pleasing outdoor environment.
          </p>
        </div>

        <div className="grid gap-4 mt-8">
          <img src={C1} alt="Elevation 1" className="w-full h-auto" />
          <img src={C2} alt="Generation 1" className="w-full h-auto" />
          <img src={C3} alt="Elevation 2" className="w-full h-auto" />
          <img src={C4} alt="Generation 2" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default ProjectFive;
