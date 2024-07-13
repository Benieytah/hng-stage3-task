import React from 'react';
import { motion } from 'framer-motion';

const Modal = () => {
  return (
    <div className="bg-transparent backdrop-blur-sm fixed z-10 top-0 left-0 w-[100vw] h-[100vh]">
      <dialog className="w-[50vw] z-[999] h-[30vh] rounded-xl shadow-2xl flex flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="font-bold text-[40px] leading-[56px] text-[#4e4e4f]">
          🥳🎉
        </div>
        <div className="font-bold text-[40px] leading-[56px] text-[#4e4e4f]">
          Success
        </div>
        <div className="font-medium text-[30px] leading-[56px] text-[#4e4e4f]">
          Your checkout has been successful
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
