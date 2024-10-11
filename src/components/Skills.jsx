import React from 'react'
import CoralDraw from "../assets/CoralDraw.jpeg"
import PhotoShop from "../assets/PhotoShop.png"
import AutoCAD from "../assets/AutoCAD.png"
import Canva from "../assets/Canva.jpeg"
import Lumion from "../assets/Lumion.png"
import MSoffice from "../assets/MSoffice.jpeg"
import Sketchup from "../assets/SketchUp.jpeg"

const Skills = () => {
  return (
    <div className=' bg-background text-accent md:h-[150px] max-w-[1400px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center' id='skills'>
        <h2 className='text-boldtext text-2xl md:text-4xl font-bold m-4'>
            My <br/> Skills
        </h2>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={CoralDraw} alt="" width={100} height={100} />
            <p className='mt-2'>Coral Draw</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={PhotoShop} alt="" width={100} height={100} />
            <p className='mt-2'>PhotoShop</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={AutoCAD} alt="" width={100} height={100} />
            <p className='mt-2'>AutoCAD</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={Sketchup} alt="" width={100} height={100} />
            <p className='mt-2'>Sketchup</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={Lumion} alt="" width={100} height={100} />
            <p className='mt-2'>Lumion</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={Canva} alt="" width={100} height={100} />
            <p className='mt-2'>Canva</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
            <img src={MSoffice} alt="" width={100} height={100} />
            <p className='mt-2'>MS Office</p>
        </div>
    </div>
  )
}

export default Skills
