import React from "react";
import image1 from "./../assets/images/computadora.png";
import image2 from "./../assets/images/alienware2.png";
import image3 from "./../assets/images/impresora.png";
// {'w-[1442px]'}
const Featured = () => {
  return (
    <section className="mt-10 bg-[#F3F3F3] h-[328px] ">
      <div className="xl:max-w-[1080px] 2xl:max-w-[1240px] mx-auto">
        <h3 className="uppercase flex justify-center p-4 font-normal text-[30px] leading-[34px] text-[4E4E4F] ">
          Featured Products
        </h3>
      </div>

      <div className="flex justify-center p-0 gap-[15px] mt-[20px] mb-[12px] mx-10">
        <div className="w-[413px] h-[213px] relative">
          <img
            src={image1}
            alt=""
            className="absolute top-[26px] z-20 left-0 w-[256px] h-[187px]"
          />
          <div className="flex flex-col justify-center pt-[34px] pr-[14px] pb-[14px] pl-[143px] items-end gap-[26px] w-[377px] h-[177px] bg-[#D9D9D9] left-[36px] top-0 absolute">
            <h1 className="uppercase h-[23px] w-[220px] font-bold text-[20px] leading-[23px] text-[#4E4E4F]">
              The Best Computer
            </h1>
            <div className="flex flex-col gap-[22px] items-end w-[182px] h-[80px] p-0 ">
              <div className="flex flex-col gap-1 items-end text-right">
                <h2 className="uppercase w-[136px] h-[15px] font-bold text-[13px] leading-[15px] text-[#4E4E4F] ">
                  DELL LATITUDE R356
                </h2>
                <p className="font-[400px] w-[182px] h-[15px] text-[13px] leading-[15px] text-[#4E4E4F] flex items-end text-right">
                  The best computer price quality
                </p>
              </div>

              <button className="bg-[#4E4E4F] flex flex-row justify-center text-[#E0E5ED] items-center py-[5] px-[30px] w-[100px] h-[24px] gap-[10px]">
                Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-[413px] h-[213px] relative">
          <img
            src={image2}
            alt=""
            className="absolute top-[26px] z-20 left-0 w-[256px] h-[187px]"
          />
          <div className="flex flex-col justify-center pt-[34px] pr-[14px] pb-[14px] pl-[143px] items-end gap-[26px] w-[377px] h-[177px] bg-[#052E70] text-[#FFFFFF] left-[36px] top-0 absolute">
            <h1 className="uppercase h-[23px] w-[275px] font-bold text-[20px] leading-[23px] ">
              Your Business Solution
            </h1>
            <div className="flex flex-col gap-[22px] items-end w-[182px] h-[80px] p-0 ">
              <div className="flex flex-col items-end text-right">
                <h2 className="uppercase w-[213px] h-[23px] font-bold text-[13px] leading-[15px]  ">
                  MultiMedia Media
                </h2>
                <p className="font-[400px] w-[228px] h-[15px] text-[13px] leading-[15px]">
                  A better way to display your image
                </p>
              </div>

              <button className="bg-[#4E4E4F] flex flex-row justify-center text-[#E0E5ED] items-center py-[5] px-[30px] w-[100px] h-[24px] gap-[10px]">
                Details
              </button>
            </div>
          </div>
        </div>

        <div className="w-[413px] h-[213px] relative">
          <img
            src={image3}
            alt=""
            className="absolute top-[26px] z-20 left-0 w-[256px] h-[187px]"
          />
          <div className="flex flex-col justify-center pt-[34px] pr-[14px] pb-[14px] pl-[143px] items-end gap-[26px] w-[377px] h-[177px] bg-[#D9D9D9] left-[36px] top-0 absolute">
            <h1 className="uppercase h-[23px] w-[220px] font-bold text-[20px] leading-[23px] text-[#4E4E4F]">
              High Perfomance
            </h1>
            <div className="flex flex-col gap-[22px] items-end w-[182px] h-[80px] p-0 ">
              <div className="flex flex-col gap-1 items-end text-right">
                <h2 className="uppercase w-[136px] h-[15px] font-bold text-[13px] leading-[15px] text-[#4E4E4F] ">
                  HP Print XL
                </h2>
                <p className="font-[400px] w-[182px] h-[15px] text-[13px] leading-[15px] text-[#4E4E4F] ">
                  Ultra fast and reliable
                </p>
              </div>

              <button className="bg-[#4E4E4F] flex flex-row justify-center text-[#E0E5ED] items-center py-[5] px-[30px] w-[100px] h-[24px] gap-[10px]">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;