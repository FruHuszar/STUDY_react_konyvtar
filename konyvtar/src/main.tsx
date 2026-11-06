import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { KonyvProvider } from "./contexts/KonyvContext.tsx";
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <KonyvProvider>
      <App />
    </KonyvProvider>
  </StrictMode>,
)
