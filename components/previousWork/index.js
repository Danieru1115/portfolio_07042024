'use client'
import React from 'react';
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
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS6Wi0iQbjfNfV1CYN6N8nefO5NO7kDCM_w&s',
            title : 'ismonagrotech.mn',
            roles : 'FrontEnd, UX Design',
            company : 'Ismonagrotech',
            link : 'https://www.ismonagrotech.mn'
        },
        {
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWS6Wi0iQbjfNfV1CYN6N8nefO5NO7kDCM_w&s',
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
    return (
        <div className='w-full h-[375px] px-12 mb-8'>
          <div className='w-full h-8 flex justify-center items-start flex-col gap-2'>
            <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
            <h5 className='text-divider2 text-sm font-medium'>Previous Work</h5>
          </div>
          <div className='w-full h-[375px] flex justify-start items-center gap-12 mt-10 p-4'>
            {WorkInfo.map((item, index) => (
              <div href={item.link} className='w-60 h-auto rounded-2xl p-4 border border-solid border-border1 cursor-pointer' key={index}>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-[247px] rounded-2xl object-cover'
            />
            <div className='gap-2 mt-4'>
                <h2 className='text-secondary1 transition-all font-normal text-base' key={item.title}>
                  {item.title}
                </h2>
                <h2 className='text-black3 transition-all text-base font-semibold' key={item.roles}>
                  {item.roles}
                </h2>
                <h2 className='text-secondary2 transition-all font-normal text-sm' key={item.company}>
                  {item.company}
                </h2>
            </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default PreviousWork;
