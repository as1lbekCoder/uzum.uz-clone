import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
    Cart,
    Checkout,
    Home,
    Layout,
    NotFound,
    Products,
    SinglePage,
    Account,
    Login,
    Orders,
    Register,
    Wishlist,
} from '../pages/importData'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index={true} element={<Home />} />
                    <Route path={"products"} element={<Products />} />
                    <Route path={"category/:slugWidthId"} element={<SinglePage />} />
                    <Route path={"cart"} element={<Cart />} />
                    <Route path={"checkout"} element={<Checkout />} />
                    <Route path={"account"} element={<Account />} />
                    <Route path={"login"} element={<Login />} />
                    <Route path={"orders"} element={<Orders />} />
                    <Route path={"wishlist"} element={<Wishlist />} />
                    <Route path={"register"} element={<Register />} />
                    <Route path={"*"} element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes