import { Link, useParams } from 'react-router-dom';
// import { products } from '../constants/data';
import { useEffect, useState } from 'react';
import Star from '../assets/icons/Star';
import { favorite } from '../constants/icons';
import { ProductCard } from '../components';
import { Contact } from '../sections';
import { useAppContext } from '../context/AppContext';
import { fetchSingleProduct, TIMBU_IMAGE_URL } from '../lib/api';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SingleProduct = () => {
  const {
    incrementCart,
    decrementCart,
    setCartItems,
    cartItems,
    setShowToast,
    addItemToCart,
    setIsLoading,
    products,
  } = useAppContext();
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const totalRatings = 5;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const singleProd = await fetchSingleProduct(productSlug);
        setProduct(singleProd);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setIsLoading(false);
      }
    };
    loadProducts();
  }, []);

  useEffect(() => {
    if (product) {
      const similarProd = products?.items?.filter(
        (p) => p.categories[0].name === product.categories[0].name && p.id !== product.id
      );
      setSimilarProducts(similarProd);
    }
  }, [product]);

  const increaseQuanity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    // decrementCart();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  console.log(product);

  const addToCart = (id, quantity) => {
    setCartItems(cartItems + quantity);
    setShowToast(true);
    addItemToCart(id, quantity);
  };

  return (
    <div className="pt-[44px] single-product">
      <div className="max-w-[1123px] mx-auto flex justify-between">
        <div className="w-[610px] bg-[#F3F3F3] h-[400px] flex items-center justify-center rounded-[10px] overflow-hidden">
          <Swiper
            loop={true}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
          >
            {product?.photos?.map((data, index) => (
              <SwiperSlide
                className="flex justify-center items-center"
                key={index}
              >
                <img
                  className="w-[400px] h-[360px] object-contain"
                  src={`${TIMBU_IMAGE_URL}${data?.url}`}
                  alt={data?.filename}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col items-start w-[413px]">
          <h2 className="text-[#052E70] font-bold text-[32px] leading-[37px]">
            {product?.name}
          </h2>
          <div className="flex items-center mt-[16px]">
            {[...Array(totalRatings).keys()].map((_, index) => (
              <div
                key={index}
                className={`w-[24px] h-[24px] flex items-center justify-center ${
                  index < 4 ? 'active' : ''
                } star`}
              >
                <Star />
              </div>
            ))}
            <p className="ml-2 text-sm">12 Reviews</p>
          </div>
          <p className="text-[#4E4E4F] leading-[25px] font-normal text-[18px] secondary-font mt-[12px]">
            Details
          </p>
          <div className="flex gap-[80px] mt-[12px]">
            <div className="flex flex-col gap-[8px]">
              <p className="secondary-font font-normal text-[14px] leading-[23px] text-[#4E4E4F]">
                Brand
              </p>
              <p className="secondary-font font-medium text-[14px] leading-[23px] text-[#4E4E4F]">
                GG Tech
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="secondary-font font-normal text-[14px] leading-[23px] text-[#4E4E4F]">
                Product code
              </p>
              <p className="secondary-font font-medium text-[14px] leading-[23px] text-[#4E4E4F]">
                879817231
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <p className="secondary-font font-normal text-[14px] leading-[23px] text-[#4E4E4F]">
                Colour
              </p>
              <p className="secondary-font font-medium text-[14px] leading-[23px] text-[#4E4E4F] capitalize">
                Gold
              </p>
            </div>
          </div>
          <hr className="h-[0.3px] w-full bg-[#A9A9A9] mt-[20px]" />
          <h3 className="font-bold text-[28px] leading-[32px] text-[#4E4E4F] mt-[20px]">
            ${product?.current_price?.toFixed(2)}
          </h3>
          <hr className="h-[0.3px] w-full bg-[#A9A9A9] mt-[24px]" />
          <div className="flex gap-[40px] mt-[22.17px]">
            <div
              className="flex h-[34px] rounded-[3px] overflow-hidden shadow-lg"
              style={{ boxShadow: '0px 1px 5px -1px rgba(0, 0, 0, 0.2)' }}
            >
              <button
                onClick={decreaseQuantity}
                className="bg-[#CDD5E2] min-w-[46px] flex items-center justify-center"
              >
                &#8722;
              </button>
              <div className="bg-white font-normal text-[16px] leading-[18px] text-[#4E4E4F] min-w-[57px] flex items-center justify-center text-[4E4E4F] py-[8px] px-[24px]">
                {quantity}
              </div>
              <button
                onClick={increaseQuanity}
                className="bg-[#2F5188] text-white min-w-[46px] flex items-center justify-center"
              >
                &#43;
              </button>
            </div>
          </div>
          <button
            onClick={() => addToCart(product?.id, quantity)}
            className="w-full min-h-[40px] py-[11px] px-[100px] bg-[#052E70] mt-[18.18px] rounded-[3px] text-white font-bold text-[16px] leading-[18px] overflow-hidden"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-[88px] border-y-[40px] border-[#F3F3F3] py-[41px]">
        <div className="max-w-[1123px] mx-auto">
          <h2 className="uppercase text-[#4E4E4F] text-[30px] leading-[34px] font-normal">
            About this item
          </h2>
          <div
            className="mt-[16px]"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          />
        </div>
      </div>
      
      <div className="border-b-[140px] border-[#F3F3F3] pb-[106px] pt-[40px]">
        <div className="max-w-[1123px] mx-auto">
          <h2 className="uppercase text-[#4E4E4F] text-[30px] leading-[34px] font-normal">
            Similar products
          </h2>
          {similarProducts?.length > 0 ? (
            <div className="mt-[32px] grid grid-cols-4 gap-x-5 gap-y-8">
              {similarProducts?.map((data) => (
                <ProductCard data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <p className="mt-3">
              Oopsies 😢 <br />
              There are no similar products
            </p>
          )}
        </div>
      </div>
      <Contact bgcolor="#FFF" />
    </div>
  );
};

export default SingleProduct;
