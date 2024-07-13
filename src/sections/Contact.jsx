import React from 'react';
import { envelope } from '../constants/icons';

const Contact = ({ bgcolor, otherStyles }) => {
  return (
    <section className={`min-h-[302.55px] ${otherStyles} flex justify-center items-center section-contact`} style={{ background: bgcolor}}>
      <div className="max-w-[771px] flex flex-col items-center justify-center">
        <img className="" src={envelope} alt="mail-icon" />
        <h4 className="tertiary-font text-[#4E4E4F] leading-[28px] text-[20.7px] font-extrabold uppercase mt-2">Do you want to contact an agent?</h4>
        <p className="text-[20.7px] leading-[30px] font-normal text-center murecho-font text-[#4E4E4F] mt-1">click to fill out the form</p>
        <div className="mt-5">
          <button className="min-w-[137.62px] h-[45.59px] rounded-[32.33px] border border-[#4E4E4F] secondary-font font-normal text-[16.5px] leading-[28px] text-[#4E4E4F] hover:bg-[#4E4E4F] hover:text-[#EBECEF] transition-all duration-500">
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;