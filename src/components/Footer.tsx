import { Facebook, Instagram, Send, Youtube } from "lucide-react"
import Links from "./custom/Link"
import ScrinshotImageApp from "@/assets/appIcons/appImage.png"

const Footer = () => {
  return (
    <footer className="containers mt-5 flex flex-col gap-y-10">
      <div className="flex justify-between">
        <div>
          <header>
            <span className="font-medium cursor-text">Biz haqimizda</span>
          </header>
          <ul className="flex flex-col mt-2.5 gap-y-2.5">
            <li>
              <Links
                to={""}
                className="text-gray-500 text-sm"
              >
                Topshirish punktlari
              </Links>
            </li>
            <li>
              <Links
                to={"/about/careers"}
                className="text-gray-500 text-sm"
              >
                Vakansiyalar
              </Links>
            </li>
          </ul>
        </div>

        <div>
          <header>
            <span className="font-medium cursor-text">Foydalanuvchilarga</span>
          </header>
          <ul className="flex flex-col mt-2.5 gap-y-2.5">
            <li>
              <Links
                to={""}
                className="text-gray-500 text-sm"
              >
                Biz bilan bog'lanish
              </Links>
            </li>
            <li>
              <Links
                to={""}
                className="text-gray-500 text-sm"
              >
                Savol-Javob
              </Links>
            </li>
          </ul>
        </div>

        <div>
          <header>
            <span className="font-medium cursor-text">Tadbirkorlarga</span>
          </header>
          <ul className="flex flex-col mt-2.5 gap-y-2.5">
            <li>
              <Links
                to={""}
                className="text-gray-500 text-sm"
              >
                Uzumda soting
              </Links>
            </li>
            <li>
              <Links
                to={""}
                className="text-gray-500 text-sm"
              >
                Sotuvchi kabenitiga kirish
              </Links>
            </li>
            <li>
              <Links
                to={""}
                className="text-gray-500 text-sm"
              >
                Topshirish punktini ochish
              </Links>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-5">
          <div className="border p-5 rounded-sm flex gap-5 w-90">
            <img className="w-23 h-23 object-cover" src={ScrinshotImageApp} alt="This is scrinshot app image" />
            <div className="flex flex-col gap-1">
              <span className="font-medium flex flex-wrap leading-4.5 cursor-text">Ilovada xarid qilish qulayroq.</span>
              <span className="flex flex-wrap text-[13px] leading-4.5 cursor-text">Kamerani yo'naltiring va ilovani App Store va Google play orqali bepul yuklab oling.</span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2.5">
            <h3 className="font-medium cursor-text">Uzum ijtimoiy tarmoqlarda</h3>
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/uzum.market"
                rel="nofollow noopener noreferrer"
                className="border p-2.5 rounded"
              >
                <Instagram />
              </a>

              <a
                href="https://t.me/uzum_market"
                rel="nofollow noopener noreferrer"
                className="border p-2.5 rounded bg-[#28A7E8] text-white"
              >
                <Send />
              </a>

              <a
                href="https://www.facebook.com/uzummarket"
                rel="nofollow noopener noreferrer"
                className="border p-2.5 rounded bg-[#1877F2] text-white"
              >
                <Facebook />
              </a>

              <a
                href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA"
                rel="nofollow noopener noreferrer"
                className="border p-2.5 rounded bg-[#FF0000] text-white"
              >
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a
            href="https://legal.uzum.uz/privacy-policy-uz.html"
            rel="nofollow noopener noreferrer"
            className="font-medium"
          >
            Maxfiylik kelishuvi
          </a>
          <a
            href="https://legal.uzum.uz/user-agreement-uz.html"
            rel="nofollow noopener noreferrer"
            className="font-medium"
          >
            Foydalanuvchi kelishuvi
          </a>
        </div>
        <p className="text-[13px] text-gray-500 cursor-text"> «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan» </p>
      </div>
    </footer>
  )
}

export default Footer