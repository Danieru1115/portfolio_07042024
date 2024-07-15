'use client'
import React from 'react';

const Head = () => {
  return (
    <div className="w-full h-[48rem] flex justify-start items-center py-6">
      <div className='w-1/2 h-full flex flex-col justify-center items-center z-20'></div>
      <div className='w-1/2 h-full flex justify-end items-center z-0'>
      <img className='z-10 w-[360px] h-[360px] overflow-visible absolute right-80 mb-20' src='Daniel.png'></img>
      <img className='z-o' src='Union.svg'></img>
      </div>
    </div>
  );
};

export default Head;
