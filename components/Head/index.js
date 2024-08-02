'use client'
import React from 'react';

const Head = () => {
  return (
    <div className="w-full h-[48rem] flex justify-start items-center py-6 lg:mt-10 xl:mt-20">
      <div className='w-1/2 h-full flex flex-col justify-center items-start z-20 ml-20 gap-8'>
      <h1 className='text-purple1 text-4xl font-semibold'>Daniel Bekhbat Jose Alberto</h1>
      <h2 className='text-black3 w-[642px] text-lg font-normal '>Hi! I'm a passionate UI/UX Designer, Graphic Designer, and Web/Mobile Developer always looking to expand my knowledge. I'm driven to excel not only in the creative and technical aspects of digital design, but also in understanding the business side of things.</h2>
      </div>
      <div className='w-1/2 h-full flex justify-end items-center z-0'>
      <img className='z-10 w-[360px] h-[360px] overflow-visible absolute right-80 mb-20' src='Daniel.png'></img>
      <img className='z-o' src='Union.svg'></img>
      </div>
    </div>
  );
};
export default Head;
