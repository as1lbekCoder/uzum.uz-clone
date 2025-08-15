import AppRoutes from "./routes/routes"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <>
      <SpeedInsights />
      <AppRoutes />
    </>
  )
}
export default App