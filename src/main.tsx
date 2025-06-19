import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import variables first to ensure they're available
import './styles/variables.css'
import './styles/global.css'
import './i18n' // Import i18n configuration
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
