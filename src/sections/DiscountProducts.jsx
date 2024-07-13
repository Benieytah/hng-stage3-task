import React, { useRef } from 'react';
import { products } from '../constants/data';
import { ProductCard } from '../components';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useAppContext } from '../context/AppContext';

const DiscountProducts = () => {
  const { products : data } = useAppContext();
  const discountedProducts = data?.items?.filter((product) => product.current_price[0]?.USD?.[1] > 0);

  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="section-discount relative mt-[30px]">
      <div className="xl:max-w-[1080px] 2xl:max-w-[1240px] mx-auto">
        <h3 className="uppercase text-[#4E4E4F] text-[30px] leading-[34.5px] font-bold">
          Products on Discount
        </h3>
        <div className='relative'>
          <Swiper
            ref={swiperRef}
            spaceBetween={20}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            slidesPerView={4}
            className="mt-[17px] pb-[5px] px-[2px]"
          >
            {discountedProducts?.map((data) => (
              <SwiperSlide key={data.id}>
                <ProductCard data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={goToPrevSlide}
            className="swiper-button-prev-custom"
          >
            <svg
              width="10"
              height="13"
              viewBox="0 0 10 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.16699 0.964111L1.03359 6.93191L8.86956 11.9417"
                stroke="#4E4E4F"
              />
            </svg>
          </button>
          <button
            onClick={goToNextSlide}
            className="swiper-button-next-custom"
          >
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.485352 11.8545L7.98535 6.35449L0.485352 0.854492" stroke="#4E4E4F"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscountProducts;
