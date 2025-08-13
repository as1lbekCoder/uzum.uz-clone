import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HeadProvider } from 'react-head'

createRoot(document.getElementById('root')!).render(
  <HeadProvider>
    <App />
  </HeadProvider>,
)
