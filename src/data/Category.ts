import type { Catalog } from "@/types/Catalog.type";
import { nanoid } from "nanoid"
import {
    Aksessuarlar,
    AutoTovarlar,
    BolalarTovarlari,
    Dacha,
    Elektronika,
    GuzallikVaParvarish,
    HayvonlarTovarlari,
    KanselyariyaTovarlari,
    Kitoblar,
    Kiyim,
    MaisheyTexnika,
    MaishiyKimyoviyModdalar,
    OziqOvqat,
    Poyabzal,
    Qurilish,
    Salomatlik,
    SportVaHordiq,
    UyRuzgorBuyumlari,
    XobbiVaIjod
} from "@/assets/assests"


export const catalogs: Catalog[] = [
    {
        id: nanoid(),
        name: "Elektronika",
        img: Elektronika,
        path: "category/elektronika-10020",
        subcategory: [
            {
                id: nanoid(),
                name: "Smartfonlar va telefonlar",
                path: "category/smartfonlar-va-telefonlar-10044",
                items: [
                    {
                        id: nanoid(),
                        name: "Smartfonlar uchun aksessuarlar",
                        path: "category/aksessuarlar-va-ehtiyot-qismlari-10398"
                    },
                    {
                        id: nanoid(),
                        name: "Knopkali telefonlar",
                        path: "category/knopkali-telefonlar-14262"
                    },
                    {
                        id: nanoid(),
                        name: "Smartfonlar",
                        path: "category/smartfonlar-12690"
                    },
                    {
                        id: nanoid(),
                        name: "Ehtiyot qismlari va ta'mirlash",
                        path: "category/ehtiyot-qismlar-va-tamirlash-15335"
                    },
                    {
                        id: nanoid(),
                        name: "Statsionar telefonlar",
                        path: "category/statsionar-telefonlar-13733"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Noutbuklar, planshetlar va elektron kitoblar",
                path: "category/noutbuklar-planshetlar-va-elektron-10030",
                items: [
                    {
                        id: nanoid(),
                        name: "Noutbuklar",
                        path: "category/noutbuklar-15718"
                    },
                    {
                        id: nanoid(),
                        name: "Planshetlar va elektron kitoblar",
                        path: "category/planshetlar-va-elektron-kitoblar-15716"
                    },
                    {
                        id: nanoid(),
                        name: "Noutbuk uchun aksessuarlar",
                        path: "category/noutbuk-uchun-aksessuarlar-10487"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Smartfonlar va telefonlar",
                path: "category/smartfonlar-va-telefonlar-10044",
                items: [
                    {
                        id: nanoid(),
                        name: "Smartfonlar uchun aksessuarlar",
                        path: "category/aksessuarlar-va-ehtiyot-qismlari-10398"
                    },
                    {
                        id: nanoid(),
                        name: "Knopkali telefonlar",
                        path: "category/knopkali-telefonlar-14262"
                    },
                    {
                        id: nanoid(),
                        name: "Smartfonlar",
                        path: "category/smartfonlar-12690"
                    },
                    {
                        id: nanoid(),
                        name: "Ehtiyot qismlari va ta'mirlash",
                        path: "category/ehtiyot-qismlar-va-tamirlash-15335"
                    },
                    {
                        id: nanoid(),
                        name: "Statsionar telefonlar",
                        path: "category/statsionar-telefonlar-13733"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Noutbuklar, planshetlar va elektron kitoblar",
                path: "category/noutbuklar-planshetlar-va-elektron-10030",
                items: [
                    {
                        id: nanoid(),
                        name: "Noutbuklar",
                        path: "category/noutbuklar-15718"
                    },
                    {
                        id: nanoid(),
                        name: "Planshetlar va elektron kitoblar",
                        path: "category/planshetlar-va-elektron-kitoblar-15716"
                    },
                    {
                        id: nanoid(),
                        name: "Noutbuk uchun aksessuarlar",
                        path: "category/noutbuk-uchun-aksessuarlar-10487"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Smartfonlar va telefonlar",
                path: "category/smartfonlar-va-telefonlar-10044",
                items: [
                    {
                        id: nanoid(),
                        name: "Smartfonlar uchun aksessuarlar",
                        path: "category/aksessuarlar-va-ehtiyot-qismlari-10398"
                    },
                    {
                        id: nanoid(),
                        name: "Knopkali telefonlar",
                        path: "category/knopkali-telefonlar-14262"
                    },
                    {
                        id: nanoid(),
                        name: "Smartfonlar",
                        path: "category/smartfonlar-12690"
                    },
                    {
                        id: nanoid(),
                        name: "Ehtiyot qismlari va ta'mirlash",
                        path: "category/ehtiyot-qismlar-va-tamirlash-15335"
                    },
                    {
                        id: nanoid(),
                        name: "Statsionar telefonlar",
                        path: "category/statsionar-telefonlar-13733"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Noutbuklar, planshetlar va elektron kitoblar",
                path: "category/noutbuklar-planshetlar-va-elektron-10030",
                items: [
                    {
                        id: nanoid(),
                        name: "Noutbuklar",
                        path: "category/noutbuklar-15718"
                    },
                    {
                        id: nanoid(),
                        name: "Planshetlar va elektron kitoblar",
                        path: "category/planshetlar-va-elektron-kitoblar-15716"
                    },
                    {
                        id: nanoid(),
                        name: "Noutbuk uchun aksessuarlar",
                        path: "category/noutbuk-uchun-aksessuarlar-10487"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Smartfonlar va telefonlar",
                path: "category/smartfonlar-va-telefonlar-10044",
                items: [
                    {
                        id: nanoid(),
                        name: "Smartfonlar uchun aksessuarlar",
                        path: "category/aksessuarlar-va-ehtiyot-qismlari-10398"
                    },
                    {
                        id: nanoid(),
                        name: "Knopkali telefonlar",
                        path: "category/knopkali-telefonlar-14262"
                    },
                    {
                        id: nanoid(),
                        name: "Smartfonlar",
                        path: "category/smartfonlar-12690"
                    },
                    {
                        id: nanoid(),
                        name: "Ehtiyot qismlari va ta'mirlash",
                        path: "category/ehtiyot-qismlar-va-tamirlash-15335"
                    },
                    {
                        id: nanoid(),
                        name: "Statsionar telefonlar",
                        path: "category/statsionar-telefonlar-13733"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Noutbuklar, planshetlar va elektron kitoblar",
                path: "category/noutbuklar-planshetlar-va-elektron-10030",
                items: [
                    {
                        id: nanoid(),
                        name: "Noutbuklar",
                        path: "category/noutbuklar-15718"
                    },
                    {
                        id: nanoid(),
                        name: "Planshetlar va elektron kitoblar",
                        path: "category/planshetlar-va-elektron-kitoblar-15716"
                    },
                    {
                        id: nanoid(),
                        name: "Noutbuk uchun aksessuarlar",
                        path: "category/noutbuk-uchun-aksessuarlar-10487"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Smartfonlar va telefonlar",
                path: "category/smartfonlar-va-telefonlar-10044",
                items: [
                    {
                        id: nanoid(),
                        name: "Smartfonlar uchun aksessuarlar",
                        path: "category/aksessuarlar-va-ehtiyot-qismlari-10398"
                    },
                    {
                        id: nanoid(),
                        name: "Knopkali telefonlar",
                        path: "category/knopkali-telefonlar-14262"
                    },
                    {
                        id: nanoid(),
                        name: "Smartfonlar",
                        path: "category/smartfonlar-12690"
                    },
                    {
                        id: nanoid(),
                        name: "Ehtiyot qismlari va ta'mirlash",
                        path: "category/ehtiyot-qismlar-va-tamirlash-15335"
                    },
                    {
                        id: nanoid(),
                        name: "Statsionar telefonlar",
                        path: "category/statsionar-telefonlar-13733"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Noutbuklar, planshetlar va elektron kitoblar",
                path: "category/noutbuklar-planshetlar-va-elektron-10030",
                items: [
                    {
                        id: nanoid(),
                        name: "Noutbuklar",
                        path: "category/noutbuklar-15718"
                    },
                    {
                        id: nanoid(),
                        name: "Planshetlar va elektron kitoblar",
                        path: "category/planshetlar-va-elektron-kitoblar-15716"
                    },
                    {
                        id: nanoid(),
                        name: "Noutbuk uchun aksessuarlar",
                        path: "category/noutbuk-uchun-aksessuarlar-10487"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Smartfonlar va telefonlar",
                path: "category/smartfonlar-va-telefonlar-10044",
                items: [
                    {
                        id: nanoid(),
                        name: "Smartfonlar uchun aksessuarlar",
                        path: "category/aksessuarlar-va-ehtiyot-qismlari-10398"
                    },
                    {
                        id: nanoid(),
                        name: "Knopkali telefonlar",
                        path: "category/knopkali-telefonlar-14262"
                    },
                    {
                        id: nanoid(),
                        name: "Smartfonlar",
                        path: "category/smartfonlar-12690"
                    },
                    {
                        id: nanoid(),
                        name: "Ehtiyot qismlari va ta'mirlash",
                        path: "category/ehtiyot-qismlar-va-tamirlash-15335"
                    },
                    {
                        id: nanoid(),
                        name: "Statsionar telefonlar",
                        path: "category/statsionar-telefonlar-13733"
                    },
                ]
            },

            {
                id: nanoid(),
                name: "Noutbuklar, planshetlar va elektron kitoblar",
                path: "category/noutbuklar-planshetlar-va-elektron-10030",
                items: [
                    {
                        id: nanoid(),
                        name: "Noutbuklar",
                        path: "category/noutbuklar-15718"
                    },
                    {
                        id: nanoid(),
                        name: "Planshetlar va elektron kitoblar",
                        path: "category/planshetlar-va-elektron-kitoblar-15716"
                    },
                    {
                        id: nanoid(),
                        name: "Noutbuk uchun aksessuarlar",
                        path: "category/noutbuk-uchun-aksessuarlar-10487"
                    },
                ]
            },
            
            {
                id: nanoid(),
                name: "Smartfonlar va telefonlar",
                path: "category/smartfonlar-va-telefonlar-10044",
                items: [
                    {
                        id: nanoid(),
                        name: "Smartfonlar uchun aksessuarlar",
                        path: "category/aksessuarlar-va-ehtiyot-qismlari-10398"
                    },
                    {
                        id: nanoid(),
                        name: "Knopkali telefonlar",
                        path: "category/knopkali-telefonlar-14262"
                    },
                    {
                        id: nanoid(),
                        name: "Smartfonlar",
                        path: "category/smartfonlar-12690"
                    },
                    {
                        id: nanoid(),
                        name: "Ehtiyot qismlari va ta'mirlash",
                        path: "category/ehtiyot-qismlar-va-tamirlash-15335"
                    },
                    {
                        id: nanoid(),
                        name: "Statsionar telefonlar",
                        path: "category/statsionar-telefonlar-13733"
                    },
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Maishiy texnika",
        img: MaisheyTexnika,
        path: "category/maishiy-texnika-10004",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Kiyimlar",
        img: Kiyim,
        path: "category/kiyimlar-10014",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Poyabzallar",
        img: Poyabzal,
        path: "category/poyabzallar-10013",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Aksessuarlar",
        img: Aksessuarlar,
        path: "category/aksessuarlar-10003",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Go'zallik va parvarish",
        img: GuzallikVaParvarish,
        path: "category/guzallik-va-parvarish-10012",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Salomatlik",
        img: Salomatlik,
        path: "category/salomatlik-10009",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Uy-ro'zg'or buyumlari",
        img: UyRuzgorBuyumlari,
        path: "category/uy-ruzgor-buyumlari-10018",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Qurilish va ta'mirlash",
        img: Qurilish,
        path: "category/qurilish-va-tamirlash-10016",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Avtotovarlar",
        img: AutoTovarlar,
        path: "category/avtotovarlar-10002",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Bolalar tovarlari",
        img: BolalarTovarlari,
        path: "category/bolalar-tovarlari-10007",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Xobbi va ijod",
        img: XobbiVaIjod,
        path: "category/xobbi-va-ijod-10008",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Sport va hordiq",
        img: SportVaHordiq,
        path: "category/sport-va-hordiq-10015",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Oziq-ovqat mahsulotlari",
        img: OziqOvqat,
        path: "oziq-ovqat-mahsulotlari-1821",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Maishiy kimyoviy moddalar",
        img: MaishiyKimyoviyModdalar,
        path: "category/maishiy-kimyoviy-moddalar-10005",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Kanselyariya tovarlari",
        img: KanselyariyaTovarlari,
        path: "category/kanselyariya-tovarlari-10010",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Hayvonlar uchun tovarlar",
        img: HayvonlarTovarlari,
        path: "category/hayvonlar-uchun-tovarlar-10019",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Kitoblar",
        img: Kitoblar,
        path: "category/kitoblar-10011",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Dacha, bog' va tomorqa",
        img: Dacha,
        path: "category/dacha-bog-va-tomorqa-10006",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },

    {
        id: nanoid(),
        name: "Reabilitatsiya uchun subsidiyalangan mahsulotlar",
        img: Salomatlik,
        path: "category/reabilitatsiya-uchun-subsidiyalangan-mahsulotlar-12087",
        subcategory: [
            {
                id: nanoid(),
                name: "",
                path: "",
                items: [
                    {
                        id: nanoid(),
                        name: "",
                        path: ""
                    }
                ]
            }
        ]
    },
]