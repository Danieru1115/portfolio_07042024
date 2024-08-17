'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArtWorkData } from '@/app/data/PreviousArtWorkInfo';

const ArtWork = () => {
  const router = useRouter();
    const [artWorkInfo, setArtWorkInfo] = useState([]);
    const marqueeRef = useRef(null);
    useEffect(() => {
      setArtWorkInfo(ArtWorkData);
    }, []);
  
    return (
      <div className='w-full h-[375px] px-4 md:px-12 mb-8'>
        <div className='w-full h-8 flex justify-center items-start flex-col gap-2'>
        <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
          <div className='flex justify-between items-center w-full px-2'>
          <h5 className='text-divider2 text-sm font-medium'>Art Related Work</h5>
          <a onClick={() => router.push('/moreArtwork')} className='text-divider2 text-sm font-medium hover:font-semibold hover:text-purple1 cursor-pointer transition-all'>More</a>        
          </div>
        </div>
        <div className='w-full h-[375px] overflow-x-hidden mt-4 px-4'>
          <div ref={marqueeRef} className={'w-max gap-8 flex'}>
            {artWorkInfo.slice(0, 5).map((item, index) => (
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
