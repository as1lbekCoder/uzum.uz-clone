import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import SearchSvg from "@/icons/SearchSvg"
import Links from "./custom/Link"
import axios from "axios"
import { API_BASE } from "@/utils/API"
import { type ProductsProps } from "@/types/Products.type"
import { ChevronLeft } from "lucide-react"

const SearchInput = () => {
    const [isCartVisible, setIsCartVisible] = useState(false)
    const [value, setValue] = useState("")
    const [products, setProducts] = useState<ProductsProps[]>([])
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        axios(`${API_BASE}api/products`)
            .then((res) => {
                setProducts(res.data)
            })
            .catch((error) => {
                console.error("Mahsulotlarni olishda xtolik yuz berdi!", { error })
            })
    }, [])

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen()
        window.addEventListener("resize", checkScreen)
    }, [])

    const closeCart = () => setIsCartVisible(false)

    const mobileVariants = {
        hidden: { opacity: 0, scale: 0, z: 50, },
        visible: { opacity: 1, scale: 1, z: 0, transition: { duration: 0.3, } },
    }

    const desktopVariants = {
        hidden: { opacity: 0, z: -10 },
        visible: { opacity: 1, z: 10, },
    }

    return (
        <div className="relative w-full -mt-17 lg:mt-0">
            <div className="mt-17 lg:mt-0 w-full flex items-center z-[60] px-3">
                <ChevronLeft onClick={() => setIsCartVisible(false)} className="cursor-pointer -ml-2 p-1 lg:hidden z-[60]" size={40} />
                <div
                    className={`flex items-center border w-full rounded overflow-hidden h-11 transition-all ${isCartVisible ? "rounded-b-none" : ""
                        }`}
                >
                    <Input
                        type="search"
                        onFocus={() => setIsCartVisible(true)}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="grow pl-10 lg:pl-2.5 border-none outline-none rounded-none h-full !text-[15px] font-medium z-[60]"
                        placeholder="Mahsulotlar va turkumlar izlash"
                    />
                    <SearchSvg className="absolute left lg:hidden z-[60]" />
                    <Button className="items-center cursor-pointer hidden lg:flex h-full text-md justify-center !px-7 rounded-none bg-gray-100 text-blue-700 hover:bg-gray-200 transition-all">
                        <SearchSvg className="size-6" />
                    </Button>
                </div>
            </div>

            <AnimatePresence>
                {isCartVisible && (
                    <>
                        <motion.div
                            className="fixed top-0 right-0 left-0 inset-0 z-40 "
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeCart}
                        />

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={isMobile ? mobileVariants : desktopVariants}
                            className="absolute top-0 lg:top-11 left-0 lg: w-full bg-white shadow-sm lg:shadow-lg rounded-b-2xl px-3 py-5 z-[50]  border-t-0 border"
                        >
                            <div className="-mt-2 -mx-3 py-3 px-3">
                                <h2 className="font-medium text-xl cursor-text">Tavsiya etamiz</h2>
                            </div>
                            <div className="mt-15 lg:mt-0 flex flex-col">
                                {products.map(item => (
                                    <div key={item.id}>
                                        <Links to={""}>{item.title}</Links>
                                    </div>
                                ))}
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                                <h1>dfghg</h1>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SearchInput
