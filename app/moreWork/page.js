'use client'
import { useRouter } from "next/navigation"
import { WorkData } from '@/app/data/PreviousWorkInfo';
import React, { useRef, useState, useEffect } from 'react';

export default function PreviousWork (){
    const [previousWork, setPreviousWork] = useState([]);
    const marqueeRef = useRef(null);
    const router = useRouter();
    useEffect(() => {
      setPreviousWork(WorkData);
    }, []);

    return(
        <div className="w-full h-full flex flex-col justify-start items-center px-6 gap-12">
            <div className="flex justify-between items-center w-full h-20 bg-white/50 backdrop-blur-md top-0 left-0 fixed  z-50 px-8">
                <div className="w-1/3 h-full flex justify-start items-center "><button onClick={() => router.back()}  className=" rounded-full p-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4V5.4C20 8.76031 20 10.4405 19.346 11.7239C18.7708 12.8529 17.8529 13.7708 16.7239 14.346C15.4405 15 13.7603 15 10.4 15H4M4 15L9 10M4 15L9 20" stroke="purple" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button></div>
                <div className="w-1/3 h-full flex justify-center items-center"><h1 className="text-xl font-semibold text-purple3">Job Experiences</h1></div>
                <div className="w-1/3 h-full"></div>
            </div>
            <div className="flex-justify-center items-start py-4 mt-20">
                <div className="w-full h-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 gap-y-12">
                {previousWork.map((item, index) => (
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
    )

}