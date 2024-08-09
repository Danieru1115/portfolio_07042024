import React, { useRef, useState, useEffect } from 'react';

const ExperienceWork = () => {
  const ExperienceInfo = [
    {
      title: "ETT Inner Software",
      role: "Software Development",
      ranking: "8",
      company: "ErdenesTavanTolgoi"
    },
    {
      title: "ETT Inner Software",
      role: "Software Development",
      ranking: "10",
      company: "ErdenesTavanTolgoi"
    },
    {
      title: "ETT Inner Software",
      role: "Software Development",
      ranking: "4",
      company: "ErdenesTavanTolgoi"
    },
    {
      title: "ETT Inner Software",
      role: "Software Development",
      ranking: "3",
      company: "ErdenesTavanTolgoi"
    },
    {
      title: "ETT Inner Software",
      role: "Software Development",
      ranking: "5",
      company: "ErdenesTavanTolgoi"
    }
  ];

  const marqueeRef = useRef(null);

  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating / 2);
    const halfStar = rating % 2 === 1;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-purple1 text-xl">★</span>
        ))}
        {halfStar && <span className="text-purple1 text-xl">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={i} className="text-gray-300 text-xl">★</span>
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

      <div ref={marqueeRef} className="w-full h-[375px] overflow-x-hidden flex justify-start items-center gap-8 animate-marquee3 ml-8">
        {ExperienceInfo.map((experience, index) => (
          <a href={experience.link} target="_blank" rel="noopener noreferrer" key={index} className="mb-4 p-4 rounded-2xl border border-divider1 border-solid cursor-default">
            <div>{getStarRating(parseInt(experience.ranking))}</div>
            <h6 className="text-lg font-medium mt-4">{experience.title}</h6>
            <p className="text-gray-600">{experience.role}</p>
            <p className="text-secondary1">{experience.company}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ExperienceWork;