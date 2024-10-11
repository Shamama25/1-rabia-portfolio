import React from "react";
import { TypeAnimation } from "react-type-animation";
import heroimage from "./../assets/profile-image.jpg";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1400px] mx-auto py-8 bg-background id=" id="home">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]">
        <div className="w-[300px] h-auto lg:w-[400px]">
          <img src={heroimage} alt="hero image" className="m-4 rounded-2xl"/>
        </div>
      </div>

      <div className="col-span-2 px-5">
        <h1 className="text-boldtext text-4xl sm:text-5xl lg:text-7xl font-semibold">
            <span className="primary-color">
                I'm 
                </span> <br/>
                <TypeAnimation 
                sequence={[
                    "Freelancer",
                    1000,
                    "Interior Designer",
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
                
        </h1>
        <br/>
        <p className="text-primary text-3xl sm:text-lg my-6 lg:text-xl">
        Designing spaces that blend creativity with comfort and elegance.
        </p>
        <br/>
        <div className="my-8">
            <a href="/RabiaAmin.pdf" className="px-6 py-3 w-full rounded-xl mr-4 bg-primary text-text">
                Download CV
            </a>
            <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4 border-accent bg-secondary text-accent">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
