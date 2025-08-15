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
import { ChevronRight } from "lucide-react"

const Catalog = () => {
  const [togle, setTogle] = React.useState<boolean>(false)
  const [hoveredID, setHoveredID] = React.useState<number | null>(null)
  const [categories, setCategories] = React.useState<Catalogs[]>([])
  const loader = useLocation()

  useEffect(() => {
    axios(`${API_BASE}api/categories`)
      .then((res) => {
        setCategories(res.data)

        if (res.data.length > 0) {
          setHoveredID(res.data[0].id)
        }
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
            <>
              <div
                className="fixed inset-0 top-0 left-0 bg-transparent"
                onClick={() => setTogle(false)}
              />
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 20 }}
                exit={{ opacity: 0, y: 0 }}
                className="absolute right-0 left-0 containers flex gap-10 w-full z-80 bg-white">
                <aside className="w-[21%] border-r">
                  {categories.map(item => (
                    <div
                      key={item.id}
                      onMouseEnter={() => setHoveredID(item.id)}
                    >
                      <Links
                        to={`/category/${Slugify(item.title)}-${item.id}`}
                        className={`flex items-center justify-between py-2.5 px-1 rounded-l font-medium${hoveredID === item.id ? "text-xl bg-gray-200 text-blue-600 font-medium" : ""} transition-all`}>
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

                {hoveredID && (
                  <div className="w-[100%]">
                    <Links
                      to={`/categories/${Slugify(categories.find(c => c.id === hoveredID)?.title || "")}--${hoveredID}`}
                      className="!flex items-center gap-1.5 cursor-pointer text-xl font-medium hover:text-blue-600 transition-all">
                      {categories.find(c => c.id === hoveredID)?.title}
                      <ChevronRight className="text-gray-800 w-6 h-6" />
                    </Links>

                    <div className="mt-2.5 grid grid-cols-3">
                      {categories.find(c => c.id === hoveredID)
                        ?.children
                        ?.map(item => (
                          <div className="" key={item.id}>
                            <Links
                              to={`/category/${Slugify(item.title)}--${item.id}`}
                              className="flex flex-wrap font-medium hover:text-blue-600 transition-all"
                            >
                              {item.title}
                            </Links>
                            <ul className="w-full">
                              {item.cildren?.map(c => (
                                <li key={c.id}>
                                  <Links className="hover:text-blue-600 transition-all " to={``}>{c.title}</Links>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default Catalog