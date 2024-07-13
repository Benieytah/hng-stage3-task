import { search } from '../constants/icons';

const SearchInput = () => {
  return (
    <div className="hidden md:flex border rounded-[5px] overflow-hidden md:w-[250px] xl:w-[439px] h-[40px] border-[#052E70]">
      <input
        placeholder="Search GagGet"
        className="font-normal text-[14px] leading-[16px] text-[#052E70] placeholder-[#565959] px-[12px] py-[10px] w-full outline-none border-none focus:outline-none focus:border-none hover:outline-none hover:border-none"
        type="search"
      />
      <div className="bg-[#052E70] w-11 h-full flex items-center justify-center cursor-pointer">
        <img className="w-5 h-5" src={search} alt="search-icon" />
      </div>
    </div>
  );
}

export default SearchInput