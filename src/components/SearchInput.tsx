import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import SearchSvg from "@/icons/SearchSvg"
import Links from "./custom/Link"
import axios from "axios"
import { API_BASE } from "@/utils/API"
import { type ProductsProps } from "@/types/Products.type"

const SearchInput = () => {
    const [isCartVisible, setIsCartVisible] = useState(false)
    const [value, setValue] = useState("")
    const [products, setProducts] = useState<ProductsProps[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios(`${API_BASE}api/products`)
            .then((res) => {
                setProducts(res.data)
            })
            .catch(() => {
                setError("Mahsulotlarni olishda xtolik yuz berdi!")
            })
    }, [])


    if (error) return <p>{error}</p>

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
                        <motion.div
                            className="fixed top-36 inset-0 bg-black/40 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeCart}
                        />

                        <motion.div
                            className="absolute top-[34px] left-0 w-full bg-white shadow-lg rounded-b-2xl px-3 py-5 z-[50] h-[550px] border-t-0 border"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 10 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="-mt-5 -mx-3 py-3 px-3">
                                <h2 className="font-medium text-xl cursor-text">Tavsiya etamiz</h2>
                            </div>
                            <div className="flex flex-col space-y-2">
                                {products.map(item => (
                                    <div key={item.id}>
                                        <Links to={""}>{item.title}</Links>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SearchInput
