import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "./ui/button"
import axios from "axios"
import { API_BASE } from "@/utils/API"
import { type Catalogs } from "@/types/Catalog.type"
import Links from "./custom/Link"
import LiftSvg from "@/icons/LiftSvg"
import CatalogIcon from "@/icons/catalogIcon"
import CloseIcon from "@/icons/closeIcon"
import Slugify from "@/utils/Slugify"

const Catalog = () => {
  const [togle, setTogle] = React.useState<boolean>(false)
  // const [hoveredID, setHoveredID] = React.useState()
  const [categories, setCategories] = React.useState<Catalogs[]>([])
  const loader = useLocation()

  useEffect(() => {
    axios(`${API_BASE}api/categories`)
      .then((res) => {
        setCategories(res.data)

      })
      .catch((error) => {
        console.error("Kategoriya olishda xatolik!", { error })
      })
  }, [])

  useEffect(() => {
    setTogle(false)
  }, [loader.pathname])

  return (
    <>
      <motion.div className="containers hidden lg:block">
        <Button
          onClick={() => setTogle(!togle)}
          className="bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-all shadow-none rounded h-11 cursor-pointer">
          <motion.span
            key={togle ? "catalog" : "close"}
            initial={{ rotate: 90, opacity: 0.5 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            {togle ? <CloseIcon /> : <CatalogIcon />}
          </motion.span>
          Katalog
        </Button>
        <AnimatePresence initial={false}>
          {togle && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 20 }}
              exit={{ opacity: 0, y: 0 }}
              className="absolute right-0 left-0 containers flex w-full">
              <aside className="w-[21%] border-r">
                {categories.map(item => (
                  <div key={item.id}>
                    <Links to={`/category/${Slugify(item.title)}-${item.id}`} className="flex items-center justify-between py-2.5 px-1 rounded-l font-medium hover:bg-gray-200 hover:text-blue-600">
                      <div className="flex items-center gap-1">
                        <img
                          className="w-7 h-7"
                          src={item.img}
                          alt={item.title}
                        />
                        {item.title}
                      </div>
                      <LiftSvg className="w-6 h-6 shrink-0" />
                    </Links>
                  </div>
                ))}
              </aside>
              <div></div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Catalog