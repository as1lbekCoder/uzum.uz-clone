import Catalog from "./Catalog"
import UzumHomeSvg from "../assets/homeImgs/uzum-home.svg"
import Links from "./custom/Link"
import UserSvg from "../icons/UserSvg"
import LikeSvg from "../icons/LikeSvg"
import BagSvg from "../icons/BagSvg"
import Navigator from "./Navigator"
import SearchInput from "./SearchInput"

const Navbar = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="bg-gray-100 py-2">
        <div className="containers w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Navigator />
            <Links
              to={""}
              className="font-medium"
            >
              Topshirish punktlari</Links>
          </div>
          <ul className="flex items-center gap-3">
            <li>
              <a
                href="https://seller.uzum.uz/"
                className="text-blue-500 font-medium hover:text-blue-600 transition-all"
              >
                Sotuvchi bo'lish
              </a>
            </li>
            <li>
              <Links to={""}
                className="text-blue-500 font-medium hover:text-blue-600 transition-all"
              >
                Topshirish punktini ochish
              </Links>
            </li>
            <li>
              <Links to={""} className="font-medium text-gray-600 hover:text-gray-700 transition-all" >Savol-javob</Links>
            </li>
            <li>
              <Links to={""} className="font-medium text-gray-600 hover:text-gray-700 transition-all">Buyurtmalarim</Links>
            </li>
            <li>

            </li>
          </ul>
        </div>
      </div>

      <nav className="containers flex items-center gap-7 w-full">
        <Links to={"/"}>
          <img
            className="ml-0 pl-0 w-100 h-12"
            src={UzumHomeSvg}
            alt="This is a home market home picture"
          />
        </Links>
        <div className="flex items-center w-full gap-2.5">
          <Catalog />
          <SearchInput />
        </div>
        <ul className="flex items-center gap-2.5">
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 hidden lg:flex rounded transition-all">
            <Links
              to={""}
              className="flex items-center gap-0.5"
            >
              <UserSvg />
              <span className="font-medium">Kirish</span>
            </Links>
          </li >
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded transition-all">
            <Links
              to={""}
              className="flex items-center gap-0.5"
            >
              <LikeSvg />
              <span className="font-medium hidden lg:flex">Saralanganlar</span>
            </Links>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded hidden lg:flex transition-all">
            <Links
              to={""} className="flex items-center gap-0.5"
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