import Links from "@/components/custom/Link"

const Careers = () => {
    return (
        <main className="containers flex flex-col gap-5 mb-10">
            <h2 className="text-2xl font-medium cursor-text">Uzum</h2>
            <div className="flex gap-30">
                <div className="flex flex-col w-[15%] gap-2.5">
                    <Links
                        to={""}
                        className="font-medium hover:text-gray-600 transition-all"
                    >
                        Topshirish punktlari
                    </Links>
                    <p
                        className="font-medium text-gray-600 cursor-text"
                    >
                        Vakansiyalar
                    </p>
                </div>
                <div className="border p-10 w-[85%] pr-52">
                    <h3 className="text-3xl font-medium uppercase">VAKANSIYALAR</h3>
                    <p>Uzum Market jamoasining safiga qo’shilmoqchimisiz? Nima uchun bizga mos kelishingiz haqida so’zlab bering va o’z rezyumengizni yuboring</p>
                    <div className="my-7 flex items-center gap-2.5">
                        <a
                            href="https://tashkent.hh.uz/employer/6132255?hhtmFrom=vacancy"
                            className="uppercase text-white bg-violet-700 hover:bg-violet-600 p-2 rounded-sm transition-all"
                        >
                            uzum market'da ishlashni istayman
                        </a>
                        <a
                            href="https://t.me/Uzum_jbot"
                            className="bg-gray-300 p-2 rounded-sm hover:bg-gray-200 transition-all"
                        >
                            Telegram bot - @Uzum_jbot
                        </a>
                    </div>
                    <p>Oʻzingizga mos kasbni topadigan ish profillari:</p>
                    <ul className="pl-2.5">
                        <li> - Buxgalteriya va moliya</li>
                        <li> - Uzum Market yetkazib berish xizmati</li>
                        <li> - Maʼmuriy xodim</li>
                        <li> - Ombor logistikasi</li>
                        <li> - Aloqa markazi</li>
                        <li> - Xodimlar boshqaruvi</li>
                    </ul>
                    <p>Agar hali sizning orzuyingizdagi vakansiya bizda ochilmagan boʻlsa, oʻzingizga qulay usulda rezyumeni zaxiraga yuboring:</p>
                    <p className="flex items-center gap-1">
                        Telegram:
                        <a
                            href="https://t.me/HR_UZUM"
                            className="underline text-gray-500"
                        >
                            @HR_UZUM
                        </a>
                    </p>
                    <p className="flex items-center gap-1">
                        Email:
                        <a
                            href="mailto:hr-market@uzum.com"
                            className="underline text-gray-500"
                        >
                            hr-market@uzum.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Careers