'use client'
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
const PreviousWork = () => {
    const WorkInfo = [
        {
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS6Wi0iQbjfNfV1CYN6N8nefO5NO7kDCM_w&s',
            title : 'paimatrix.com',
            roles : 'FrontEnd, UX Design',
            company : 'Paimatrix',
            link : 'https://www.paimatrix.com'
        },
        {
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKvKJbJ5HFFYI1j_anXO-ETzBJi6He74Ldg&s',
            title : 'ismonagrotech.mn',
            roles : 'FrontEnd, UX Design',
            company : 'Ismonagrotech',
            link : 'https://www.ismonagrotech.mn'
        },
        {
            image : 'https://media.licdn.com/dms/image/C510BAQEPuZ7ymrbRgQ/company-logo_200_200/0/1630604619563?e=2147483647&v=beta&t=S34Vys-fgDZpBGGvDv1_v0gar0l_t1caXUbgUZm31eg',
            title : 'nhs.edu.mn',
            roles : 'FrontEnd, UX Design',
            company : 'Nest IT School',
            link : 'https://www.nhs.edu.mn'
        },
        {
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS6Wi0iQbjfNfV1CYN6N8nefO5NO7kDCM_w&s',
            title : 'paimatrix.com',
            roles : 'FrontEnd, UX Design',
            company : 'Paimatrix',
            link : 'https://www.paimatrix.com'
        },
        {
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS6Wi0iQbjfNfV1CYN6N8nefO5NO7kDCM_w&s',
            title : 'paimatrix.com',
            roles : 'FrontEnd, UX Design',
            company : 'Paimatrix',
            link : 'https://www.paimatrix.com'
        }
    ]
    const marqueeRef = useRef(null);
  
    return (
      <div className='w-full h-[375px] px-12 mb-8'>
        <div className='w-full h-8 flex justify-center items-start flex-col gap-2'>
          <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
          <h5 className='text-divider2 text-sm font-medium'>Tech Related Work</h5>
        </div>
        <div className='w-full h-[375px] overflow-x-hidden mt-4'>
          <div ref={marqueeRef} className={'w-max gap-8 flex animate-marquee'}>
            {WorkInfo.map((item, index) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className='group w-60 h-auto rounded-2xl p-4 border border-solid border-border1 cursor-pointer' key={index}>
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
