import React, { useEffect } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { API_BASE } from "@/utils/API";
import { type CatalogsItem } from "@/types/Catalog.type";
import { ChevronRight, X, Search } from "lucide-react";
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

    const handleTogle = () => {
        setTogle(!togle);
    };

    const handleClose = () => {
        setTogle(false);
    };

    const handleSelectCity = (cityTitle: string) => {
        setSelectedCity(cityTitle);
        handleClose();
    };

    const filteredLocations = location.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="relative containers">
            <Button className="cursor-pointer" onClick={handleTogle}>
                <span>{selectedCity}</span>
            </Button>

            {togle && (
                <AnimatePresence>
                    <motion.div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50 z-80">
                        <div className="bg-white w-[650px] max-w-[90%] rounded-lg flex flex-col h-[680px] overflow-hidden p-7">
                            <div className="flex justify-between items-center border-b pb-2.5 border-gray-200">
                                <h3 className="text-xl font-semibold">Shaharni tanlash</h3>
                                <Button variant="ghost" onClick={handleClose} className="cursor-pointer">
                                    <X className="h-5 w-5 text-gray-500" />
                                </Button>
                            </div>
                            <div className="relative my-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="Shaharni topish"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 h-11 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div className="flex-1 overflow-y-auto scrollbar-hide">
                                {filteredLocations.length > 0 ? (
                                    filteredLocations.map((item) => (
                                        <div
                                            onClick={() => handleSelectCity(item.title)}
                                            key={item.id}
                                            className="flex justify-between rounded items-center p-2.5 border-b border-gray-100 hover:bg-gray-100 cursor-pointer"
                                        >
                                            <span>{item.title}</span>
                                            <ChevronRight className="h-5 w-5 text-gray-400" />
                                        </div>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-gray-500">
                                        Bu shaharga yetkazib berish hozirda ishlamayabdi!
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};

export default Navigator;