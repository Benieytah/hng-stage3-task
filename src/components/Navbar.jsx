import { Link } from "react-router-dom";
import { logo } from '../constants/icons';
import SearchInput from "./SearchInput";
import { menuLinks } from "../constants/data";
import { MenuLink } from ".";
import { profilePicture} from "../constants/images";

const Navbar = () => {
  return (
    <nav className="bg-[#F3F3F3] z-10 relative">
      <div className="xl:max-w-[1080px] 2xl:max-w-[1240px] mx-auto h-[86px] flex items-center justify-between px-[20px] xl:px-0">
        <Link to={'/'}>
          <img className="w-[115px] h-[46px]" src={logo} alt="ggtech-logo" />
        </Link>
        <SearchInput />
        <div className="flex gap-[20px] xl:gap-10">
          <div className="flex gap-2 items-center cursor-pointer">
            <img className="w-10 h-10 rounded-full object-cover border border-[#1A36F0]" src={profilePicture} alt="profile-picture" />
            <p className="hidden xl:block">Account</p>
          </div>
          {menuLinks.map((link) => (
              <MenuLink
                id={link.id}
                url={link.url}
                iconUrl={link.iconUrl}
                title={link.title}
                hasDropDown={link.hasDropDown}
                dropdown={link.dropdown}
                isCart={link.isCart}
                key={link.id}
              />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar