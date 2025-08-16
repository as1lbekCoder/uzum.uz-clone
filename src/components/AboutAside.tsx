import Links from "./custom/Link"

const AboutSidebar = () => {


    return (
        <aside className="flex flex-col w-[15%] gap-2.5">
            <Links
                to={"/about/delivery-points"}
                className="font-medium text-gray-700 hover:text-gray-600 transition-all"
            >
                Topshirish punktlari
            </Links>
            <Links
                to={"/about/careers"}
                className="font-medium text-gray-700 hover:text-gray-600 transition-all"
            >
                Vakansiyalar
            </Links>
        </aside>
    )
}

export default AboutSidebar