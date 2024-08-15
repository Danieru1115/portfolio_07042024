'use client'
import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArtWorkData } from '@/app/data/PreviousArtWorkInfo';

export default function ArtWork (){
    const router = useRouter();
    const [artWorkInfo, setArtWorkInfo] = useState([]);
    const marqueeRef = useRef(null);
    useEffect(() => {
      setArtWorkInfo(ArtWorkData);
    }, []);

    return(
        <div className="w-full h-full flex flex-col justify-start items-center px-6 gap-12">
            <div className="flex justify-between items-center w-full h-20 bg-white/50 backdrop-blur-md top-0 left-0 fixed px-8">
                <div className="w-1/3 h-full flex justify-start items-center "><button onClick={() => router.back()}  className=" bg-white rounded-full p-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4V5.4C20 8.76031 20 10.4405 19.346 11.7239C18.7708 12.8529 17.8529 13.7708 16.7239 14.346C15.4405 15 13.7603 15 10.4 15H4M4 15L9 10M4 15L9 20" stroke="purple" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</button></div>
                <div className="w-1/3 h-full flex justify-center items-center"><h1 className="text-xl font-semibold text-purple3">Job Experiences</h1></div>
                <div className="w-1/3 h-full"></div>
            </div>
            <div className="flex-justify-center items-start py-4 mt-20">
                <div className="w-full h-auto grid grid-cols-5 gap-4 gap-y-12">
                {artWorkInfo.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className=' group w-80 h-auto bg-white rounded-2xl border border-solid border-divider1 p-4 cursor-pointer'>
                    <img className=' group-hover:scale-105 w-full h-3/4 rounded-lg transition-all' src={item.image} alt={item.title}></img>
                    <h2 className='text-secondary1 transition-all font-normal text-base mt-4'>{item.type}</h2>
                    <h1 className=' text-black3 text-normal font-semibold'>{item.title}</h1>
                </a>
            ))}
                </div>
            </div>
        </div>
    )

}