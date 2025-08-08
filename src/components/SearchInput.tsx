import { useRef, useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import SearchSvg from "@/icons/SearchSvg"
import { AnimatePresence, motion } from "framer-motion"

const SearchInput = () => {
    const [isCartVisible, setIsCartVisible] = useState(false)
    const [value, setValue] = useState("")

    const closeCart = () => setIsCartVisible(false)

    return (
        <div className="relative w-full z-[60]">
            <div
                className={`flex items-center border w-full rounded overflow-hidden h-11 transition-all ${isCartVisible ? "rounded-b-none" : ""
                    }`}
            >
                <Input
                    type="search"
                    onFocus={() => setIsCartVisible(true)}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="grow border-none outline-none rounded-none pl-2.5 h-full !text-[15px] font-medium"
                    placeholder="Mahsulotlar va turkumlar izlash"
                />
                <Button className="flex items-center cursor-pointer h-full text-md justify-center !px-7 rounded-none bg-gray-100 text-blue-700 hover:bg-gray-200 transition-all">
                    <SearchSvg className="size-6" />
                </Button>
            </div>

            <AnimatePresence>
                {isCartVisible && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeCart}
                        />

                        {/* Dropdown */}
                        <motion.div
                            className="absolute top-[44px] left-0 w-full bg-white shadow-lg rounded-b-2xl px-3 py-5 z-[50] h-[550px] border-t-0 border"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="sticky top-0 -mx-3 bg-gray-100 py-3 px-3">
                                <h2 className="font-medium text-xl">Tavsiya etamiz</h2>
                            </div>
                            <div className="mt-5 flex flex-col space-y-2">
                                <span>sdfg</span>
                                <span>sdfg</span>
                                <span>sdfg</span>
                                <span>sdfg</span>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SearchInput
