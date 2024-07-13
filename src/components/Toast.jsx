import { Link } from 'react-router-dom';
import { successIcon } from '../constants/icons';
import { motion } from 'framer-motion';

const Toast = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="fixed z-50 bottom-5 right-5 bg-white min-w-[277px] min-h-[181px] rounded-[4px] border border-[#A9A9A9] shadow-lg p-[28px]"
    >
      <div className="flex gap-[18.5px] items-center">
        <img
          className="w-[40px] h-[40px]"
          src={successIcon}
          alt="success-icon"
        />
        <h5 className="secondary-font font-medium text-[24px] leading-[34px] text-[#4E4E4F]">
          Success
        </h5>
      </div>
      <p className="secondary-font font-normal text-base leading-[22px] text-[#4E4E4F] mt-3">
        Added to cart <br />
        Thanks for shopping with us!
      </p>
      <Link
        to={'/cart'}
        className="w-full py-[4px] px-[32px] min-h-[33px] bg-[#052E70] secondary-font text-[18px] leading-[25px] text-white flex justify-center items-center rounded-[4px] mt-3"
      >
        Proceed to cart
      </Link>
    </motion.div>
  );
};

export default Toast;
