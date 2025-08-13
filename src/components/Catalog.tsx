import React, { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { Button } from "./ui/button"
import axios from "axios"
import { API_BASE } from "@/utils/API"
import type { Catalog } from "@/types/Catalog.type"
import Links from "./custom/Link"

const Catalog = () => {
  const [togle, setTogle] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>(null)
  const [categories, setCategories] = React.useState<Catalog[]>([])
  const loader = useLocation()

  axios(`${API_BASE}api/categories`)
    .then((res) => {
      console.log(res.data);
      setCategories(res.data)

    })
    .catch(() => {
      setError("Kategoriya olishda xatolik!")
    })

  useEffect(() => {
    setTogle(false)
  }, [loader.pathname])

  if (error) return <p>{error}</p>

  return (
    <div className="containers">
      <Button
        onClick={() => setTogle(!togle)}
        className="bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-700 transition-all shadow-none rounded h-11 cursor-pointer">
        Katalog
      </Button>
      <AnimatePresence initial={false}>
        {togle && (
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 20 }}
            exit={{ opacity: 0, y: 0 }}
            className="absolute right-0 left-0 containers">
            <aside>
              {categories.map(item => (
                <div key={item.id}>
                  <Links to={""}>
                    <div className="flex items-center gap-1">
                      <img src={item.img} alt={item.title} />
                      {item.title}
                    </div>
                  </Links>
                </div>
              ))}
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  )
}

export default Catalog