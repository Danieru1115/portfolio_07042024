'use client'
import React from 'react';
const ContactInfo = () => {
  const SocialLink = [
    {
      image: '/socialIcon1.svg',
      link: 'https://x.com/danieru1115'
    },
    {
      image: '/socialIcon2.svg',
      link: 'https://www.facebook.com/Daniel.Bekhbat/'
    },
    {
      image: '/socialIcon3.svg',
      link: 'https://www.instagram.com/hyperdanirio/'
    },
    {
      image: '/socialIcon4.svg',
      link: 'https://www.linkedin.com/in/daniel-bekhbat-31637126a/'
    }
  ]
  return (
    <div className='w-full h-[620px] px-4 md:px-8  lg:px-12  group '>
            <div className='w-auto h-8 flex items-start flex-col justify-center gap-2'>
    <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
    <h5 className='text-divider2 text-sm font-medium'>Contact Info</h5>
    </div>
 
    <div className='rounded-2xl border border-divider1 border-solid w-full h-[600px] mt-8 flex justify-center items-center absolute z-20 bg-white'> 
      <div className='w-1/2 h-full bg-[url("/sakuraTreeAndCastle.png")] bg-left bg-cover rounded-2xl hidden md:flex'></div>

      <div className=' w-full md:w-1/2 h-full flex justify-between items-center flex-col px-6 md:px-12 md:pt-20 pt-16 gap-8 md:gap-16 bg-white'>
      <div className='h-auto w-full gap-16'>
        <div className='flex flex-col justify-start items-start ml-12 gap-3'>
          <h1 className=' text-3xl lg:text-4xl text-purple3 font-regular'>Lets get in touch</h1>
          <h2 className=' text-base lg:text-lg text-divider2 font-regular'>Any jobs or questions for me?
          Just write me a message.</h2>
        </div>
        <div className='gap-6 mt-16 ml-2 md:ml-12'>
          <div className='flex justify-start items-center gap-8'>
            <img src="/Mail.svg"></img>
            <h2 className=' text-lg lg:text-2xl text-divider2'>danieru1115@proton.me</h2>
          </div>
          <div className='flex justify-start items-center gap-8'>
            <img src="/Phone.svg"></img>
            <h2 className=' text-lg lg:text-2xl text-divider2'>+976 8843 2340</h2>
          </div>
        </div>
      </div>
      <div className='w-full h-auto flex justify-center items-start flex-col gap-2 mb-12 px-4 md:px-0'>
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
      <div className='w-full h-[600px] bg-purple2 -z-10  group-hover:blur-lg mt-8 rounded-2xl transition-all'></div>
    </div>
  );
};

export default ContactInfo;
