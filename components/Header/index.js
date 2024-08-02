import React, { useState, useEffect } from 'react';
const Header = () => {
  const navigationData = [
    {
      title: 'Pricing',
      coordinates: 100,
    },
    {
      title: 'Previous Work',
      coordinates: 200,
    },
    {
      title: 'Experience',
      coordinates: 300,
    },
    {
      title: 'Contact',
      coordinates: 400,
    },
  ]
  const [scrolled, setScrolled] = useState(false);
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const scrollClick = (index) => {
    if (typeof window !== 'undefined'){
      const targetCoordinate = navigationData[index].coordinates;
      window.scrollTo({top:targetCoordinate, behavior: "smooth"})
    }
  }

  return (
    <div className={`z-50 w-full h-24 bg-white py-6 px-8 flex justify-start items-center gap-6 rounded-b-3xl shadow-header hover:shadow-headerHover transition-all fixed ${scrolled ? 'top-0' : ''}`}>
      <div className='w-12 h-full flex justify-center items-center' onClick={scrollToTop}>
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="26" width="36.77" height="36.77" rx="6.118" transform="rotate(-45 0 26)" fill="url(#3sb1batm1a)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M19.478 11.337c-.846 0-1.532.686-1.532 1.533v2.066l-3.752-.928a1.532 1.532 0 1 0-.736 2.974l4.488 1.11v14.02l-5.55.76a1.532 1.532 0 1 0 .415 3.036l5.135-.703v3.863a1.532 1.532 0 0 0 3.064 0v-4.282l11.031-1.51v1.349a1.532 1.532 0 0 0 3.064 0v-1.77l3.662-.5a1.532 1.532 0 0 0-.415-3.036l-3.247.444v-7.425l3.785.936a1.532 1.532 0 1 0 .736-2.975l-4.52-1.118v-1.715a1.532 1.532 0 1 0-3.065 0v.957l-11.03-2.729V12.87c0-.846-.687-1.532-1.533-1.532zm12.563 18.846v-8.604l-11.03-2.728v12.842l11.03-1.51z" fill="#fff"/>
    <defs>
        <linearGradient id="3sb1batm1a" x1="2.085" y1="27.051" x2="22.506" y2="68.581" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CB76FF"/>
            <stop offset=".667" stopColor="#9421DC"/>
        </linearGradient>
    </defs>
</svg>
      </div>
      <div className='w-full h-full bg-white flex items-center justify-end gap-6 p-2'>
      {navigationData.map((item, index) => (
          <button className='text-black3 hover:text-purple1 transition-all font-normal' key={item.title} onClick={() => scrollClick(index)}>
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
