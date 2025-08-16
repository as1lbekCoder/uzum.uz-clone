import { LanguageProvider } from "./context/LanguageContext"
import AppRoutes from "./routes/routes"
import { SpeedInsights } from "@vercel/speed-insights/react"

const App = () => {
  return (
    <LanguageProvider>
      <SpeedInsights />
      <AppRoutes />
    </LanguageProvider>
  )
}
export default App