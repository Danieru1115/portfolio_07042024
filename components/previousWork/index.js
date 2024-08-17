'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { WorkData } from '@/app/data/PreviousWorkInfo';
const PreviousWork = () => {

  const [previousWork, setPreviousWork] = useState([]);
  const marqueeRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    setPreviousWork(WorkData);
  }, []);
  
    return (
      <div className='w-full h-[375px] px-4 md:px-12 mb-8'>
        <div className='w-full h-10 flex justify-center items-start flex-col gap-2'>
          <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
          <div className='flex justify-between items-center w-full px-2'>
          <h5 className='text-divider2 text-sm font-medium'>Tech Related Work</h5>
          <a onClick={() => router.push('/moreWork')} className='text-divider2 text-sm font-medium hover:font-semibold hover:text-purple1 cursor-pointer transition-all'>More</a>        
          </div>
        </div>
        <div className='w-full h-[375px] overflow-x-hidden mt-4 '>
          <div ref={marqueeRef} className={'w-max gap-8 flex ml-4'}>
            {previousWork.slice(0, 5).map((item, index) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className='group w-80 h-auto rounded-2xl p-4 border border-solid border-border1 cursor-pointer' key={index}>
                <img
                  src={item.image}
                  alt={item.title}
                  className='group-hover:scale-105 transition-all w-full h-[247px] rounded-2xl object-cover'
                />
                <div className='gap-2 mt-4'>
                  <h2 className='text-secondary1 transition-all font-normal text-base' key={item.title}>
                    {item.company}
                  </h2>
                  <h2 className='text-black3 transition-all text-base font-semibold' key={item.roles}>
                    {item.title}
                  </h2>
                  <h2 className='text-secondary2 transition-all font-normal text-sm' key={item.company}>
                    {item.roles}
                  </h2>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default PreviousWork;
