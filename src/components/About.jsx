import React from 'react'
import aboutImage from "../assets/profile-image.jpg"

const About = () => {
  return (
    <div className='bg-background text-primary max-w-[1400px] mx-auto' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>
            <div className='mt-4 md:mt-0 text-left flex py-6 md:py-0'>
                <div className='my-auto mx-6'>
                    <h2 className='text-4xl font-bold mb-4 text-boldtext'>
                        About Me
                    </h2>
                    <p>I'm Rabia Amin, an interior design student at GIFT University, passionate about creating beautiful and functional spaces. With experience in residential and commercial design, I use tools like AutoCAD, SketchUp, and Lumion to bring ideas to life. My approach focuses on sustainability and aesthetics, ensuring every project is both eco-friendly and visually appealing.</p>
                </div>
            </div>
            <img src={aboutImage} alt='' width={300} height={300} className='mx-auto rounded-3xl py-8 md:py-0'/>
        </div>
    </div>
  )
}

export default About