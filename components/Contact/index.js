'use client'
import React from 'react';
const ContactInfo = () => {
  const SocialLink = [
    {
      image: '/socialIcon1.svg',
      link: ''
    },
    {
      image: '/socialIcon2.svg',
      link: ''
    },
    {
      image: '/socialIcon3.svg',
      link: ''
    },
    {
      image: '/socialIcon4.svg',
      link: ''
    }
  ]
  return (
    <div className='w-full h-[620px]  px-12'>
            <div className='w-full h-8 flex items-start flex-col justify-center gap-2'>
    <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
    <h5 className='text-divider2 text-sm font-medium'>Contact Info</h5>
    </div>
    <div className='rounded-2xl border border-divider1 border-solid w-full h-[600px] mt-8 flex justify-center items-center'> 
      <div className='w-1/2 h-full bg-[url("/sakuraTreeAndCastle.png")] bg-left bg-cover rounded-2xl'></div>

      <div className='w-1/2 h-full flex justify-between items-center flex-col px-12 pt-20 gap-16'>
      <div className='h-auto w-full gap-16'>
        <div className='flex flex-col justify-start items-start ml-12 gap-3'>
          <h1 className='text-4xl text-purple3 font-regular'>Lets get in touch</h1>
          <h2 className='text-lg text-divider2 font-regular'>Any jobs or questions for me?
          Just write me a message.</h2>
        </div>
        <div className='gap-6 mt-16 ml-12'>
          <div className='flex justify-start items-center gap-8'>
            <img src="/Mail.svg"></img>
            <h2 className='text-2xl text-divider2'>danieru1115@proton.me</h2>
          </div>
          <div className='flex justify-start items-center gap-8'>
            <img src="/Phone.svg"></img>
            <h2 className='text-2xl text-divider2'>+976 8843 2340</h2>
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex justify-center items-start flex-col gap-2 mb-12'>
    <div className='w-full h-[1.5px] bg-divider1 rounded-sm'></div>
    <h5 className='text-divider1 text-xs font-medium'>Follow me on</h5>
    <div className='flex justify-center items-start gap-8'>
      {SocialLink.map((sociallink, index) => (
        <a href={sociallink.link} key={index}><img src={sociallink.image}></img></a>
      ))}
    </div>

    </div>
      </div>
    </div>
    </div>
  );
};

export default ContactInfo;
