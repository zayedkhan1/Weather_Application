import React, { useEffect, useState } from 'react';
import { FaCloudversify } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { TbWorldLongitude } from "react-icons/tb";
import { TbWorldLatitude } from "react-icons/tb";
import { TbTemperatureCelsius } from "react-icons/tb";
import { CiTempHigh } from "react-icons/ci";
import { TbTemperatureFahrenheit } from 'react-icons/tb';
import { CiCloud } from "react-icons/ci";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { LuClockAlert } from "react-icons/lu";
import wed from '../assets/logo/weather.png'

const Weather = () => {
    const [data, setData] = useState([]);
    const [two, setTwo] = useState([]);

    const handleLocation = (e) => {
        e.preventDefault();
        const form = e.target;
        const val = form.weather.value;

        fetch(`http://api.weatherapi.com/v1/current.json?key=4d6349c5449c4d02933132136250907&q=${val}&aqi=no`)
            .then(res => res.json())
            .then(resData => {
                setData(resData.current);
                setTwo(resData.location);
                console.log(resData.current); 
                console.log(resData.location); 
            });
    };

    useEffect(() => {
        console.log('data updated', data);
    }, [data]);

    useEffect(() => {
        console.log('two updated', two);
    }, [two]);
    return (
        <div className='min-h-screen bg-[linear-gradient(135deg,_rgba(59,130,246,0.6),_rgba(34,211,238,0.4),_rgba(99,102,241,0.5))]   h-screen  '>
            <h2 className='bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-500 bg-clip-text text-transparent p-5 text-3xl font-bold  text-center'> See, Feel, Enjoy</h2>
                 
           <div className='  mx-auto mt-10  '>

              
                    {/* search bar */}

                    <div className="text-center ">
                        <form onSubmit={handleLocation} className="max-w-md mx-auto ">
                            <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
                                <input
                                    type="text"
                                    name="weather"
                                    placeholder="Search weather..."
                                    className="w-full px-3  text-gray-700 placeholder-gray-400 rounded-full focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="text-blue-500 hover:text-blue-700 p-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* search bar */}
                  <div className='flex items-center justify-center mt-5 mb-5 p-4 font-bold '>
                  <CiTempHigh />  Feels like : {data.feelslike_c}<TbTemperatureCelsius /> 
                  </div>


                    <div className='   grid  sm:grid-cols-1  md:grid-cols-3  place-items-center mt-5 mb-5  '>
                        <div>
                            <div className='mb-10 '>
                                <p className=' flex items-center font-bold mb-2'> <CiLocationOn className='' /> Location : {two.name}</p>
                                <p className='flex items-center mb-2'><TbWorldLatitude />Laticude : {two.lat} </p>
                                <p className=' flex items-center mb-2'> <TbWorldLongitude />Longitude : {two.lon}</p>

                            </div>

                            <p className=' flex items-center'><MdOutlineDateRange /> Date & Time : {two.localtime}</p>

                        </div>
                        <div className='mt-5 font-bold text-white'>
                            {data.condition?.text}
                            <img className='rounded-full w-[102px] ' src={wed} alt="" />
                        </div>
                        <div className='ml-30'>
                            <p className=' flex items-center font-bold mb-2' > Temperature : {data.temp_c}<TbTemperatureCelsius /></p>
                            <p className=' flex items-center mb-2' > Temperature : {data.temp_f} <TbTemperatureFahrenheit></TbTemperatureFahrenheit> </p>
                            <p className=' flex items-center font-bold mb-2' ><WiHumidity /> Humidity : {data.humidity}</p>
                            <p className=' flex items-center mb-2' ><FaWind /> Wind direction : {data.wind_dir}</p>
                            <p className=' flex items-center font-bold mb-2' > <FaCloudversify /> Wind Speed (kmp): {data.wind_kph}</p>
                            <p className=' flex items-center' > <CiCloud /> Cloud : {data.cloud}% </p>

                        </div>

                    </div>
                   

                

            </div>
            <div className='flex items-center justify-center mt-20 font-bold'>
                
                  <LuClockAlert />last updaed : {data.last_updated} 
             </div>
           
           
        </div>
    );
};

export default Weather;