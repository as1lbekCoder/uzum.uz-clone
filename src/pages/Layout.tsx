import {
  Footer,
  Navbar
} from "@/components/componentImportData"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout