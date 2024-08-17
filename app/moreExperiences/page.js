'use client'
import { useRouter } from "next/navigation"
import { experienceData} from '../../app/data/ExperienceInfo';
import React, { useRef, useState, useEffect } from 'react';

export default function Experiences (){
    const router = useRouter();
    const [experiences, setExperiences] = useState([]);
    const marqueeRef = useRef(null);
    useEffect(() => {
      setExperiences(experienceData);
    }, []);

    const getStarRating = (rating) => {
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 === 1;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    
        return (
          <div className="flex">
            {[...Array(fullStars)].map((_, i) => (
              <span key={i} className="text-purple1 text-2xl">★</span>
            ))}
            {halfStar && <span className="text-purple1 text-2xl">☆</span>}
            {[...Array(emptyStars)].map((_, i) => (
              <span key={i} className="text-gray-300 text-2xl">★</span>
            ))}
          </div>
        );
      };

    return(
        <div className="w-full h-full flex flex-col justify-start items-center px-6 gap-12">
            <div className="flex justify-between items-center w-full h-16 lg:h-24 bg-white/50 backdrop-blur-md top-0 left-0 fixed z-50 px-8">
                <div className="w-1/3 h-full flex justify-start items-center "><button onClick={() => router.back()}  className="  rounded-full p-1 w-10 lg:w-12 h-full"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4V5.4C20 8.76031 20 10.4405 19.346 11.7239C18.7708 12.8529 17.8529 13.7708 16.7239 14.346C15.4405 15 13.7603 15 10.4 15H4M4 15L9 10M4 15L9 20" stroke="purple" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button></div>
                <div className="w-1/3 h-full flex justify-center items-center"><h1 className="text-xl font-semibold text-purple3">Job Experiences</h1></div>
                <div className="w-1/3 h-full"></div>
            </div>
            <div className="flex-justify-center items-start py-4 mt-20">
                <div className="w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-12">
                {experiences.map((experience, index) => (
          <a href={experience.link} target="_blank" rel="noopener noreferrer" key={index} className="mb-4 py-6 px-12 rounded-2xl border border-divider1 border-solid cursor-default w-80 h-auto flex flex-col justify-center items-start ">
            <div>{getStarRating(parseInt(experience.ranking))}</div>
            <h6 className="text-lg font-medium mt-4">{experience.title}</h6>
            <p className="text-gray-600 mt-2">{experience.role}</p>
            <p className="text-secondary1">{experience.company}</p>
          </a>
        ))}
                </div>
            </div>
        </div>
    )

}