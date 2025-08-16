import UzumHomeSvg from "../assets/homeImgs/uzum-home.svg"
import Links from "./custom/Link"
import UserSvg from "../icons/UserSvg"
import LikeSvg from "../icons/LikeSvg"
import BagSvg from "../icons/BagSvg"
import Navigator from "./Navigator"
import SearchInput from "./SearchInput"
import Catalog from "./Catalog"
import { LanguageToggle } from "./LanguageTogle"

const Navbar = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="bg-gray-100 py-2">
        <div className="containers px-3 lg:px-0 w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Navigator />
            <a
              href="https://uzum.uz/uz/about/delivery-points"
              className="font-medium hidden lg:block"
            >
              Topshirish punktlari
            </a>
          </div>
          <ul className="items-center gap-3 hidden lg:flex">
            <li>
              <a
                href="https://seller.uzum.uz/"
                className="text-blue-500 font-medium hover:text-blue-600 transition-all"
              >
                Sotuvchi bo'lish
              </a>
            </li>
            <li>
              <a href="https://uzum.uz/uz/promo/pvz"
                className="text-blue-500 font-medium hover:text-blue-600 transition-all"
              >
                Topshirish punktini ochish
              </a>
            </li>
            <li>
              <Links to={"/faq"} className="font-medium text-gray-600 hover:text-gray-700 transition-all" >Savol-javob</Links>
            </li>
            <li>
              <Links to={"/user/orders"} className="font-medium text-gray-600 hover:text-gray-700 transition-all">Buyurtmalarim</Links>
            </li>
            <li>
              <LanguageToggle />
            </li>
          </ul>
        </div>
      </div>

      <nav className="containers flex items-center lg:gap-3 w-full">
        <Links to={"/"} className="hidden lg:block">
          <img
            className="ml-0 pl-0 w-100 h-12"
            src={UzumHomeSvg}
            alt="This is a home market home picture"
          />
        </Links>
        <div className="flex items-center w-full gap-1">
          <Catalog />
          <SearchInput />
        </div>
        <ul className="items-center gap-2.5 hidden lg:flex">
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded transition-all">
            <Links
              to={"#auth"}
              className="flex items-center gap-0.5"
            >
              <UserSvg />
              <span className="font-medium">Kirish</span>
            </Links>
          </li >
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded transition-all">
            <Links
              to={"/wishes"}
              className="flex items-center gap-0.5"
            >
              <LikeSvg />
              <span className="font-medium">Saralanganlar</span>
            </Links>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded transition-all">
            <Links
              to={"/cart"} className="flex items-center gap-0.5"
            >
              <BagSvg />
              <span className="font-medium">Savat</span>
            </Links>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar