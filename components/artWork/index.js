'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
const ArtWork = () => {
    const ArtWorkInfo = [
        {
            image : 'https://cdnb.artstation.com/p/assets/images/images/077/622/141/large/daniel-bekhbat-castle-completed.jpg?1719925761',
            title : 'Sakura tree and Castle',
            link : 'https://www.artstation.com/artwork/vDnxZA',
            type : 'Illustration'
        },
        {
            image : 'https://cdnb.artstation.com/p/assets/images/images/077/622/141/large/daniel-bekhbat-castle-completed.jpg?1719925761',
            title : 'Sakura tree and Cstle',
            link : 'https://www.artstation.com/artwork/vDnxZA',
            type : 'Illustration'
        },
        {
            image : 'https://cdnb.artstation.com/p/assets/images/images/077/622/141/large/daniel-bekhbat-castle-completed.jpg?1719925761',
            title : 'Sakura tree and Cstle',
            link : 'https://www.artstation.com/artwork/vDnxZA',
            type : 'Illustration'
        }
    ]
    const marqueeRef = useRef(null);
    return (
      <div className='w-full h-[375px] px-12 mb-8'>
        <div className='w-full h-8 flex justify-center items-start flex-col gap-2'>
          <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
          <h5 className='text-divider2 text-sm font-medium'>Art Related Work</h5>
        </div>
        <div className='w-full h-[375px] overflow-x-hidden mt-4'>
          <div ref={marqueeRef} className={'w-max gap-8 flex animate-marquee2'}>
            {ArtWorkInfo.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className=' group w-80 h-auto bg-white rounded-2xl border border-solid border-divider1 p-4 cursor-pointer'>
                    <img className=' group-hover:scale-105 w-full h-3/4 rounded-lg transition-all' src={item.image} alt={item.title}></img>
                    <h2 className='text-secondary1 transition-all font-normal text-base mt-4'>{item.type}</h2>
                    <h1 className=' text-black3 text-normal font-semibold'>{item.title}</h1>
                </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default ArtWork;
