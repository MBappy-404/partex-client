import React from 'react';
import "./Companies.css"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import logo1 from '../../../Assetes/Images/logo-03.png'
import logo2 from '../../../Assetes/Images/Co-logo2.png'
import logo3 from '../../../Assetes/Images/Co-logo3.png'
import logo5 from '../../../Assetes/Images/Co-logo5.png'
import logo6 from '../../../Assetes/Images/Co-logo6.png'
import logo7 from '../../../Assetes/Images/Co-logo7.png'
import logo8 from '../../../Assetes/Images/Co-logo8.png'
import logo9 from '../../../Assetes/Images/Co-logo10.png'

const Companies = () => {
   
     return (
          <div className='py-20 border-t-2'>

           <div className='text-center'>
           <h1 className='text-2xl  font-bold text-gray-800'>Our Partners</h1>
             <p className='text-base text-gray-400'>Our Partnerships</p>
           </div>
                <>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={2}
        grabCursor={false}
        
        modules={[Pagination]}
        className="mySwiper cursor-pointer px-10"
      > 
        <SwiperSlide> <img src={logo1} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={logo2} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={logo3} alt=""/> </SwiperSlide>
        <SwiperSlide> <img src={logo5} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={logo6} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={logo7} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={logo8} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={logo9} alt="" /> </SwiperSlide>
         
      
      </Swiper>
    </>
          </div>
     );
};

export default Companies;