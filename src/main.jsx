import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ServiceGuard from './app/guards/ServiceGuard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ServiceGuard>
      <App />
    </ServiceGuard>
  </StrictMode>,
)
