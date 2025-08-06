import { catalogs } from "@/data/Category"
import { useState } from "react"
import { Button } from "./ui/button"
import Links from "./custom/Link"
import HaftaTovarlariPNG from "@/assets/homeImgs/haftaTovarlari.png"
import LiftSvg from "@/icons/LiftSvg"

const Catalog = () => {
  const [togle, setTogle] = useState<boolean>(false)
  const [hoveredCategoryId, setHoveredCategoryId] = useState<string | null>(catalogs[0]?.id || null)

  const hoveredCategory = catalogs.find(item => item.id === hoveredCategoryId)

  return (
    <div>
      <Button
        className="capitalize shadow-none cursor-pointer rounded bg-gray-100 text-md text-blue-700 hover:bg-gray-200 h-11 px-6"
        onClick={() => setTogle(!togle)}
      >
        katalog
      </Button>

      {togle && (
        <div className="absolute left-0 right-0 containers flex top-26 gap-15 w-full bg-white">
          <ul className="border-r w-[21.2%] flex flex-col gap-2.5">
            <li>
              <Links
                to={""}
                className="flex items-center justify-between font-medium p-2.5 rounded-l hover:text-blue-500 transition-all"
              >
                <div className="flex items-center gap-1">
                  <img className="w-8" src={HaftaTovarlariPNG} alt="hafta tovarlari" />
                  <span>Hafta tovarlari</span>
                </div>
                <LiftSvg className="shrink-0 size-5 text-gray-500" />
              </Links>
            </li>

            {catalogs.map(item => (
              <li
                key={item.id}
                onMouseEnter={() => setHoveredCategoryId(item.id)}
              >
                <Links
                  to={item.path}
                  className={`flex items-center justify-between font-medium p-2.5 rounded-l ${hoveredCategoryId === item.id && "bg-gray-200"} hover:text-blue-500 transition-all`}
                >
                  <div className="flex items-center gap-1">
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                  </div>
                  <LiftSvg className="shrink-0 size-5 text-gray-500" />
                </Links>
              </li>
            ))}
          </ul>

          {hoveredCategory && (
            <div className="w-[79.8%] flex flex-col gap-5">
              <Links
                to={hoveredCategory.path}
                className="mt-3 text-lg font-semibold flex items-center gap-0.5 hover:text-blue-500 transition-all"
              >
                {hoveredCategory.name}
                <LiftSvg />
              </Links>

              <div className="grid grid-cols-3 gap-2.5">
                {hoveredCategory.subcategory?.map(sub => (
                  <div key={sub.id}>
                    <Links to={sub.path} className="font-medium hover:text-blue-500 transition-all">
                      {sub.name}
                    </Links>
                    <div>
                      {sub.items.map(child => (
                        <div key={child.id}>
                          <Links to={child.path} className="text-gray-500 hover:text-blue-500 transition-all">
                            {child.name}
                          </Links>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default Catalog
