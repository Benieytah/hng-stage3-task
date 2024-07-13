import React from 'react';
import { Link } from 'react-router-dom';
import { heroCarousel } from '../constants/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <section className="section-hero mt-[-96px] pt-[96px] relative">
      <div className="xl:max-w-[1080px] 2xl:max-w-[1240px] mx-auto">
        <Swiper
          speed={1000}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
        >
          {heroCarousel.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex-col-reverse flex xl:flex-row items-center justify-center gap-[57px]">
                <div className="flex flex-col max-w-[371px]">
                  <h2 className="font-bold text-[#1A36F0] text-[40px] leading-[46px] uppercase">
                    NEW
                  </h2>
                  <h2 className="font-bold text-[64px] leading-[73.59px] text-[#65717F]">
                    {item.title}
                  </h2>
                  <p className="text-[#65717F] text-sm font-normal secondary-font">
                    {item.desc}
                  </p>
                  <div className="flex items-center justify-start mt-[29px]">
                    <Link
                      to={`/products/${item.slug}`}
                      className="min-w-full xl:min-w-[199px] min-h-[54px] rounded-[3px] hover:opacity-95 transition-all duration-500 bg-[#052E70] border border-transparent hover:border-[#1A36F0] hover:bg-transparent hover:text-[#1A36F0] p-[15.5px] flex items-center justify-center uppercase text-white font-bold text-xl leading-[23px]"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
                <img
                  className="w-[240px] h-[240px] xl:w-[500px] xl:h-[500px] 2xl:w-[590px] 2xl:h-[590px] object-contain float-anim"
                  src={item.heroImg}
                  alt={item.title}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-[#F3F3F3] w-full h-[520px] absolute top-0 left-0 z-[-1]"></div>
    </section>
  );
};

export default Hero;
