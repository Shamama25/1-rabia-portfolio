import React from 'react'
import { Link } from 'react-router-dom'
import Project1 from "../assets/Project-1.jpg"
import Project2 from "../assets/Project-2.png"
import Project3 from "../assets/Project-3.jpg"
import Project4 from "../assets/Project-4.png"
import Project5 from "../assets/cafe.png"

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold text-boldtext'>Projects</p>
        <p className='text-accent'>Explore my latest work and design projects!</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
            <img src={Project1} alt=''/>
            <div className='opacity-0 group-hover:opacity-90 absolute flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-accent tracking-wide'></span>
            <div className='pt-8 text-center'>
                <Link to='/project-one'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-boldtext font-bold text-lg'>Show Details</button>
                </Link>
            </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
            <img src={Project2} alt=''/>
            <div className='opacity-0 group-hover:opacity-90 absolute flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-accent tracking-wide'></span>
            <div className='pt-8 text-center'>
                <Link to="/project-two">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-boldtext font-bold text-lg'>Show Details</button>
                </Link>
            </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
            <img src={Project3} alt=''/>
            <div className='opacity-0 group-hover:opacity-90 absolute flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-accent tracking-wide'></span>
            <div className='pt-8 text-center'>
                <Link to="/project-three">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-boldtext font-bold text-lg'>Show Details</button>
                </Link>
            </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
            <img src={Project4} alt=''/>
            <div className='opacity-0 group-hover:opacity-90 absolute flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-accent tracking-wide'></span>
            <div className='pt-8 text-center'>
                <Link to="project-four">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-boldtext font-bold text-lg'>Show Details</button>
                </Link>
            </div>
            </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto h-[200px] bg-cover relative'>
            <img src={Project5} alt=''/>
            <div className='opacity-0 group-hover:opacity-90 absolute flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-accent tracking-wide'></span>
            <div className='pt-8 text-center'>
                <Link to="project-five">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-boldtext font-bold text-lg'>Show Details</button>
                </Link>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
