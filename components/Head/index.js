'use client'
import React from 'react';
import Image from 'next/image';

const Head = () => {
  return (
    <div className="w-full h-[30rem] lg:h-[48rem] flex md:flex-row flex-col justify-start items-center px-8 lg:px-0 lg:items-start md:items-center py-6 lg:mt-10 xl:mt-20">
      <div className=' w-full md:w-1/2 h-full flex flex-col justify-center items-start z-20 ml-1 lg:ml-20 gap-8'>
        <h1 className='text-purple1 text-2xl md:text-3xl xl:text-4xl font-semibold'>Daniel Bekhbat Jose Alberto</h1>
        <h2 className='text-black3 w-[20rem] md:w-[642px] text-sm md:text-base xl:text-lg font-normal '>Hi! Im a passionate UI/UX Designer, Graphic Designer, and Web/Mobile Developer always looking to expand my knowledge. Im driven to excel not only in the creative and technical aspects of digital design, but also in understanding the business side of things.</h2>
      </div>
      <div className='w-1/2 h-full justify-end items-center z-0 lg:flex hidden'>
        <Image
          src="/Daniel.png"
          alt="Daniel"
          width={360}
          height={360}
          className="z-10 object-contain overflow-visible absolute xl:right-80 lg:mb-20"
          priority
          style={{ maxWidth: '100%' }}
        />
        <img className='z-o hidden xl:flex' src='Union.svg'></img>
      </div>
    </div>
  );
};
export default Head;