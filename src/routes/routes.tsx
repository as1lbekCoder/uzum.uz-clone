import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import "../i18n"
import {
    Cart,
    Checkout,
    Home,
    Layout,
    NotFound,
    Products,
    SinglePage,
    Account,
    Auth,
    Orders,
    Register,
    Wishlist,
} from '../pages/importData'
import { useEffect } from 'react'

const LanguageHandler = () => {
    const location = useLocation()
    const { i18n } = useTranslation()

    useEffect(() => {
        const pathLang = location.pathname.split("/")[1];
        if (["uz", "ru"].includes(pathLang)) {
            i18n.changeLanguage(pathLang as "uz" | "ru");
        } else {
            i18n.changeLanguage("uz"); // default til
        }
    }, [location.pathname, i18n]);

    return null
}

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <LanguageHandler />
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index={true} element={<Home />} />
                </Route>
                <Route path={"/:lang"} element={<Layout />}>
                    <Route index={true} element={<Home />} />
                    <Route path={"products"} element={<Products />} />
                    <Route path={"category/:slugWidthId"} element={<SinglePage />} />
                    <Route path={"cart"} element={<Cart />} />
                    <Route path={"checkout"} element={<Checkout />} />
                    <Route path={"account"} element={<Account />} />
                    <Route path={"#auth"} element={<Auth />} />
                    <Route path={"orders"} element={<Orders />} />
                    <Route path={"wishes"} element={<Wishlist />} />
                    <Route path={"register"} element={<Register />} />
                    <Route path={"*"} element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes