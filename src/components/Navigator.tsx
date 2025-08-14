import React, { useEffect } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { API_BASE } from "@/utils/API";
import { type CatalogsItem } from "@/types/Catalog.type";
import { ChevronRight, X, Search, ChevronDown } from "lucide-react";
import { Input } from "./ui/input";
import { AnimatePresence, motion } from "motion/react";

const LOCAL_STORAGE_KEY = "selected_city";

const Navigator = () => {
    const [togle, setTogle] = React.useState<boolean>(false);
    const [location, setLocation] = React.useState<CatalogsItem[]>([]);
    const [searchTerm, setSearchTerm] = React.useState<string>("");

    const [selectedCity, setSelectedCity] = React.useState<string>(() => {
        const savedCity = localStorage.getItem(LOCAL_STORAGE_KEY);
        return savedCity ? savedCity : "Shaharni tanlash";
    });

    useEffect(() => {
        if (togle && location.length === 0) {
            axios(`${API_BASE}api/location`)
                .then((res) => {
                    setLocation(res.data);
                })
                .catch((err) => {
                    console.error("Shaharlarni olishda xatolik!", err);
                });
        }
    }, [togle, location.length]);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, selectedCity);
    }, [selectedCity]);

    const handleTogle = () => {
        setTogle(!togle);
        setSearchTerm("")
    };

    const handleSelectCity = (cityTitle: string) => {
        setSelectedCity(cityTitle);
        handleTogle();
    };

    const filteredLocations = location.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative containers">
            <Button
                className="cursor-pointer flex items-center justify-between gap-2 bg-transparent hover:bg-transparent shadow-none text-black text-md max-md:text-lg lg:text-md"
                onClick={handleTogle}
            >
                <span>{selectedCity}</span>
                <ChevronDown className="!h-5 !w-5 md:!w-6 md:!h-6" />
            </Button>

            <AnimatePresence initial={false}>
                {togle && (
                    <>
                        <div className="fixed inset-0 top-0 left-0 bg-black/50 bg-opacity-50 z-80">

                        </div>
                        <div className="fixed inset-0 flex items-center justify-center z-80">
                            <motion.div
                                initial={{ opacity: 0, scale: 0, y: 100 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0, y: 100 }}
                                className="bg-white w-[650px] max-w-[90%] rounded-lg flex flex-col h-[540px] lg:h-[680px] overflow-hidden p-5">
                                <div className="flex justify-between items-center py-4 border-b border-gray-200">
                                    <h3 className="text-xl font-semibold">Shaharni tanlash</h3>
                                    <Button variant="ghost" onClick={handleTogle} className="cursor-pointer">
                                        <X className="!h-6 !w-6 text-gray-500" />
                                    </Button>
                                </div>
                                <div className="relative my-4">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                    <Input
                                        type="text"
                                        placeholder="Shaharni topish"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 h-11 border rounded-md font-medium outline-none"
                                    />
                                </div>
                                <div className="flex-1 overflow-y-auto scrollbar-hide px-0">
                                    {filteredLocations.length > 0 ? (
                                        filteredLocations.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex justify-between items-center p-4 border-b border-gray-100 rounded-sm hover:bg-gray-100 font-medium cursor-pointer"
                                                onClick={() => handleSelectCity(item.title)}
                                            >
                                                <span>{item.title}</span>
                                                <ChevronRight className="h-5 w-5 text-gray-400" />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="p-4 text-center text-gray-500">
                                            Hozirda bu shaharlarga yetkazib berish ishlamayabdi
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div >
    );
};

export default Navigator;