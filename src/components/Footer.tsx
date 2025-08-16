import { Facebook, Instagram, Send, Youtube } from "lucide-react"
import Links from "./custom/Link"
import ScrinshotImageApp from "@/assets/appIcons/appImage.png"
import appStore from "@/assets/appIcons/appStore.svg"
import googlePlayStore from "@/assets/appIcons/googlePlayStore.svg"

const Footer = () => {
  return (
    <footer className="containers flex flex-col gap-y-10">
      <div className="flex flex-col items-center justify-between gap-2.5 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center lg:items-start">
          <header>
            <span className="font-medium cursor-text">Biz haqimizda</span>
          </header>
          <ul className="flex flex-col items-center mt-2.5 gap-y-2.5 lg:items-start">
            <li>
              <a
                href="https://uzum.uz/uz/about/delivery-points"
                className="text-gray-500 text-sm"
              >
                Topshirish punktlari
              </a>
            </li>
            <li>
              <a
                href="https://uzum.uz/uz/about/careers"
                className="text-gray-500 text-sm"
              >
                Vakansiyalar
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <header>
            <span className="font-medium cursor-text">Foydalanuvchilarga</span>
          </header>
          <ul className="flex flex-col items-center mt-2.5 gap-y-2.5 lg:items-start">
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

        <div className="flex flex-col items-center lg:items-start">
          <header>
            <span className="font-medium cursor-text">Tadbirkorlarga</span>
          </header>
          <ul className="flex flex-col items-center mt-2.5 gap-y-2.5 lg:items-start">
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
          <div className="border p-5 rounded-sm gap-5 w-90 hidden lg:flex">
            <img className="w-23 h-23 object-cover" src={ScrinshotImageApp} alt="This is scrinshot app image" />
            <div className="flex flex-col">
              <span className="font-medium flex flex-wrap leading-4.5 cursor-text">Ilovada xarid qilish qulayroq.</span>
              <span className="flex flex-wrap text-[13px] leading-4.5 cursor-text">Kamerani yo'naltiring va ilovani App Store va Google play orqali bepul yuklab oling.</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 lg:hidden">
            <header>
              <span className="font-medium cursor-text">Ilovani yuklab olish</span>
            </header>
            <ul className="flex flex-col items-center gap-y-2.5">
              <li>
                <a
                  href="https://apps.apple.com/ru/app/uzum-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056"
                  rel="nofollow noopener noreferrer"
                >
                  <img
                    className="w-35 h-12"
                    src={appStore}
                    alt="This is a AppStore svg"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=uz.uzum.app"
                  rel="nofollow noopener noreferrer"
                >
                  <img
                    className="w-35 h-12"
                    src={googlePlayStore}
                    alt="This is a GooglePlay svg"
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-y-2.5 lg:items-start">
            <h3 className="font-medium cursor-text">Uzum ijtimoiy tarmoqlarda</h3>
            <div className="flex items-center gap-5">
              <a
                href="https://www.instagram.com/uzum.market"
                rel="nofollow noopener noreferrer"
                className="border p-2.5 rounded bg-gradient-to-tr from-orange-500 via-rose-600 to-fuchsia-500 text-white"
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

      <div className="border-t py-5 flex flex-col items-center justify-between lg:flex-row gap-2.5 ">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
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
        <p className="text-[13px] text-center text-gray-500 cursor-text"> «2025© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan» </p>
      </div>
    </footer>
  )
}

export default Footer