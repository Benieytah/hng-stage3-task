import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const MenuLink = ({ url, iconUrl, title, hasDropDown, isCart, dropdown }) => {
  const { cartItems } = useAppContext();
  return (
    <Link
      to={url}
      className="flex gap-[10px] items-center cursor-pointer relative group"
    >
      <img className="h-6 w-6" src={iconUrl} alt={title} />
      <p className="hidden xl:block font-normal text-base leading-[18px] text-[#4E4E4F]">
        {title}
      </p>
      {hasDropDown ? (
        <span className="dropdown hidden xl:inline-block">
          <div className="drop-content opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out py-4 px-3 -bottom-[54px] -left-[93px] secondary-font flex text-[#4e4e4f] font-normal text-[16px] leading-[27px] items-center justify-center shadow-lg bg-white absolute min-w-[190px] min-h-[59px] rounded-[4px]">
            {dropdown.title} : {dropdown.value}
          </div>
        </span>
      ) : (
        ''
      )}
      {isCart ? (
        <span className="absolute w-4 h-4 text-[8px] text-white rounded-full top-0 left-0 bg-red-600 flex items-center justify-center">
          {cartItems}
        </span>
      ) : (
        ''
      )}
    </Link>
  );
};

export default MenuLink;
