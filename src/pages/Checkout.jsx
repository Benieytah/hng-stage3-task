import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { Contact } from '../sections';
import { useState } from 'react';
import { arrowBack, successIcon } from '../constants/icons';

const Checkout = () => {
  const { setShowModal, setCart, cartItems, setCartItems, totalPrice } =
    useAppContext();

  const handleCheckout = () => {
    setCart([]);
    setCartItems(0);
    setShowModal(true);
  }

  return (
    <div className="pt-[44px]">
      <div className="max-w-[1240px] mx-auto">
        <Link to="/cart">
          <img className="w-[40px] h-[40px]" src={arrowBack} alt="back-arrow" />
        </Link>
        <div className="flex gap-10 mt-11">
          <div className="flex flex-col gap-6 w-full max-w-[840px]">
            <div className="rounded-[8px] overflow-hidden shadow-lg bg-[#F3F3F3]">
              <div className="py-[14.5px] px-[20px] flex gap-[10px] border-b-[0.3px] border-[#A9A9A9]">
                <img
                  className="w-[24px] h-[24px]"
                  src={successIcon}
                  alt="success-icon"
                />
                <p className="uppercase secondary-font text-[18px] leading-[25px] text-[#4e4e4f] font-bold">
                  1. Customer Address
                </p>
              </div>
              <div className="px-[20px] pt-[8px] pb-[20px]">
                <p className="secondary-font font-normal text-[14px] leading-[20px] text-[#4e4e4f]">
                  Flap Jack
                </p>
                <p className="secondary-font font-normal text-[12px] leading-[20px] text-[#4e4e4f]">
                  Imagination world. Manchester Kentucky 3945 | +234 12356312
                </p>
              </div>
            </div>

            <div className="rounded-[8px] overflow-hidden shadow-lg bg-[#F3F3F3]">
              <div className="py-[14.5px] px-[20px] flex gap-[10px] border-b-[0.3px] border-[#A9A9A9]">
                <img
                  className="w-[24px] h-[24px]"
                  src={successIcon}
                  alt="success-icon"
                />
                <p className="uppercase secondary-font text-[18px] leading-[25px] text-[#4e4e4f] font-bold">
                  2. Delivery Address
                </p>
              </div>
              <div className="px-[20px] pt-[8px] pb-[20px]">
                <p className="secondary-font font-normal text-[14px] leading-[20px] text-[#4e4e4f]">
                  Door delivery
                </p>
                <p className="secondary-font font-normal text-[12px] leading-[20px] text-[#4e4e4f]">
                  Between 8 July and 10 July
                </p>
              </div>
            </div>

            <div className="rounded-[8px] overflow-hidden shadow-lg bg-[#F3F3F3]">
              <div className="py-[14.5px] px-[20px] flex gap-[10px] border-b-[0.3px] border-[#A9A9A9]">
                <img
                  className="w-[24px] h-[24px]"
                  src={successIcon}
                  alt="success-icon"
                />
                <p className="uppercase secondary-font text-[18px] leading-[25px] text-[#4e4e4f] font-bold">
                  3. Payment Method
                </p>
              </div>
              <div className="px-[20px] pt-[8px] pb-[20px]">
                <p className="secondary-font font-normal text-[14px] leading-[20px] text-[#4e4e4f]">
                  Pay with cash on delivery
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#F3F3F3] h-[250px] rounded-[8px] shadow-md min-w-[360px] px-[10px] py-[20px]">
            <div className="border-b pb-[8px] px-[10px] flex items-center justify-between">
              <p className="secondary-font text-[18px] leading-[25px] text-[#4e4e4f] font-bold">
                Cart summary
              </p>
              <p className="secondary-font text-[18px] leading-[25px] text-[#4e4e4f] font-bold">
                {cartItems} Item(s)
              </p>
            </div>
            <div className="border-b pb-[8px] px-[10px] pt-[12px] flex items-center justify-between">
              <p className="secondary-font text-[16px] leading-[22px] text-[#4e4e4f] font-normal">
                Subtotal
              </p>
              <p className="secondary-font text-[16px] leading-[22px] text-[#4e4e4f] font-normal">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="border-b pb-[8px] px-[10px] pt-[12px] flex items-center justify-between">
              <p className="secondary-font text-[18px] leading-[25px] text-[#4e4e4f] font-bold">
                Total
              </p>
              <p className="secondary-font text-[18px] leading-[25px] text-[#4e4e4f] font-bold">
                ${totalPrice.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-row-reverse mt-[2px]">
              <p className="text-[#052E70] font-normal text-[12px] leading-[20px] secondary-font">
                Excluding delivery charges
              </p>
            </div>
            <button onClick={handleCheckout} className="w-full min-h-[40px] py-[11px] px-[100px] bg-[#052E70] mt-[16px] rounded-[3px] text-white font-bold text-[16px] leading-[18px] overflow-hidden">
              Checkout
            </button>
            <hr className="h-[0.3px] w-full bg-[#A9A9A9] mt-[12px]" />
          </div>
        </div>
      </div>
      <Contact
        otherStyles={
          'border border-t-[140px] border-[#f3f3f3] py-[55px] mt-[106px]'
        }
      />
    </div>
  );
};

export default Checkout;
