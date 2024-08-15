import React, { useRef, useState, useEffect } from 'react';
import { experienceData} from '../../app/data/ExperienceInfo';

const ExperienceWork = () => {
  const [experiences, setExperiences] = useState([]);
  const marqueeRef = useRef(null);
  useEffect(() => {
    // Fetch data if necessary (assuming data isn't already available)
    setExperiences(experienceData); // Or use fetched data from API
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

  return (
    <div className="w-full h-80  px-12 mb-8">
      <div className="w-full h-8 flex justify-center items-start flex-col px-12 gap-2">
        <div className="w-full h-0.5 bg-divider1 rounded-sm"></div>
        <h5 className="text-divider2 text-sm font-medium">Experience</h5>
      </div>

      <div ref={marqueeRef} className="w-full h-[375px] overflow-x-hidden flex justify-center items-center gap-8 animate-marquee3 ml-8">
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
  );
};

export default ExperienceWork;