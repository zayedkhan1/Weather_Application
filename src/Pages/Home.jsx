import React from 'react';
import banner from '../assets/logo/background.png'
import { CiCloudSun } from "react-icons/ci";
import { Typewriter } from 'react-simple-typewriter';
import { IoRainyOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
         {/* Banner */}
         <div
  className="hero min-h-screen"
  style={{
    backgroundImage: `url(${banner})`
  
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold h-18 ">
        Explore {''}
        <span className="bg-gradient-to-r from-blue-400 via-sky-500 to-orange-400 bg-clip-text text-transparent">
        <Typewriter
          words={[
            "what’s the sky saying today !!",
            "how the sky feels today !!",
            "today’s weather story !!",
            
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </span>




      </h1>
          <CiCloudSun className='text-xl'></CiCloudSun>

      <p className="mb-5 text-3xl font-semibold  text-orange-300 ">
      Stay updated with the latest weather conditions! Get real-time forecasts, temperature, humidity, and many more -
      
      </p>
      <IoRainyOutline />
     <Link to='/weather'>
      <button className="btn px-6 py-3 font-semibold rounded-md bg-blue-500 ">Explore Weather</button>
     </Link>
    </div>
  </div>
</div>


        </div>
    );
};

export default Home;