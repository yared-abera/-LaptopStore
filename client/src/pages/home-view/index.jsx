import BrandNewLap from '@/components/home/BrandNewLap'
import Slider from '@/components/home/Slider'
import LazySection from '@/components/Lazy/LazySection'
import GamingLaptops from '@/components/home/GamingLaptops'
import React, { useEffect } from 'react'
 
 

const Home = () => {
 
   window.history.replaceState({},'','/home');
  
   useEffect(() => {
    document.title = " Home| biruk's laptop shop";
    window.scrollTo(0, 0);
    
  }, []);
    
  return (
      <div className="space-y-10 px-4 py-6">
      {/* Always visible */}
       < Slider />
      {/* Lazy Loaded Sections */}
       <LazySection sectionPath={"brand-new-laptop"}>
        <BrandNewLap />
      </LazySection>

      <LazySection sectionPath={"gaming-laptops"}>
        <GamingLaptops />
      </LazySection>

       
    </div>
  )
}

export default Home
