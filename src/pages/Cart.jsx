import { useAppContext } from '../context/AppContext';
import { TIMBU_IMAGE_URL } from '../lib/api';
import { Contact } from '../sections';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart, cartItems, setCartItems, totalPrice, setshowErrToast } = useAppContext();
  const navigate = useNavigate();

  const increment = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCartItems(cartItems + 1);
  };

  const decrement = (id) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.product.id === id) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
    setCartItems(cartItems - 1);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== id));
    const itemToRemove = cart.find(item => item.product.id === id);
      if (itemToRemove) {
        setCartItems(prevCartItems => prevCartItems - itemToRemove.quantity);
      }
  };

  const handleOrder = () => {
    if (!cart.length) {
      setshowErrToast(true);
    } else {
      navigate('/checkout');
    }
  }

  console.log(cart);

  return (
    <div className="pt-[44px]">
      <div className="max-w-[1240px] mx-auto">
        <h1 className="text-[30px] leading-[34px] font-normal text-[#4E4E4F]">
          Cart
        </h1>
        <div className="flex gap-10 mt-11">
          <div className="rounded-[8px] overflow-hidden w-full max-w-[840px]">
            <div className="bg-[#65717F] flex items-center w-full px-[28px] py-[8px] justify-between">
              <div className="w-[48.5%] secondary-font font-bold text-base leading-[27px] text-white">
                Item details
              </div>
              <div className="secondary-font font-bold text-base leading-[27px] text-white">
                Quantity
              </div>
              <div className="secondary-font font-bold text-base leading-[27px] text-white">
                Price
              </div>
            </div>
            <div className="bg-[#F3F3F3] px-[28px] pt-[20px] pb-[25px]">
              {cart?.length > 0 ? (
                cart.map((item, index) => (
                  <div
                    className="flex justify-between product-checkout-bar pt-[20px]"
                    key={index}
                  >
                    <div className="flex w-[48.5%] gap-[25px]">
                      <img
                        className="w-[156px] aspect-square object-contain"
                        // src={item?.product?.sourceUrl}
                        src={`${TIMBU_IMAGE_URL}${item?.product?.photos[0]?.url}`}
                        alt={item?.product?.nname}
                      />
                      <div className="flex flex-col">
                        <p className="font-medium text-[18px] leading-[25px] secondary-font text-[#4e4e4f]">
                          {item?.product?.name}
                        </p>
                        <p
                          onClick={() => removeFromCart(item?.product?.id)}
                          className="cursor-pointer uppercase font-medium leading-[25px] text-[18px] text-[#ff2a2a] secondary-font mt-[64.5px]"
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex h-[34px] rounded-[3px] overflow-hidden shadow-lg"
                      style={{
                        boxShadow: '0px 1px 5px -1px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      <button
                        onClick={() => decrement(item?.product?.id)}
                        className="bg-[#CDD5E2] min-w-[46px] flex items-center justify-center"
                      >
                        &#8722;
                      </button>
                      <div className="bg-white font-normal text-[16px] leading-[18px] text-[#4E4E4F] min-w-[57px] flex items-center justify-center text-[4E4E4F] py-[8px] px-[24px]">
                        {item?.quantity}
                      </div>
                      <button
                        onClick={() => increment(item?.product?.id)}
                        className="bg-[#2F5188] text-white min-w-[46px] flex items-center justify-center"
                      >
                        &#43;
                      </button>
                    </div>
                    <div>
                      <p className="font-bold text-[28px] leading-[32px] text-[#4e4e4f]">
                        $
                        {item?.product?.current_price[0]?.USD?.[0].toFixed(2) ||
                          item?.product?.current_price[0]?.NGN?.[0].toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="font-bold text-2xl">No products in cart</p>
              )}
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
            <button
              onClick={handleOrder}
              className="w-full min-h-[40px] py-[11px] px-[100px] bg-[#052E70] mt-[16px] rounded-[3px] text-white font-bold text-[16px] leading-[18px] overflow-hidden"
            >
              Confirm order
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

export default Cart;
