import Catalog from "./Catalog"
import UzumHomeSvg from "../assets/homeImgs/uzum-home.svg"
import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import Links from "./custom/Link"
import UserSvg from "@/icons/UserSvg"
import LikeSvg from "@/icons/LikeSvg"
import BagSvg from "@/icons/BagSvg"

const Navbar = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="bg-gray-100 py-1">
        <div className="containers w-full">
          dfgh
        </div>
      </div>
      <nav className="containers flex items-center gap-7 w-full">
        <Link to={"/"}>
          <img
            className="ml-0 pl-0 w-80 h-12"
            src={UzumHomeSvg}
            alt="This is a home market home picture"
          />
        </Link>
        <div className="flex items-center w-full gap-2.5">
          <Catalog />
          <div className="flex items-center border w-full rounded overflow-hidden">
            <input
              type="text"
              className="w-full border-none outline-none rounded-none pl-2.5 text-md"
              placeholder="Mahsulotlar va turkumlar izlash"
            />
            <Button className="flex items-center cursor-pointer h-full text-md justify-center px-7 rounded-none bg-gray-100 text-blue-700 hover:bg-gray-200 transition-all">
              df
            </Button>
          </div>
        </div>
        <ul className="flex items-center gap-2.5">
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded transition-all">
            <Links
              to={""}
            >
              <UserSvg />
            </Links>
          </li >
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded transition-all">
            <Links
              to={""}
            >
              <LikeSvg />
            </Links>
          </li>
          <li className="cursor-pointer hover:bg-gray-200 py-2.5 px-3 rounded transition-all">
            <Links
              to={""}
            >
              <BagSvg />
            </Links>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar