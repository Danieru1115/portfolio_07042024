'use client'
import React from 'react';
const Pay = () => {
  const scrollClick = (index) => {
    if (typeof window !== 'undefined'){
      window.scrollTo({top:0, behavior: "smooth"})
    }
  }
  const PaymentInfo = [
    {
      title: 'Software Development',
      price: '399',
      content: [
        'Mobile App Development',
        'Windows App Development',
        'Java Development'
      ]
    },
    {
      title: 'Website Development',
      price: '199',
      content: [
        'UI/UX Design',
        'Dynamic Website',
        'Static Website'
      ]
    },
    {
      title: 'Art Commission',
      price: '99',
      content: [
        'UI/UX Design',
        '2D Illustration',
        '3D Sculting'
      ]
    }
  ]

  return (
    <div className='w-full h-auto flex justify-center items-start flex-col'>
    <div className='w-full h-8 flex justify-center items-start flex-col px-2 lg:px-12 gap-2'>
    <div className='w-full h-0.5 bg-divider1 rounded-sm'></div>
    <h5 className='text-divider2 text-sm font-medium'>Pricing</h5>
    </div>
    <div className="w-full h-110 md:h-[100rem] lg:h-[50rem] flex justify-center items-center flex-col lg:flex-row gap-16 px-12 lg:px-16 py-12">
      {PaymentInfo.map((item, index) => (
        <div key={index} className=' w-full lg:w-1/3 h-[600px] cursor-pointer group rounded-3xl hover:w-[24rem] lg:hover:w-[640px] transition-all duration-500 p-8 flex justify-center items-center flex-col border-solid border-border1 border'>
          <div className='w-full h-3/4 flex justify-start items-start flex-col gap-8 mt-4'>
            <div className=''>
              <h2 className='text-2xl font-semibold text-purple2'>{item.title}</h2>
            </div>
            <div className=''>
              <h3 className=' text-base text-black3'>starting from</h3>
              <h1 className=' text-6xl text-black4 font-semibold'>${item.price}</h1>
            </div>
            <div className=''>
              {item.content.map((content, contentIndex) => (
                <h3 className='text-secondary1 mb-3' key={contentIndex}> • {content}</h3>
              ))}
            </div>
          </div>
          <div className='w-full h-1/4 flex justify-center items-center'>
          <button onClick={scrollClick} className='flex group-hover:bg-purple2 group-hover:text-white  justify-center items-center w-full h-10 bg-white border border-solid border-purple1 p-3 rounded-lg text-black3'>More Info</button>
          </div>
        </div>
      ))}
    </div>
  </div>
    );
};

export default Pay;
