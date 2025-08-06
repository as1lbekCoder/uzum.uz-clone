import type { Catalog } from "@/types/Catalog.type";
import {
    // Aksessuarlar,
    // AutoTovarlar,
    // BolalarTovarlari,
    // Dacha,
    Elektronika,
    // GuzallikVaParvarish,
    // HayvonlarTovarlari,
    // KanselyariyaTovarlari,
    // Kitoblar,
    // Kiyim,
    // MaisheyTexnika,
    // MaishiyKimyoviyModdalar,
    // OziqOvqat,
    // Poyabzal,
    // Qurilish,
    // Salomatlik,
    // SportVaHordiq,
    // UyRuzgorBuyumlari,
    // XobbiVaIjod
} from "@/assets/assests"

export const catalogs: Catalog[] = [
    {
        id: 100,
        name: "Elektronika",
        img: Elektronika,
        subcategory: [
            {
                id: 101,
                name: "Smartfonlar va telefonlar",
                items: [
                    {
                        id: 102,
                        name: "Smartfonlar uchun aksessuarlar",
                    },
                    {
                        id: 103,
                        name: "Knopkali telefonlar",
                    },
                    {
                        id: 104,
                        name: "Smartfonlar",
                    },
                    {
                        id: 105,
                        name: "Ehtiyot qismlari va ta'mirlash",
                    },
                    {
                        id: 106,
                        name: "Statsionar telefonlar",
                    },
                ]
            },

            {
                id: 107,
                name: "Noutbuklar, planshetlar va elektron kitoblar",
                items: [
                    {
                        id: 108,
                        name: "Noutbuklar",
                    },
                    {
                        id: 109,
                        name: "Planshetlar va elektron kitoblar",
                    },
                    {
                        id: 110,
                        name: "Noutbuk uchun aksessuarlar",
                    },
                ]
            },

            {
                id: 111,
                name: "Televizorlar va videotexnikalar",
                items: [
                    {
                        id: 112,
                        name: "Kabellar va adapterlar",
                    },
                    {
                        id: 113,
                        name: "Televizorlar",
                    },
                    {
                        id: 114,
                        name: "Tyuner va resiverlar",
                    },
                    {
                        id: 115,
                        name: "Televizor aksessuarlari",
                    },
                    {
                        id: 116,
                        name: "Televizor uchun stend va kronshteynlar",
                    },
                    {
                        id: 117,
                        name: "TV-pristavkalar va media pleerlar",
                    },
                    {
                        id: 118,
                        name: "Proyektorlar va aksessuarlar",
                    },
                    {
                        id: 119,
                        name: "Raqamli va sun'iy yo'ldosh TV",
                    },
                    {
                        id: 120,
                        name: "Ichki joylashadigan televizorlar",
                    },
                ]
            },

            {
                id: 121,
                name: "Kompyuter texnikasi",
                items: [
                    {
                        id: 122,
                        name: "Kompyuter aksessuarlari",
                    },
                    {
                        id: 123,
                        name: "Kompyuter texnikalari uchun butlovchi qismlar",
                    },
                    {
                        id: 124,
                        name: "Kompyuterning tashqi qurilmalari",
                    },
                    {
                        id: 125,
                        name: "Ma'lumotlarni saqlash",
                    },
                    {
                        id: 126,
                        name: "Dasturiy ta'minot",
                    },
                ]
            },

            {
                id: 127,
                name: "Quloqchinlar va audio texnikalar",
                items: [
                    {
                        id: 128,
                        name: "Quloqchinlar",
                    },
                    {
                        id: 129,
                        name: "Audio texnika",
                    },
                    {
                        id: 130,
                        name: "Proigrivatel uchun aksessuarlar",
                    },
                    {
                        id: 131,
                        name: "Periferiya va aksessuarlar",
                    }
                ]
            },

            {
                id: 132,
                name: "Aqlli soatlar va fitnes bilaguzuklar",
                items: [
                    {
                        id: 133,
                        name: "Aqlli soatlar",
                    },
                    {
                        id: 134,
                        name: "Qayishlar",
                    },
                    {
                        id: 135,
                        name: "Fitnes bilaguzuklar",
                    },
                    {
                        id: 136,
                        name: "Kabellar va zaryadlovchi qurilmalar",
                    },
                    {
                        id: 137,
                        name: "Aqlli gadjetlar",
                    },
                    {
                        id: 138,
                        name: "Soatlar va fitnes bilaguzuklar uchun himoya",
                    },
                ]
            },

            {
                id: 139,
                name: "Geymerlar uchun mahsulotlar",
                items: [
                    {
                        id: 140,
                        name: "O'yin pristavkalari",
                    },
                    {
                        id: 141,
                        name: "O'yin sichqonchalari",
                    },
                    {
                        id: 142,
                        name: "O'yin klaviaturalari",
                    },
                    {
                        id: 143,
                        name: "O'yin uchun quloqchinlar",
                    },
                    {
                        id: 144,
                        name: "O'yinlar",
                    },
                    {
                        id: 145,
                        name: "O'yin gilamchalari",
                    },
                    {
                        id: 146,
                        name: "O'yin monitorlari",
                    },
                    {
                        id: 147,
                        name: "O'yin noutbuklari",
                    },
                    {
                        id: 148,
                        name: "O'yin g'ildirakli va pedallari",
                    },
                    {
                        id: 149,
                        name: "VR-garnituralar",
                    },
                ]
            },

            {
                id: 150,
                name: "Ofis texnikasi",
                items: [
                    {
                        id: 151,
                        name: "Ofis jihozlari uchun butlovchi qismlar",
                    },
                    {
                        id: 152,
                        name: "Ofis jihozlari",
                    },
                    {
                        id: 153,
                        name: "Aksessuarlar va ofis jihozlari parvarishi",
                    },
                ]
            },

            {
                id: 154,
                name: "Foto va video texnika",
                items: [
                    {
                        id: 155,
                        name: "Fotosuratchilar uchun uskunalar",
                    },
                    {
                        id: 156,
                        name: "Foto va video kameralar",
                    },
                    {
                        id: 157,
                        name: "Foto va video kameralar uchun aksessuarlar",
                    }
                ]
            },

            {
                id: 158,
                name: "Aqlli uy va xavfsizlik",
                items: [
                    {
                        id: 159,
                        name: "Videokuzatuv",
                    },
                    {
                        id: 160,
                        name: "Aqlli uy",
                    },
                    {
                        id: 161,
                        name: "Uy xavfsizligi",
                    },
                ]
            },

            {
                id: 162,
                name: "Elektronikalar uchun aksessuarlar",
                items: [
                    {
                        id: 163,
                        name: "USB hablar",
                    },
                    {
                        id: 164,
                        name: "Akkumulyatorlar uchun zaryadlovchi qurilmalari",
                    },
                    {
                        id: 165,
                        name: "Tarmoq filtrlari",
                    },
                    {
                        id: 166,
                        name: "Konnektorlar",
                    },
                    {
                        id: 167,
                        name: "Kabel himoyasi",
                    },
                    {
                        id: 168,
                        name: "Uzaytirgichlar",
                    },
                    {
                        id: 169,
                        name: "Akkumulyator va batareyalar",
                    },
                    {
                        id: 170,
                        name: "Kabellar uchun tutqichlar",
                    },
                    {
                        id: 171,
                        name: "Tarmoqlagichlar",
                    },
                    {
                        id: 172,
                        name: "Elektr tarmoqlagichlar",
                    },
                    {
                        id: 173,
                        name: "Kabellar uchun organayzerlar",
                    },
                    {
                        id: 174,
                        name: "Dok-stansiyalar",
                    },
                    {
                        id: 175,
                        name: "Kuchlanishni o'zgartirgichlar",
                    },
                    {
                        id: 176,
                        name: "Quyosh panellar va batareyalari",
                    },
                    {
                        id: 177,
                        name: "Simlar uchun qutilar",
                    },
                ]
            },

            {
                id: 178,
                name: "Soatlar va elektron budilniklar",
                items: [
                    {
                        id: 179,
                        name: "Elektron budilniklar",
                    },
                    {
                        id: 180,
                        name: "Proyeksiya soatlari",
                    },
                    {
                        id: 181,
                        name: "Radio budilniklar",
                    },
                    {
                        id: 182,
                        name: "Aromabudilniklar va katrijlar",
                    }
                ]
            },

            {
                id: 183,
                name: "Optik anjomlar",
                items: [
                    {
                        id: 184,
                        name: "Teleskoplar",
                    },
                    {
                        id: 185,
                        name: "Teatr binokllari",
                    },
                    {
                        id: 186,
                        name: "Okulyarlar",
                    },
                    {
                        id: 187,
                        name: "Mikroskoplar uchun aksessuarlar",
                    },
                    {
                        id: 188,
                        name: "Teleskop aksessuarlari",
                    }
                ]
            },
            {
                id: 189,
                name: "Navigatorlar",
                items: [
                    {
                        id: 190,
                        name: "GPS-trekerlar va GPS-mayoqlar",
                    },
                    {
                        id: 191,
                        name: "Sayyohlik navigatorlari",
                    },
                    {
                        id: 192,
                        name: "Elektron kompaslar",
                    },
                    {
                        id: 193,
                        name: "navigatorlar uchun aksessuarlar",
                    },
                ]
            },
            {
                id: 194,
                name: "Kvadrokopterlar va aksessuarlar",
                items: [
                    {
                        id: 195,
                        name: "Kvadrokopterlar",
                    },
                    {
                        id: 196,
                        name: "Kvadrokopterlar uchun aksessuarlar",
                    }
                ]
            },
        ]
    },

    //     {
    //         id: ,
    //         name: "Maishiy texnika",
    //         img: MaisheyTexnika,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Kiyimlar",
    //         img: Kiyim,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Poyabzallar",
    //         img: Poyabzal,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Aksessuarlar",
    //         img: Aksessuarlar,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Go'zallik va parvarish",
    //         img: GuzallikVaParvarish,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Salomatlik",
    //         img: Salomatlik,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Uy-ro'zg'or buyumlari",
    //         img: UyRuzgorBuyumlari,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Qurilish va ta'mirlash",
    //         img: Qurilish,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Avtotovarlar",
    //         img: AutoTovarlar,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Bolalar tovarlari",
    //         img: BolalarTovarlari,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Xobbi va ijod",
    //         img: XobbiVaIjod,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Sport va hordiq",
    //         img: SportVaHordiq,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Oziq-ovqat mahsulotlari",
    //         img: OziqOvqat,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Maishiy kimyoviy moddalar",
    //         img: MaishiyKimyoviyModdalar,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Kanselyariya tovarlari",
    //         img: KanselyariyaTovarlari,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Hayvonlar uchun tovarlar",
    //         img: HayvonlarTovarlari,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Kitoblar",
    //         img: Kitoblar,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Dacha, bog' va tomorqa",
    //         img: Dacha,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },

    //     {
    //         id: ,
    //         name: "Reabilitatsiya uchun subsidiyalangan mahsulotlar",
    //         img: Salomatlik,
    //         subcategory: [
    //             {
    //                 id: ,
    //                 name: "",
    //                 items: [
    //                     {
    //                         id: ,
    //                         name: "",
    //                     }
    //                 ]
    //             }
    //         ]
    //     },
]