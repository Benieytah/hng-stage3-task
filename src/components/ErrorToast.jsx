import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ErrorToast = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed z-50 bottom-5 right-5 bg-white min-w-[277px] min-h-[181px] rounded-[4px] border border-[#A9A9A9] shadow-lg p-[28px]"
    >
      <p className="text-[40px] text-center font-bold">😭😢</p>
      <p className="secondary-font font-normal text-center text-base leading-[22px] text-[#4E4E4F] mt-3">
        Cart is empty !!
      </p>
      <Link
        to={'/'}
        className="w-full py-[4px] px-[32px] min-h-[33px] bg-[#052E70] secondary-font text-[18px] leading-[25px] text-white flex justify-center items-center rounded-[4px] mt-3"
      >
        Continue shopping
      </Link>
    </motion.div>
  );
};

export default ErrorToast;
