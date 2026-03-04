import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./service/server.js"
import './index.css'
import App from './App.jsx'
import { VansProvider } from "./context/VansContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VansProvider>
      <App />
    </VansProvider>
  </StrictMode>
)