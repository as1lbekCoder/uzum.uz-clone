import { catalogs } from "@/data/Category";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Links from "./custom/Link";
import HaftaTovarlariPNG from "@/assets/homeImgs/haftaTovarlari.png";
import LiftSvg from "@/icons/LiftSvg";
import Slugify from "@/utils/Slugify";
import { useLocation } from "react-router-dom";

const Catalog = () => {
  const [togle, setTogle] = useState<boolean>(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState<number | null>(
    catalogs[0]?.id || null
  );
  const location = useLocation()

  const hoveredCategory = catalogs.find((item) => item.id === hoveredCategoryId);
  const [showAllSubcategories, setShowAllSubcategories] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    setTogle(false)
  }, [location.pathname])

  const toggleSubcategories = (subcategoryId: number) => {
    setShowAllSubcategories(prevState => ({
      ...prevState,
      [subcategoryId]: !prevState[subcategoryId]
    }));
  };


  return (
    <div>
      <Button
        className="capitalize shadow-none cursor-pointer rounded bg-gray-100 text-md text-blue-700 hover:bg-gray-200 h-11 px-6"
        onClick={() => setTogle(!togle)}
      >
        katalog
      </Button>

      {togle && (
        <div className="absolute left-0 right-0 containers flex top-26 gap-8 w-full bg-white text-sm">
          <ul className="border-r w-[21.2%] flex flex-col">
            <li>
              <Links
                to={""}
                className="flex items-center justify-between text-[16px] font-medium p-2 rounded-l hover:text-blue-500 transition-all"
              >
                <div className="flex items-center gap-1">
                  <img className="w-8" src={HaftaTovarlariPNG} alt="hafta tovarlari" />
                  <span>Hafta tovarlari</span>
                </div>
                <LiftSvg className="shrink-0 size-5 text-gray-500" />
              </Links>
            </li>

            {catalogs.map((item) => {
              const slug = Slugify(item.name)
              const path = `/category/${slug}-${item.id}`
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => setHoveredCategoryId(item.id)}
                >
                  <Links
                    to={path}
                    className={`flex items-center justify-between p-2 rounded-l ${hoveredCategoryId === item.id && "bg-gray-200"
                      } hover:text-blue-500 transition-all`}
                  >
                    <div className="flex items-center gap-1">
                      <img src={item.img} alt={item.name} />
                      <span className="text-[16px] font-medium">{item.name}</span>
                    </div>
                    <LiftSvg className="shrink-0 size-5 text-gray-500" />
                  </Links>
                </li>
              )
            })}
          </ul>

          {hoveredCategory && (
            <div className="w-[79.8%] flex flex-col pt-3">
              <h2
                className="mb-4 text-lg font-semibold flex items-center gap-0.5"
              >
                {hoveredCategory.name}
                <LiftSvg />
              </h2>

              <div className="grid grid-cols-3 gap-5 items-start">
                {hoveredCategory.subcategory?.map((sub) => {
                  const itemsToShow = showAllSubcategories[sub.id] ? sub.items : sub.items.slice(0, 5);
                  const moreItemsCount = sub.items.length > 5 ? sub.items.length - 5 : "";

                  const slug = Slugify(sub.name)
                  const path = `/category/${slug}-${sub.id}`

                  return (
                    <div key={sub.id} title={sub.name}>
                      <Links to={path} className="font-medium text-[16px] mb-3.5 hover:text-blue-500 transition-all">
                        {sub.name}
                      </Links>
                      <div className="flex flex-col">
                        {itemsToShow.map((child) => {
                          const slug = Slugify(child.name)
                          const path = `/category/${slug}-${child.id}`
                          return (
                            <div key={child.id} title={child.name} className="truncate w-full overflow-hidden whitespace-nowrap">
                              <Links to={path} className="text-[16px] text-gray-500 hover:text-blue-500 transition-all">
                                {child.name}
                              </Links>
                            </div>
                          )
                        })}
                      </div>

                      {moreItemsCount && (
                        <button
                          onClick={() => toggleSubcategories(sub.id)}
                          className="flex items-center text-[16px] cursor-pointer text-gray-500 hover:text-blue-500 transition-all"
                        >
                          {showAllSubcategories[sub.id] ?
                            <span className="flex items-center">Yopish {moreItemsCount} </span>
                            :
                            <span className="flex items-center">Yana {moreItemsCount} <LiftSvg className="inline rotate-90 size-6 text-gray-500" /></span>
                          }
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Catalog;