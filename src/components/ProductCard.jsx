import React, { useEffect, useState } from 'react';
import { like, likeFilled } from '../constants/icons';
import { Link } from 'react-router-dom';
import { TIMBU_IMAGE_URL } from '../lib/api';

const ProductCard = ({ data }) => {
  const [isLiked, setIsLiked] = useState(data.isLiked);
  const [price, setPrice] = useState(0);
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    if (data?.current_price && data.current_price.length > 0) {
      const dcPrice = data.current_price[0]?.USD?.[1] || 0;
      const currentPrice = data.current_price[0]?.USD?.[0] || 0;
      setDiscountPrice(dcPrice);
      setPrice(currentPrice);
    }
  }, [data]);

  const tagText = () => {
    if (discountPrice > 0 && price > 0) {
      const discountDiff = price - discountPrice;
      const discountPercent = (discountDiff / price) * 100;
      return `${Math.round(discountPercent)}%`;
    }
    return null;
  };

  const tagColor = () => {
    if (discountPrice > 0) {
      return '#BE3838';
    }
    return null;
  };

  return (
    <div className="aspect-square w-full bg-white relative shadow-md flex-col px-2 py-4 product-card h-[335px]">
      <Link to={`/products/${data?.url_slug}`}>
        <img
          className="relative z-10 w-full aspect-square object-contain"
          src={`${TIMBU_IMAGE_URL}${data?.photos?.[0]?.url}`}
          alt={data?.name}
        />
      </Link>
      <div className="relative z-10 flex flex-col">
        <div className="flex justify-between">
          <p className="text-[#5F5F60] text-sm leading-[23.27px] secondary-font font-normal">
            {data?.name}
          </p>
          <p className="secondary-font leading-[27px] font-bold text-base text-[#3D3D3D]">
            {price ? `$${price.toFixed(2)}` : ''}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6A96CA] cursor-pointer text-xs font-normal leading-[17.34px] tertiary-font">
            Read more...
          </span>
          {discountPrice ? (
            <p className="font-bold leading-5 text-xs secondary-font text-[#C1C1C1] discount relative">
              <span className="absolute h-[0.5px] w-[71px] top-[50%] translate-y-1/2 right-0 bg-[#A1A1A1]"></span>
              {`$${discountPrice.toFixed(2)}`}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="absolute w-full h-[216px] bg-[#f4f4f4] top-0 left-0 z-0">
        {' '}
      </div>
      <img
        onClick={() => setIsLiked(!isLiked)}
        className="cursor-pointer z-20 absolute top-[185px] w-6 h-6 right-2"
        src={isLiked ? likeFilled : like}
        alt="like-button"
      />
      {tagText() && (
        <div
          className={`absolute top-[8px] left-[6px] z-10 uppercase secondary-font w-[54.91px] h-[17.82px] flex justify-center items-center font-medium text-[10px] leading-[16.62px] text-white`}
          style={{ backgroundColor: tagColor() }}
        >
          {tagText()}
        </div>
      )}
    </div>
  );
};

export default ProductCard;